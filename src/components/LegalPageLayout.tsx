import React from 'react';
import Link from 'next/link';
import SectionContainer from '@/components/layout/SectionContainer'; // Import

interface TocItem {
  id: string;
  title: string;
  level: number; // 1 for h2, 2 for h3
}

interface LegalPageLayoutProps {
  pageTitle: string;
  tocItems: TocItem[]; // Re-added tocItems prop
  children: React.ReactNode; // The main content of the legal page
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  pageTitle,
  tocItems, // Accept tocItems as prop again
  children,
}) => {
  // Removed state, ref, and useEffect for dynamic generation

  return (
    <main className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-24 bg-muted/40">
        {/* Use SectionContainer for header */}
        <SectionContainer className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            {pageTitle}
          </h1>
        </SectionContainer>
      </section>

      {/* Main Content Area with TOC */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        {/* Use SectionContainer for main content, passing grid classes */}
        <SectionContainer className="grid lg:grid-cols-4 gap-12">
          {/* TOC Sidebar (visible on large screens) */}
          {/* Use passed tocItems prop */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-24 self-start h-[calc(100vh-10rem)] overflow-y-auto">
            <nav className="space-y-2">
              <h3 className="font-semibold mb-3 text-lg">On this page</h3>
              {tocItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block text-sm transition-colors hover:text-primary ${
                    item.level === 2 ? 'pl-4' : '' // Indent level 2 items
                  } text-muted-foreground hover:text-foreground`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Content Area - Removed ref */}
          <div className="lg:col-span-3 prose prose-lg dark:prose-invert max-w-none">
            {children}
          </div>
        </SectionContainer>
      </section>
    </main>
  );
};

export default LegalPageLayout;
