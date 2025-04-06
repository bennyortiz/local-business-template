import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import serviceConfig from '@/config/service-config';
import SectionContainer from '@/components/layout/SectionContainer'; // Import

export const metadata: Metadata = {
  title: 'Our Services | Your Local Business', // TODO: Make dynamic
  description: 'Explore the range of services we offer to help your business succeed.', // TODO: Make dynamic
};

// TODO: Placeholder component - Refactor later
/**
 * Renders the page header section with a title and subtitle.
 * @param title - The main title for the header.
 * @param subtitle - The subtitle text displayed below the title.
 */
const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
    {/* Use SectionContainer and pass text-center */}
    <SectionContainer className="text-center">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground mb-4">
        {title}
      </h1>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
        {subtitle}
      </p>
    </SectionContainer>
  </section>
);

/**
 * The main Services page component.
 * Displays a list of services fetched from the configuration.
 */
export default function ServicesPage() {
  const services = serviceConfig.services;

  return (
    <main className="flex flex-col min-h-screen">
      <PageHeader title="Our Services" subtitle="Solutions Tailored for Your Business Needs" />

      <section className="w-full py-12 md:py-24 lg:py-32">
        {/* Use SectionContainer */}
        <SectionContainer>
          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="flex flex-col">
                  <CardHeader>
                    {/* Placeholder for service image */}
                    <div className="relative w-full h-48 bg-muted rounded-t-lg mb-4">
                      <Image
                        src={service.imageUrl || '/images/placeholder.png'} // Use placeholder if no image
                        alt={service.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-t-lg"
                      />
                    </div>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>{service.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {/* Content area for potential future additions */}
                  </CardContent>
                  <CardFooter>
                    <Link href={`/services/${service.slug}`} passHref className="w-full">
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              No services are currently listed. Please check back later.
            </p>
          )}
        </SectionContainer>
      </section>
    </main>
  );
}
