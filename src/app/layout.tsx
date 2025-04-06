import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/providers/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Import site config for metadata and potentially other layout settings
import siteConfig from '@/config/site-config';
// businessConfig might still be needed if other parts of layout use it directly
import businessConfig from '@/config/business-config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Updated Metadata using siteConfig
export const metadata: Metadata = {
  title: {
    default: businessConfig.companyName, // Keep default as company name for simplicity
    template: siteConfig.siteTitleTemplate, // Use template from site config
  },
  description: siteConfig.defaultSiteDescription, // Use default description from site config
  // TODO: Add other metadata like icons, open graph, etc. using siteConfig or businessConfig as needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head /> is automatically managed by Next.js */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider>
          <Header />
          <div className="flex-grow">{children}</div> {/* Ensure content pushes footer down */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
