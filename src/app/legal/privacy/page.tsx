import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Your Local Business', // TODO: Make dynamic
  description: 'Read our privacy policy regarding data collection and usage.', // TODO: Make dynamic
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

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header will go here */}
      <PageHeader title="Privacy Policy" />
      <ContentSection>
        <p>Last Updated: [Date]</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Your Local Business. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at [Contact Email from config].
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
        </p>
        <p>
          The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: Name, Email Address, Phone Number, [Add other types as needed, e.g., from contact form].
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          We use personal information collected via our Website for a variety of business purposes described below... [Detail purposes: e.g., respond to inquiries, send marketing, improve services].
        </p>

        <h2>4. Will Your Information Be Shared With Anyone?</h2>
        <p>
          We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations... [Detail sharing practices, e.g., third-party vendors].
        </p>

        {/* Add other relevant sections: Cookies, Data Retention, Security, User Rights, Policy Updates, Contact Info */}

        <h2>5. Contact Us</h2>
        <p>
          If you have questions or comments about this notice, you may email us at [Contact Email from config] or by post to:
        </p>
        <p>
          [Company Name from config]<br />
          [Company Address from config]
        </p>
      </ContentSection>
      {/* Footer will go here */}
    </main>
  );
}
