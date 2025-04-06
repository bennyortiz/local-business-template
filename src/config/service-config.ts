/**
 * Configuration for services offered by the business and the geographical areas served.
 * This data drives the content for service listing pages, individual service detail pages,
 * and service area landing pages. Ensure slugs are unique and URL-friendly.
 */

/** Represents a single service offered by the business. */
export interface Service {
  /** A unique identifier for the service (e.g., 'web-design'). Used internally and for relationships. */
  id: string;
  /** A URL-friendly string used in the service's page path (e.g., 'custom-web-design'). */
  slug: string;
  /** The display name of the service (e.g., "Custom Web Design"). */
  name: string;
  /** A detailed description of the service, used on the service's main page. */
  description: string;
  /** A concise summary of the service, suitable for cards or overview sections. */
  shortDescription: string;
  /** Path to an image representing the service (relative to the /public directory). */
  imageUrl: string;
  /** Optional list of key features or points about the service. */
  details?: string[];
  /** Optional list of IDs for related services (linking to other Service objects). */
  relatedServices?: string[];
  /** Optional text for call-to-action buttons related to this service (defaults might be used if omitted). E.g., "Get a Quote", "Learn More". */
  callToActionText?: string;
}

/** Represents a geographical area where the business offers services. */
export interface ServiceArea {
  /** A unique identifier for the service area (e.g., 'anytown'). */
  id: string;
  /** The name of the city or primary locality. */
  city: string;
  /** The state or region abbreviation (e.g., "CA", "IL"). */
  state: string;
  /** A URL-friendly string for the area's page path (e.g., 'anytown-ca'). */
  slug: string;
  /** A description specific to the services offered or the business's presence in this area. */
  description: string;
  /** List of service IDs (from the Service interface) available in this specific area. */
  servicesOffered: string[];
}

/** The main configuration object containing all services and service areas. */
export interface ServiceConfig {
  /** An array of all services offered by the business. */
  services: Service[];
  /** An array of all geographical areas served by the business. */
  serviceAreas: ServiceArea[];
}

// --- DEFAULT CONFIGURATION ---
// Define the services and service areas for the business below.
const serviceConfig: ServiceConfig = {
  services: [
    // TODO: Customize, add, or remove services as needed. Ensure 'id' is unique.
    {
      id: 'web-design',
      slug: 'custom-web-design', // Changed slug for clarity
      name: 'Custom Web Design',
      shortDescription: 'Beautiful, responsive websites tailored to your brand.',
      description:
        'We create stunning, user-friendly websites that capture your brand identity and drive results. Our designs are fully responsive and optimized for all devices.',
      imageUrl: '/images/services/web-design.jpg', // TODO: Replace placeholder
      details: [
        'Mobile-first responsive design',
        'Search engine optimization (SEO) basics included',
        'Easy-to-use content management system (CMS) integration',
        'Optimized for fast loading speeds',
      ],
      relatedServices: ['seo', 'hosting'], // Refers to other service 'id's
      callToActionText: 'Get a Web Design Quote', // Example CTA
    },
    {
      id: 'seo',
      slug: 'search-engine-optimization', // Kept slug
      name: 'Search Engine Optimization (SEO)',
      shortDescription: 'Improve your search rankings and get found online.',
      description:
        'Our SEO services help increase your visibility on search engines like Google, driving more organic traffic to your website through keyword research, on-page optimization, and link building.',
      imageUrl: '/images/services/seo.jpg', // TODO: Replace placeholder
      relatedServices: ['web-design', 'content-marketing'],
      callToActionText: 'Boost Your Rankings', // Example CTA
    },
    {
      id: 'hosting',
      slug: 'website-hosting', // Kept slug
      name: 'Reliable Website Hosting',
      shortDescription: 'Fast, secure, and reliable hosting solutions.',
      description:
        'We offer managed website hosting plans with excellent uptime, security features, regular backups, and dedicated support.',
      imageUrl: '/images/services/hosting.jpg', // TODO: Replace placeholder
      relatedServices: ['web-design'],
      // callToActionText: "View Hosting Plans" // Example if needed
    },
    {
      id: 'content-marketing',
      slug: 'content-marketing', // Kept slug
      name: 'Content Marketing',
      shortDescription: 'Engage your audience with valuable content.',
      description:
        'Develop a content strategy that attracts, engages, and retains your target audience through high-quality blog posts, articles, case studies, and more.',
      imageUrl: '/images/services/content-marketing.jpg', // TODO: Replace placeholder
      relatedServices: ['seo'],
      callToActionText: 'Develop Your Content Strategy', // Example CTA
    },
  ],
  serviceAreas: [
    // TODO: Customize, add, or remove service areas. Ensure 'id' and 'slug' are unique.
    {
      id: 'anytown',
      city: 'Anytown',
      state: 'CA', // TODO: Update state
      slug: 'anytown-ca', // TODO: Update slug if city/state changes
      description: 'Serving the vibrant community of Anytown with our full range of expert services.', // Slightly updated description
      servicesOffered: ['web-design', 'seo', 'hosting', 'content-marketing'], // List service 'id's offered here
    },
    {
      id: 'springfield',
      city: 'Springfield',
      state: 'IL', // TODO: Update state
      slug: 'springfield-il', // TODO: Update slug if city/state changes
      description: 'Proudly offering web design and SEO services in Springfield.',
      servicesOffered: ['web-design', 'seo'],
    },
  ],
};

export default serviceConfig;
