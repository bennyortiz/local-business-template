import React from 'react';
import Link from 'next/link';
import businessConfig from '@/config/business-config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      {/* Added mx-auto to explicitly center the container */}
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          {/* Optional: Logo in footer */}
          {/* <Logo /> */}
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {currentYear} {businessConfig.companyName}. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
          <Link href="/legal/terms" className="hover:text-foreground">
            Terms of Service
          </Link>
          <Link href="/legal/privacy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          {/* Add other footer links if needed */}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
