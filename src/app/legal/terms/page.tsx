import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Your Local Business', // TODO: Make dynamic
  description: 'Read our terms and conditions for using our website and services.', // TODO: Make dynamic
};

// Placeholder components - Refactor later
const PageHeader = ({ title }: { title: string }) => (
  <section className="w-full py-12 md:py-24 bg-muted/40">
    {/* Added mx-auto */}
    <div className="container mx-auto px-4 md:px-6 text-center">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
        {title}
      </h1>
    </div>
  </section>
);

const ContentSection = ({ children }: { children: React.ReactNode }) => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    {/* Added mx-auto to container, removed from inner div */}
    <div className="container mx-auto px-4 md:px-6 prose prose-lg dark:prose-invert max-w-3xl">
      {children}
    </div>
  </section>
);

export default function TermsOfServicePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header will go here */}
      <PageHeader title="Terms of Service" />
      <ContentSection>
        <p>Last Updated: [Date]</p>

        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials on Your Local Business's website for personal, non-commercial transitory viewing only... [Detail license terms, restrictions].
        </p>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on Your Local Business's website are provided on an 'as is' basis. Your Local Business makes no warranties, expressed or implied... [Include full disclaimer].
        </p>

        <h2>4. Limitations</h2>
        <p>
          In no event shall Your Local Business or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Your Local Business's website...
        </p>

        {/* Add other relevant sections: Accuracy of Materials, Links, Modifications, Governing Law */}

        <h2>5. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of [Your State/Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at [Contact Email from config].
        </p>
      </ContentSection>
      {/* Footer will go here */}
    </main>
  );
}
