import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/providers/theme-provider';
import Header from '@/components/Header'; // Import Header
import Footer from '@/components/Footer'; // Import Footer
import businessConfig from '@/config/business-config'; // Import business config

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated Metadata using businessConfig
export const metadata: Metadata = {
  title: {
    default: businessConfig.companyName, // Default title
    template: `%s | ${businessConfig.companyName}`, // Title template for child pages
  },
  description: `Providing expert ${'Local Services'} in ${'Your Area'}. Contact ${businessConfig.companyName} today!`, // TODO: Make dynamic/better
  // Add other metadata like icons, open graph, etc. later
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
