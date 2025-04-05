import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Your Local Business', // TODO: Make dynamic from config
  description: 'Learn more about our company history, team, and mission.', // TODO: Make dynamic
};

// TODO: Placeholder components - Refactor later

/**
 * Renders the page header section with a title and subtitle.
 * @param title - The main title for the header.
 * @param subtitle - The subtitle text displayed below the title.
 */
const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground mb-4">
        {title}
      </h1>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
        {subtitle}
      </p>
    </div>
  </section>
);

/**
 * Renders a content section with standard padding and prose styling.
 * @param children - The content to be rendered within the section.
 */
const ContentSection = ({ children }: { children: React.ReactNode }) => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 prose prose-lg dark:prose-invert max-w-3xl">
      {children}
    </div>
  </section>
);

/**
 * The About Us page component.
 * Displays information about the company's history, mission, and team.
 */
export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageHeader title="About Us" subtitle="Our Story, Mission, and Team" />
      <ContentSection>
        <h2>Our History</h2>
        <p>
          Founded in [Year], Your Local Business started with a simple goal: to provide exceptional [Service Category] services to our community. Over the years, we've grown... [Add more history].
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to [State your mission clearly]. We strive to achieve this by [Mention core values or methods].
        </p>
        <h2>Meet the Team</h2>
        <p>
          Our dedicated team is passionate about [Your Industry/Service]. We combine expertise with a commitment to customer satisfaction. [Introduce key team members or roles briefly].
        </p>
        {/* TODO: Placeholder for team member cards/section */}
      </ContentSection>
    </main>
  );
}
