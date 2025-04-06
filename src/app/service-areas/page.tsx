import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
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
  title: 'Service Areas | Your Local Business', // TODO: Make dynamic
  description: 'Find out the areas we serve and the services offered in each location.', // TODO: Make dynamic
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
 * The main Service Areas page component.
 * Displays a list of service areas fetched from the configuration.
 */
export default function ServiceAreasPage() {
  const areas = serviceConfig.serviceAreas;

  return (
    <main className="flex flex-col min-h-screen">
      <PageHeader title="Our Service Areas" subtitle="Proudly Serving These Communities" />

      <section className="w-full py-12 md:py-24 lg:py-32">
        {/* Use SectionContainer */}
        <SectionContainer>
          {areas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areas.map((area) => (
                <Card key={area.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{area.city}, {area.state}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-semibold mb-2 text-sm">Services Offered:</h4>
                    {area.servicesOffered.length > 0 ? (
                       <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {area.servicesOffered.map(serviceId => {
                             const service = serviceConfig.services.find(s => s.id === serviceId);
                             return service ? <li key={serviceId}>{service.name}</li> : null;
                          })}
                       </ul>
                    ) : (
                       <p className="text-sm text-muted-foreground italic">Contact us for details.</p>
                    )}
                  </CardContent>
                  <CardFooter>
                    {/* Link to future dynamic city page */}
                    <Link href={`/service-areas/${area.slug}`} passHref className="w-full">
                      <Button variant="outline" className="w-full">View Area Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              Service area information is currently unavailable.
            </p>
          )}
        </SectionContainer>
      </section>
    </main>
  );
}
