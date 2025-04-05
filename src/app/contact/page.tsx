import React from 'react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import businessConfig from '@/config/business-config'; // Import config for contact details

export const metadata: Metadata = {
  title: 'Contact Us | Your Local Business', // TODO: Make dynamic
  description: 'Get in touch with us for inquiries, quotes, or support.', // TODO: Make dynamic
};

// TODO: Placeholder components - Refactor later

/**
 * Renders the page header section with a title and subtitle.
 * @param title - The main title for the header.
 * @param subtitle - The subtitle text displayed below the title.
 */
const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
    <div className="container px-4 md:px-6 text-center">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground mb-4">
        {title}
      </h1>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
        {subtitle}
      </p>
    </div>
  </section>
);

/**
 * Renders the contact form.
 * Includes fields for name, email, subject, and message.
 * TODO: Add state management and submission logic.
 */
const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
        <Input id="name" placeholder="Your Name" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
        <Input id="email" type="email" placeholder="your.email@example.com" required />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
        <Input id="subject" placeholder="Inquiry Subject" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
        <Textarea id="message" placeholder="Your message..." rows={5} required />
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  );
};

/**
 * Displays the business contact information (phone, email, address).
 * Pulls data from the business configuration file.
 */
const ContactDetails = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Contact Information</h3>
    <p>
      <strong>Phone:</strong>{' '}
      <a href={`tel:${businessConfig.contact.phone}`} className="hover:underline">
        {businessConfig.contact.phone}
      </a>
    </p>
    <p>
      <strong>Email:</strong>{' '}
      <a href={`mailto:${businessConfig.contact.email}`} className="hover:underline">
        {businessConfig.contact.email}
      </a>
    </p>
    <p>
      <strong>Address:</strong><br />
      {businessConfig.contact.address.split(',').map((line, index) => (
        <React.Fragment key={index}>
          {line.trim()}
          <br />
        </React.Fragment>
      ))}
    </p>
    {/* Add business hours if needed */}
  </div>
);

/**
 * Renders a placeholder for the map integration.
 * TODO: Integrate Google Maps or Leaflet.
 */
const MapPlaceholder = () => (
  <div className="w-full h-64 md:h-96 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
    [Map Integration Placeholder]
    {/* TODO: Integrate Google Maps or Leaflet */}
  </div>
);

/**
 * The Contact Us page component.
 * Displays a contact form, contact details, and a map placeholder.
 */
export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you!" />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <ContactDetails />
            <MapPlaceholder />
          </div>
        </div>
      </section>
    </main>
  );
}
