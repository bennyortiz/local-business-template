import businessConfig from './business-config';

/**
 * Configuration for site-wide settings, navigation, and default metadata.
 */

export interface NavLink {
  /** The text displayed for the navigation link. */
  title: string;
  /** The path or URL the link points to. */
  href: string;
  /** Optional description for navigation menus that support it. */
  description?: string;
  /** Optional flag for external links (opens in new tab). */
  external?: boolean;
}

export interface SiteConfig {
  /**
   * Template for page titles. Use '%s' as a placeholder for the specific page title.
   * Example: '%s | My Awesome Business'
   */
  siteTitleTemplate: string;
  /**
   * The default meta description for the site, used on pages that don't specify their own.
   * Keep it concise and relevant to the business.
   */
  defaultSiteDescription: string;
  /**
   * Array of navigation links for the main site header.
   */
  mainNavLinks: NavLink[];
  /**
   * Optional array of navigation links for the site footer.
   * Can be structured into columns if needed by the Footer component.
   */
  footerNavLinks?: NavLink[]; // Consider structuring if footer has columns: { title: string, links: NavLink[] }[]
  /**
   * Optional text displayed in the site footer, typically copyright information.
   * Defaults to a standard copyright notice if omitted.
   */
  footerText?: string;
}

// --- DEFAULT CONFIGURATION ---
// Modify these values to customize site-wide settings and navigation.
const siteConfig: SiteConfig = {
  // TODO: Customize site title structure
  siteTitleTemplate: `%s | ${businessConfig.companyName}`,
  // TODO: Write a compelling default meta description
  defaultSiteDescription: `Official website for ${businessConfig.companyName}. We offer expert local services. Contact us today!`,
  // TODO: Define the main navigation structure
  mainNavLinks: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    {
      title: 'Services',
      href: '/services',
      // Example description for potential dropdowns
      // description: 'Learn about the solutions we offer.',
    },
    { title: 'Service Areas', href: '/service-areas' },
    { title: 'Contact', href: '/contact' },
    // { title: 'Blog', href: '/blog' }, // Example: Add if a blog exists
  ],
  // TODO: Define footer navigation links if needed
  footerNavLinks: [
    { title: 'Privacy Policy', href: '/legal/privacy' },
    { title: 'Terms of Service', href: '/legal/terms' },
    // Add other relevant footer links (e.g., Sitemap, Careers)
  ],
  // TODO: Customize footer text if needed, otherwise default is used
  // footerText: `Custom footer text here.`,
};

// Function to get the footer text, providing a default if not set
export const getFooterText = (): string => {
  return siteConfig.footerText ?? `© ${new Date().getFullYear()} ${businessConfig.companyName}. All rights reserved.`;
};


export default siteConfig;
