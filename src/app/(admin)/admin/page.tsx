import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Your Local Business',
  // Prevent indexing of admin pages
  robots: {
    index: false,
    follow: false,
  },
};

// Placeholder components - Refactor later
const SectionCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border bg-card text-card-foreground rounded-lg shadow-sm">
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  </div>
);

export default function AdminDashboardPage() {
  // TODO: Fetch current config data to display/edit
  // TODO: Implement forms and API calls for CRUD operations

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Configuration Management</h1>

      <SectionCard title="Business Configuration">
        <p className="text-muted-foreground">
          Manage general business settings like name, contact info, and primary theme color.
        </p>
        {/* Placeholder for business config form */}
        <div className="mt-4 p-4 border border-dashed rounded-md">
          [Business Config Form Placeholder]
        </div>
      </SectionCard>

      <SectionCard title="Services Configuration">
        <p className="text-muted-foreground">
          Add, edit, or remove services offered by the business.
        </p>
        {/* Placeholder for services config form/table */}
        <div className="mt-4 p-4 border border-dashed rounded-md">
          [Services Config CRUD Placeholder]
        </div>
      </SectionCard>

      <SectionCard title="Service Areas Configuration">
        <p className="text-muted-foreground">
          Define the geographical areas served and the specific services offered in each.
        </p>
        {/* Placeholder for service areas config form/table */}
        <div className="mt-4 p-4 border border-dashed rounded-md">
          [Service Areas Config CRUD Placeholder]
        </div>
      </SectionCard>
    </div>
  );
}
