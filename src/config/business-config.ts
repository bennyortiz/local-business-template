/**
 * Configuration for business-specific settings.
 * This includes details like company name, logo, contact information,
 * and the primary color for the theme.
 */

export interface BusinessConfig {
  companyName: string;
  logoUrl: string; // Path relative to /public directory
  primaryColor: string; // Hex code (e.g., '#007bff')
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  socialMedia: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

const businessConfig: BusinessConfig = {
  companyName: 'Your Local Business',
  logoUrl: '/images/logo.png', // Placeholder path
  primaryColor: '#3b82f6', // Example: Blue-500
  contact: {
    phone: '555-123-4567',
    email: 'info@yourbusiness.com',
    address: '123 Main St, Anytown, USA 12345',
  },
  socialMedia: {
    // Add URLs as needed
  },
};

export default businessConfig;
