'use client';

import Link from 'next/link';
import Image from 'next/image'; // Keep for potential logo use
import { Menu, X as XIcon } from "lucide-react"; // Simplified icons needed
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import businessConfig from "@/config/business-config";
import siteConfig, { NavLink } from "@/config/site-config"; // Import siteConfig and NavLink
import SectionContainer from '@/components/layout/SectionContainer';

// Define hardcoded auth links for now (can be moved to siteConfig if needed)
const authLinks = {
  login: { text: "Client Login", url: "/login" }, // TODO: Update URL if needed
  signup: { text: "Get a Quote", url: "/contact" },
};

// --- Helper Functions (defined outside the component) ---

// Renders a desktop navigation item (now only top-level links)
const renderMenuItem = (item: NavLink) => {
  return (
    <NavigationMenuItem key={item.title}>
      <Link href={item.href} legacyBehavior passHref>
        <NavigationMenuLink
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
        >
          {item.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

// Renders a mobile navigation item (now only top-level links, no accordion)
const renderMobileMenuItem = (item: NavLink) => {
  return (
    <Link
      key={item.title}
      href={item.href}
      className="flex items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-muted/50 hover:text-foreground"
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
    >
      {item.title}
    </Link>
  );
};


// --- Consolidated Header Component ---
const Header = () => {
  // Use siteConfig for navigation links
  const mainNavLinks = siteConfig.mainNavLinks;
  const footerNavLinks = siteConfig.footerNavLinks || []; // Use footer links for mobile "More Resources"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <SectionContainer>
        <section className="flex h-20 w-full items-center">
          <div className="w-full">
            {/* --- Desktop Navigation --- */}
            <nav className="hidden justify-between lg:flex">
              <div className="flex items-center gap-6">
                {/* Logo/Company Name */}
                <Link href="/" className="flex items-center">
                  {/* TODO: Add Image component back if logoUrl is valid and image exists */}
                  {/* <Image src={businessConfig.logoUrl} alt={businessConfig.companyName} width={32} height={32} className="mr-2" /> */}
                  <span className="text-lg font-semibold">{businessConfig.companyName}</span>
                </Link>
                {/* Main Nav Links */}
                <div className="flex items-center">
                  <NavigationMenu>
                    <NavigationMenuList>
                      {mainNavLinks.map((item) => renderMenuItem(item))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </div>
              {/* Auth Buttons */}
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link href={authLinks.login.url}>{authLinks.login.text}</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={authLinks.signup.url}>{authLinks.signup.text}</Link>
                </Button>
              </div>
            </nav>

            {/* --- Mobile Navigation --- */}
            <div className="block w-full lg:hidden">
              <div className="flex w-full items-center justify-between">
                {/* Mobile Logo/Company Name */}
                <Link href="/" className="flex items-center">
                  <span className="text-lg font-semibold">{businessConfig.companyName}</span>
                </Link>
                {/* Mobile Drawer */}
                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Menu className="size-4" />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="h-full overflow-y-auto px-6 pt-0">
                    {/* Drawer Header */}
                    <DrawerHeader className="mb-4 flex h-20 flex-row items-center justify-between border-b px-0">
                      <DrawerTitle className="text-lg font-semibold">
                        <Link href="/" className="flex items-center">
                          {businessConfig.companyName}
                        </Link>
                      </DrawerTitle>
                      <DrawerDescription className="sr-only">
                        Mobile navigation menu
                      </DrawerDescription>
                      <DrawerClose asChild>
                        <Button variant="ghost" size="icon" className="size-7">
                          <XIcon className="size-4" />
                          <span className="sr-only">Close</span>
                        </Button>
                      </DrawerClose>
                    </DrawerHeader>
                    {/* Drawer Body */}
                    <div className="flex flex-col space-y-6">
                      {/* Main Navigation */}
                      <div className="space-y-1">
                        <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Navigation</h3>
                        <div className="flex w-full flex-col">
                          {mainNavLinks.map((item) => renderMobileMenuItem(item))}
                        </div>
                      </div>
                      {/* Quick Actions */}
                      <div className="space-y-3 py-4">
                        <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Quick Actions</h3>
                        <Button asChild variant="outline" className="w-full justify-start">
                          <Link href={authLinks.login.url}>
                            <span className="mr-2">→</span> {authLinks.login.text}
                          </Link>
                        </Button>
                        <Button asChild className="w-full justify-start">
                          <Link href={authLinks.signup.url}>
                            <span className="mr-2">✓</span> {authLinks.signup.text}
                          </Link>
                        </Button>
                      </div>
                      {/* More Resources */}
                      {footerNavLinks.length > 0 && (
                        <div className="border-t pt-4">
                          <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">More Resources</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {footerNavLinks.map((link, idx) => (
                              <Link
                                key={idx}
                                className="flex h-9 items-center rounded-md px-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                              >
                                {link.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </section>
      </SectionContainer>
    </header>
  );
};

export default Header;
