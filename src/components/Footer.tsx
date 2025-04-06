"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Corrected import path
import { Input } from '@/components/ui/input'; // Corrected import path
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'; // Corrected import path
import { Facebook, Instagram, Linkedin, Send, Twitter } from 'lucide-react';
import businessConfig from '@/config/business-config';
import siteConfig, { NavLink, getFooterText } from '@/config/site-config'; // Import siteConfig and helpers
import SectionContainer from '@/components/layout/SectionContainer';

const Footer = () => {
  // Dummy handler for newsletter form
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd handle the submission here
    console.log('Newsletter submitted (dummy)');
    alert('Thank you for subscribing! (Dummy implementation)');
    // Optionally clear the input
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('email') as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  };

  // Get links from siteConfig
  const mainNavLinks = siteConfig.mainNavLinks; // Use main links for "Quick Links" section
  const footerNavLinks = siteConfig.footerNavLinks || []; // Use footer links for bottom bar

  return (
    <footer className="relative border-t bg-background text-foreground">
      <SectionContainer className="py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter Section (Remains the same) */}
          <div className="relative">
            <h2 className="mb-4 text-lg font-semibold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Join our newsletter for updates.
            </p>
            <form className="relative" onSubmit={handleNewsletterSubmit}>
              <Input
                type="email"
                name="email" // Added name attribute
                placeholder="Enter your email"
                className="pr-12" // Removed backdrop-blur-sm as it might not be desired
                required // Added required attribute
              />
              <Button
                type="submit"
                size="icon"
                aria-label="Subscribe to newsletter" // Added aria-label
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            {/* Optional decorative element */}
            {/* <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" /> */}
          </div>

          {/* Quick Links Section - Use mainNavLinks */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block transition-colors hover:text-primary"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Us Section (Remains the same) */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>{businessConfig.contact.address}</p>
              <p>Phone: {businessConfig.contact.phone}</p>
              <p>Email: {businessConfig.contact.email}</p>
            </address>
          </div>

          {/* Follow Us Section (Remains the same) */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              {/* Placeholder links using '#' */}
              {businessConfig.socialMedia.facebook !== undefined && ( // Conditionally render if URL exists (even if empty string)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full" asChild>
                        <a href={businessConfig.socialMedia.facebook || '#'} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                          <Facebook className="h-4 w-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {businessConfig.socialMedia.twitter !== undefined && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                       <Button variant="outline" size="icon" className="rounded-full" asChild>
                         <a href={businessConfig.socialMedia.twitter || '#'} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                           <Twitter className="h-4 w-4" />
                         </a>
                       </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {businessConfig.socialMedia.instagram !== undefined && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                       <Button variant="outline" size="icon" className="rounded-full" asChild>
                         <a href={businessConfig.socialMedia.instagram || '#'} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                           <Instagram className="h-4 w-4" />
                         </a>
                       </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {businessConfig.socialMedia.linkedin !== undefined && (
                 <TooltipProvider>
                   <Tooltip>
                     <TooltipTrigger asChild>
                       <Button variant="outline" size="icon" className="rounded-full" asChild>
                         <a href={businessConfig.socialMedia.linkedin || '#'} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                           <Linkedin className="h-4 w-4" />
                         </a>
                       </Button>
                     </TooltipTrigger>
                     <TooltipContent>
                       <p>Connect on LinkedIn</p>
                     </TooltipContent>
                   </Tooltip>
                 </TooltipProvider>
              )}
            </div>
             {/* Removed Dark Mode Toggle */}
          </div>
        </div>

        {/* Bottom Bar - Use getFooterText and footerNavLinks */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          {/* Use getFooterText for copyright */}
          <p className="text-sm text-muted-foreground">
            {getFooterText()}
          </p>
          {/* Use footerNavLinks */}
          {footerNavLinks.length > 0 && (
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
              {footerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="transition-colors hover:text-primary"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
