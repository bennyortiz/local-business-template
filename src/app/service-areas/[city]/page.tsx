import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import serviceConfig from '@/config/service-config';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceAreaDetailPageProps {
  params: { city: string }; // 'city' corresponds to the dynamic segment [city]
}

/**
 * Retrieves a service area object from the configuration based on its slug.
 * @param slug - The URL slug of the service area (expected to be the city name).
 * @returns The service area object or undefined if not found.
 */
const getAreaBySlug = (slug: string) => {
  return serviceConfig.serviceAreas.find((area) => area.slug === slug);
};

/**
 * Generates dynamic metadata for each service area page based on the city slug.
 * @param params - The page parameters containing the city slug.
 * @returns A Metadata object for the page.
 */
export async function generateMetadata({ params }: ServiceAreaDetailPageProps): Promise<Metadata> {
  const area = getAreaBySlug(params.city);

  if (!area) {
    return {
      title: 'Area Not Found',
    };
  }

  return {
    title: `Services in ${area.city}, ${area.state} | Your Local Business`, // TODO: Make dynamic
    description: area.description || `Explore the services offered by Your Local Business in ${area.city}.`, // Fallback description
  };
}

// Optional: Pre-render paths during build if using Static Site Generation (SSG)
// export async function generateStaticParams() {
//   return serviceConfig.serviceAreas.map((area) => ({
//     city: area.slug,
//   }));
// }

/**
 * Renders the detailed page for a specific service area (city).
 * Fetches area data based on the URL slug (city name).
 * @param params - The page parameters containing the city slug.
 */
export default function ServiceAreaDetailPage({ params }: ServiceAreaDetailPageProps) {
  const area = getAreaBySlug(params.city);

  // If area is not found based on the slug, trigger a 404 Not Found page
  if (!area) {
    notFound();
  }

  // Retrieve the full service details for services offered in this specific area
  const servicesInArea = area.servicesOffered
    .map(serviceId => serviceConfig.services.find(s => s.id === serviceId))
    .filter(Boolean); // Ensure only valid service objects are included

  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground mb-4">
            Serving {area.city}, {area.state}
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {area.description}
          </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-12">
            Services Available in {area.city}
          </h2>
          {servicesInArea.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesInArea.map((service) => (
                service && ( // Defensive check: ensure service object exists before rendering card
                  <Card key={service.id} className="flex flex-col">
                    <CardHeader>
                      <CardTitle>{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/services/${service.slug}`} passHref className="w-full">
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                )
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              Specific service details for this area are currently unavailable. Please contact us for more information.
            </p>
          )}
           <div className="text-center mt-12">
             <Link href="/contact" passHref>
                <Button>Contact Us for Services in {area.city}</Button>
             </Link>
           </div>
        </div>
      </section>
    </main>
  );
}
