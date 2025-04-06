import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import serviceConfig from '@/config/service-config';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SectionContainer from '@/components/layout/SectionContainer'; // Import

interface ServiceDetailPageProps {
  params: { slug: string };
}

/**
 * Retrieves a service object from the configuration based on its slug.
 * @param slug - The URL slug of the service.
 * @returns The service object or undefined if not found.
 */
const getServiceBySlug = (slug: string) => {
  return serviceConfig.services.find((service) => service.slug === slug);
};

/**
 * Generates dynamic metadata for each service page based on the slug.
 * @param params - The page parameters containing the service slug.
 * @returns A Metadata object for the page.
 */
export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.name} | Service Details`, // TODO: Improve title structure
    description: service.shortDescription || `Learn more about our ${service.name} service.`, // Fallback description
  };
}

// Optional: Pre-render paths during build if using Static Site Generation (SSG)
// export async function generateStaticParams() {
//   return serviceConfig.services.map((service) => ({
//     slug: service.slug,
//   }));
// }

/**
 * Renders the detailed page for a specific service.
 * Fetches service data based on the URL slug.
 * @param params - The page parameters containing the service slug.
 */
export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);

  // If service is not found based on the slug, trigger a 404 Not Found page
  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServices
    ?.map(relatedId => serviceConfig.services.find(s => s.id === relatedId))
    .filter(Boolean); // Ensure only valid service objects are included

  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        {/* Use SectionContainer for header */}
        <SectionContainer className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground mb-4">
            {service.name}
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {service.shortDescription}
          </p>
        </SectionContainer>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        {/* Use SectionContainer for main content, passing grid classes */}
        <SectionContainer className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 prose prose-lg dark:prose-invert max-w-none">
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
               <Image
                 src={service.imageUrl || '/images/placeholder.png'} // Fallback image
                 alt={service.name}
                 fill
                 style={{ objectFit: 'cover' }}
                 priority // Prioritize loading this image as it's likely LCP
               />
            </div>

            <h2>Service Description</h2>
            <p>{service.description}</p>

            {service.details && service.details.length > 0 && (
              <>
                <h3>Key Features / Details:</h3>
                <ul>
                  {service.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </>
            )}
            {/* TODO: Add more content sections as needed (e.g., Benefits, Process) */}
          </div>

          <aside className="lg:col-span-1 space-y-8">
             {relatedServices && relatedServices.length > 0 && (
                <div className="p-6 border rounded-lg bg-card text-card-foreground">
                   <h3 className="text-xl font-semibold mb-4">Related Services</h3>
                   <ul className="space-y-2">
                      {relatedServices.map((related) => (
                         related && ( // Defensive check: ensure related service object exists
                           <li key={related.id}>
                              <Link href={`/services/${related.slug}`} className="text-primary hover:underline">
                                 {related.name}
                              </Link>
                           </li>
                         )
                      ))}
                   </ul>
                </div>
             )}
             <div className="p-6 border rounded-lg bg-primary text-primary-foreground">
                <h3 className="text-xl font-semibold mb-4">Interested?</h3>
                <p className="mb-4">Contact us today to discuss how our {service.name} service can help you.</p>
                <Link href="/contact" passHref>
                   <Button variant="secondary" className="w-full">Contact Us</Button>
                 </Link>
             </div>
          </aside>
        </SectionContainer>
      </section>
    </main>
  );
}
