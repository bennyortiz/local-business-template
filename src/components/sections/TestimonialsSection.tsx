"use client"; // Required for hooks

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import SectionContainer from '@/components/layout/SectionContainer';
import TestimonialCard, { Testimonial } from '@/components/ui/TestimonialCard';
import { cn } from '@/lib/utils';

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
  className?: string;
  id?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  description,
  testimonials,
  className,
  id,
}) => {
  // Setup Embla Carousel with Autoplay plugin
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true, // Enable looping
      align: 'start', // Align slides to the start
    },
    [
      Autoplay({
        delay: 3000, // 3-second delay
        stopOnInteraction: false, // Don't stop autoplay on user interaction
        stopOnMouseEnter: true, // Pause autoplay on hover
      }),
    ]
  );

  return (
    <section
      id={id}
      className={cn('w-full py-16 md:py-24 lg:py-32 bg-background', className)}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <SectionContainer>
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h2
            id={id ? `${id}-heading` : undefined}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground mb-4"
          >
            {title}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        {/* Testimonials Carousel */}
        {testimonials && testimonials.length > 0 ? (
          // Embla viewport: overflow-hidden and ref
          <div className="overflow-hidden" ref={emblaRef}>
            {/* Embla container: flex layout */}
            <div className="flex -ml-4"> {/* Negative margin to offset slide padding */}
              {testimonials.map((testimonial, index) => (
                // Embla slide: flex-shrink/grow-0, responsive basis, padding
                <div
                  key={index}
                  className="flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4" // Responsive width + padding
                >
                  {/* Ensure cards stretch to fill height */}
                  <TestimonialCard {...testimonial} className="h-full" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No testimonials available yet.</p>
        )}
      </SectionContainer>
    </section>
  );
};

export default TestimonialsSection;
