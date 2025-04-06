import React from 'react';
import { Metadata } from 'next';
// Import the configuration files
import businessConfig from '@/config/business-config';
import serviceConfig from '@/config/service-config';
import siteConfig from '@/config/site-config';

export const metadata: Metadata = {
  // Use dynamic company name in title
  title: `Admin Dashboard | ${businessConfig.companyName}`,
  robots: {
    index: false, // Keep admin pages non-indexed
    follow: false,
  },
};

// Simple card component for structure
const SectionCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      <div>{children}</div>
    </div>
  </div>
);

// Component to display config data read-only
const ConfigDisplay = ({ configData }: { configData: object }) => (
  <pre className="mt-4 overflow-x-auto rounded-md bg-muted p-4 text-sm text-muted-foreground">
    {JSON.stringify(configData, null, 2)}
  </pre>
);


export default function AdminDashboardPage() {
  // This page displays the current configuration settings read-only.
  // Editing these requires modifying the config files directly in the codebase.

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Current Site Configuration (Read-Only)</h1>
      <p className="text-muted-foreground">
        This page shows the current settings loaded from the configuration files. To make changes, edit the corresponding files in <code className="text-xs bg-muted px-1 py-0.5 rounded">src/config/</code>.
      </p>

      <SectionCard title="Business Configuration (`business-config.ts`)">
        <p className="text-sm text-muted-foreground">
          Core business details, contact info, branding colors, etc.
        </p>
        <ConfigDisplay configData={businessConfig} />
      </SectionCard>

      <SectionCard title="Site Configuration (`site-config.ts`)">
        <p className="text-sm text-muted-foreground">
          Site-wide settings like navigation links and default metadata.
        </p>
        <ConfigDisplay configData={siteConfig} />
      </SectionCard>

      <SectionCard title="Services Configuration (`service-config.ts`)">
        <p className="text-sm text-muted-foreground">
          Details about services offered by the business.
        </p>
        <ConfigDisplay configData={serviceConfig.services} />
      </SectionCard>

      <SectionCard title="Service Areas Configuration (`service-config.ts`)">
        <p className="text-sm text-muted-foreground">
          Geographical areas served and the services offered within them.
        </p>
        <ConfigDisplay configData={serviceConfig.serviceAreas} />
      </SectionCard>

    </div>
  );
}
