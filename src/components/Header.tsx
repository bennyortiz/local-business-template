import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import businessConfig from '@/config/business-config';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Added mx-auto to explicitly center the container */}
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          {/* Display Company Name as Text Link */}
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">{businessConfig.companyName}</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
            <Link
              href="/services" // Link to future services page
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Services
            </Link>
            <Link
              href="/service-areas" // Link to future service areas page
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Service Areas
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </Link>
          </nav>
        </div>
        {/* Add Mobile Menu Trigger here later */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost">Login</Button> {/* Placeholder for Auth */}
        </div>
      </div>
    </header>
  );
};

export default Header;
