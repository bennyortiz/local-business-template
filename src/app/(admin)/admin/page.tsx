import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link'; // Import Link for internal navigation
import { Button } from '@/components/ui/button'; // Import Button for links
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

// Helper to display config values nicely
const ConfigItem = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b last:border-b-0">
    <span className="text-sm font-medium text-muted-foreground">{label}</span>
    <span className="text-sm text-right">{value}</span>
  </div>
);

// Helper for color swatch
const ColorSwatch = ({ color }: { color: string }) => (
  <div className="inline-flex items-center space-x-2">
    <div className="h-4 w-4 rounded border" style={{ backgroundColor: color }}></div>
    <code>{color}</code>
  </div>
);

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Admin Dashboard & Quick Config</h1>
      <p className="text-muted-foreground">
        Overview of the current site configuration loaded from <code className="text-xs bg-muted px-1 py-0.5 rounded">src/config/</code>. Edit the files directly to make changes.
      </p>

      {/* Business Configuration Card */}
      <SectionCard title="Business Configuration">
        <p className="text-sm text-muted-foreground mb-4">
          Controls core business details like name, contact info, address, social media links, and branding colors (used throughout the site).
        </p>
        <ul className="list-disc list-inside text-sm mb-4 space-y-1">
          <li>Key Setting: <code className="text-xs bg-muted px-1 py-0.5 rounded">companyName</code> - Used in titles, footers, etc.</li>
          <li>Key Setting: <code className="text-xs bg-muted px-1 py-0.5 rounded">themeBaseColor</code> - Defines brand theme.</li>
          <li>Key Setting: <code className="text-xs bg-muted px-1 py-0.5 rounded">contact</code> - Phone, email, address details.</li>
        </ul>
        <div className="mt-4 space-y-2">
          <ConfigItem label="Company Name" value={businessConfig.companyName} />
          <ConfigItem label="Theme Base Color" value={<ColorSwatch color={businessConfig.themeBaseColor} />} />
          <ConfigItem label="Contact Phone" value={businessConfig.contact.phone} />
          <ConfigItem label="Contact Email" value={businessConfig.contact.email} />
          <ConfigItem label="Contact Address" value={businessConfig.contact.address} />
          {/* Optionally display social links if needed */}
        </div>
      </SectionCard>

      {/* Site Configuration Card */}
      <SectionCard title="Site Configuration">
        <p className="text-sm text-muted-foreground mb-4">
          Manages site structure (navigation menus), default SEO metadata (title templates, descriptions), and potentially other global site settings.
        </p>
         <ul className="list-disc list-inside text-sm mb-4 space-y-1">
          <li>Key Setting: <code className="text-xs bg-muted px-1 py-0.5 rounded">mainNav</code> - Defines the main header navigation links.</li>
          <li>Key Setting: <code className="text-xs bg-muted px-1 py-0.5 rounded">footerNavLinks</code> - Defines footer navigation links.</li>
          <li>Key Setting: <code className="text-xs bg-muted px-1 py-0.5 rounded">siteTitleTemplate</code> - Base for page titles.</li>
        </ul>
         <div className="mt-4 space-y-2">
           <ConfigItem label="Site Title Template" value={<code>{siteConfig.siteTitleTemplate}</code>} />
           <ConfigItem label="Default Description" value={siteConfig.defaultSiteDescription} />
           <ConfigItem label="Main Nav Links" value={`${siteConfig.mainNavLinks.length} links defined`} />
           <ConfigItem label="Footer Nav Links" value={`${siteConfig.footerNavLinks?.length ?? 0} links defined`} />
         </div>
      </SectionCard>

      {/* Services & Areas Configuration Card */}
      <SectionCard title="Services & Service Areas">
        <p className="text-sm text-muted-foreground mb-4">
          Defines the services offered and the geographical areas served. This data is used to automatically generate service detail pages and location-specific pages.
        </p>
         <ul className="list-disc list-inside text-sm mb-4 space-y-1">
          <li>Key Setting: <code className="text-xs bg-muted px-1 py-0.5 rounded">services</code> array - List of all services offered.</li>
          <li>Key Setting: <code className="text-xs bg-muted px-1 py-0.5 rounded">serviceAreas</code> array - List of geographical areas served.</li>
        </ul>
        <div className="mt-4 space-y-2">
          <ConfigItem label="Services Defined" value={`${serviceConfig.services.length} services`} />
          <ul className="list-disc list-inside pl-4 text-sm">
            {serviceConfig.services.map(s => <li key={s.id}>{s.name}</li>)}
          </ul>
          <ConfigItem label="Service Areas Defined" value={`${serviceConfig.serviceAreas.length} areas`} />
           <ul className="list-disc list-inside pl-4 text-sm">
            {serviceConfig.serviceAreas.map(a => <li key={a.id}>{a.city}, {a.state}</li>)}
          </ul>
        </div>
      </SectionCard>

      {/* Developer Resources Card */}
      <SectionCard title="Developer Resources">
        <p className="text-sm text-muted-foreground mb-4">
          Quick links to useful parts of the template for customization and reference.
        </p>
        <div className="space-y-2 flex flex-col items-start">
           <Link href="/examples/navbar" passHref>
             <Button variant="link" className="p-0 h-auto" asChild>
               View Navbar Examples
             </Button>
           </Link>
           <p className="text-sm">
              UI Components: Located in <code className="text-xs bg-muted px-1 py-0.5 rounded">src/components/ui/</code>
           </p>
           {/* Link to Theme Provider might be less useful now, but keep for reference */}
           <p className="text-sm">
             Theme Provider: <code className="text-xs bg-muted px-1 py-0.5 rounded">src/components/providers/theme-provider.tsx</code>
           </p>
        </div>
      </SectionCard>
   </div>
  );
}
