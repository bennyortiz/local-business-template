/**
 * Configuration for services offered and service areas covered.
 * This data will be used to dynamically generate service listing pages,
 * individual service detail pages, and service area pages.
 */

export interface Service {
  id: string;
  slug: string; // URL-friendly identifier
  name: string;
  description: string;
  shortDescription: string; // For cards/summaries
  imageUrl: string; // Path relative to /public directory
  details?: string[]; // Optional list of detailed points
  relatedServices?: string[]; // Optional list of related service IDs
}

export interface ServiceArea {
  id: string;
  city: string; // e.g., "Anytown"
  state: string; // e.g., "CA"
  slug: string; // URL-friendly identifier, e.g., "anytown-ca"
  description: string; // Description specific to this service area
  servicesOffered: string[]; // List of service IDs offered in this area
}

export interface ServiceConfig {
  services: Service[];
  serviceAreas: ServiceArea[];
}

const serviceConfig: ServiceConfig = {
  services: [
    {
      id: 'web-design',
      slug: 'web-design',
      name: 'Custom Web Design',
      shortDescription: 'Beautiful, responsive websites tailored to your brand.',
      description:
        'We create stunning, user-friendly websites that capture your brand identity and drive results. Our designs are fully responsive and optimized for all devices.',
      imageUrl: '/images/services/web-design.jpg', // Placeholder
      details: [
        'Mobile-first responsive design',
        'SEO optimization included',
        'Content management system integration',
        'Fast loading speeds',
      ],
      relatedServices: ['seo', 'hosting'],
    },
    {
      id: 'seo',
      slug: 'search-engine-optimization',
      name: 'Search Engine Optimization (SEO)',
      shortDescription: 'Improve your search rankings and get found online.',
      description:
        'Our SEO services help increase your visibility on search engines like Google, driving more organic traffic to your website.',
      imageUrl: '/images/services/seo.jpg', // Placeholder
      relatedServices: ['web-design', 'content-marketing'],
    },
    {
      id: 'hosting',
      slug: 'website-hosting',
      name: 'Reliable Website Hosting',
      shortDescription: 'Fast, secure, and reliable hosting solutions.',
      description:
        'We offer managed website hosting plans with excellent uptime, security features, and support.',
      imageUrl: '/images/services/hosting.jpg', // Placeholder
      relatedServices: ['web-design'],
    },
    {
      id: 'content-marketing',
      slug: 'content-marketing',
      name: 'Content Marketing',
      shortDescription: 'Engage your audience with valuable content.',
      description:
        'Develop a content strategy that attracts, engages, and retains your target audience through blog posts, articles, and more.',
      imageUrl: '/images/services/content-marketing.jpg', // Placeholder
      relatedServices: ['seo'],
    },
  ],
  serviceAreas: [
    {
      id: 'anytown',
      city: 'Anytown',
      state: 'CA',
      slug: 'anytown-ca',
      description: 'Serving the vibrant community of Anytown with all our services.',
      servicesOffered: ['web-design', 'seo', 'hosting', 'content-marketing'],
    },
    {
      id: 'springfield',
      city: 'Springfield',
      state: 'IL',
      slug: 'springfield-il',
      description: 'Proudly offering web design and SEO services in Springfield.',
      servicesOffered: ['web-design', 'seo'],
    },
  ],
};

export default serviceConfig;
