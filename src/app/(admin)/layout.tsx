import React from 'react';

// TODO: Add authentication check here later
// This layout will wrap all pages within the (admin) group

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // For now, just render children. Authentication logic will be added.
  // We might want a different header/sidebar for the admin section.
  return (
    <div className="min-h-screen bg-muted/40">
      {/* Placeholder for potential Admin-specific Sidebar/Header */}
      <nav className="bg-background border-b p-4">
        <div className="container mx-auto">
          <h1 className="text-lg font-semibold">Admin Panel</h1>
        </div>
      </nav>
      <main className="container mx-auto p-4 md:p-8">
        {/* Add authentication check wrapper here later */}
        {children}
      </main>
      {/* Maybe a minimal admin footer */}
    </div>
  );
}
