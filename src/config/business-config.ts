/**
 * Configuration for core business-specific settings.
 * This includes details like company name, logos, contact information,
 * social media links, operating hours, and the base color for theme generation.
 */

export interface BusinessHours {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  times: string; // e.g., "9:00 AM - 5:00 PM", "Closed"
}

export interface BusinessConfig {
  /** The legal name of the business. Used in titles, footers, etc. */
  companyName: string;
  /** Path to the primary logo file (relative to the /public directory). Used in light mode. */
  logoUrl: string;
  /** Optional path to a logo variant suitable for dark backgrounds (relative to /public). Falls back to logoUrl if not provided. */
  logoDarkUrl?: string;
  /** The base hex color code (e.g., '#3b82f6') used to dynamically generate the primary color palette for the site theme. */
  themeBaseColor: string;
  /** Contact information for the business. */
  contact: {
    /** Primary phone number. */
    phone: string;
    /** Primary contact email address. */
    email: string;
    /** Physical address of the business. */
    address: string;
  };
  /** URLs for the business's social media profiles. Leave blank or omit if not applicable. */
  socialMedia: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    // Add other platforms as needed (e.g., youtube, tiktok)
  };
  /** Optional array defining the business's operating hours. */
  hours?: BusinessHours[];
}

// --- DEFAULT CONFIGURATION ---
// Modify these values to customize the site for a specific business.
const businessConfig: BusinessConfig = {
  companyName: 'Your Local Business',
  logoUrl: '/images/logo.png', // TODO: Replace with actual logo path
  // logoDarkUrl: '/images/logo-dark.png', // Optional: Add if you have a dark mode logo
  themeBaseColor: '#3b82f6', // Example: Tailwind Blue-500. Change this to set the primary theme color.
  contact: {
    phone: '555-123-4567', // TODO: Replace with actual phone
    email: 'info@yourbusiness.com', // TODO: Replace with actual email
    address: '123 Main St, Anytown, USA 12345', // TODO: Replace with actual address
  },
  socialMedia: {
    // TODO: Replace # with actual URLs or remove if not used
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#',
  },
  // TODO: Uncomment and define actual hours if needed
  // hours: [
  //   { day: 'Monday', times: '9:00 AM - 5:00 PM' },
  //   { day: 'Tuesday', times: '9:00 AM - 5:00 PM' },
  //   { day: 'Wednesday', times: '9:00 AM - 5:00 PM' },
  //   { day: 'Thursday', times: '9:00 AM - 5:00 PM' },
  //   { day: 'Friday', times: '9:00 AM - 4:00 PM' },
  //   { day: 'Saturday', times: 'Closed' },
  //   { day: 'Sunday', times: 'Closed' },
  // ],
};

export default businessConfig;
