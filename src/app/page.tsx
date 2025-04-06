import { Button } from '@/components/ui/button';
import SectionContainer from '@/components/layout/SectionContainer';
import TestimonialsSection from '@/components/sections/TestimonialsSection'; // Import TestimonialsSection
import { Testimonial } from '@/components/ui/TestimonialCard'; // Import Testimonial type

// TODO: Placeholder components - These will be moved to /components/ui/sections later

/**
 * Renders the main hero section for the homepage.
 * Includes the main headline, tagline, and a call-to-action button.
 */
const HeroSection = () => (
  <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48 bg-muted/40">
    {/* Use SectionContainer and pass text-center */}
    <SectionContainer className="text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-foreground mb-6">
        Welcome to Your Local Business
      </h1>
      <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl lg:text-2xl mb-8">
        Providing top-notch [Your Service Category] services in [Your Area].
      </p>
      <Button size="lg">Get a Free Quote</Button>
    </SectionContainer>
  </section>
);

/**
 * Renders an overview of the services offered.
 * Displays a few placeholder service cards and a button to view all services.
 */
const ServiceOverviewSection = () => (
  <section className="w-full py-16 md:py-24 lg:py-32">
    {/* Use SectionContainer */}
    <SectionContainer>
      <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-16">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* TODO: Placeholder Service Cards - will be dynamic later */}
        <div className="p-6 border rounded-lg bg-card text-card-foreground transition-shadow hover:shadow-md">
          <h3 className="text-xl font-semibold mb-3">Service One</h3>
          <p className="text-muted-foreground text-sm">Brief description of service one.</p>
        </div>
        <div className="p-6 border rounded-lg bg-card text-card-foreground transition-shadow hover:shadow-md">
          <h3 className="text-xl font-semibold mb-3">Service Two</h3>
          <p className="text-muted-foreground text-sm">Brief description of service two.</p>
        </div>
        <div className="p-6 border rounded-lg bg-card text-card-foreground transition-shadow hover:shadow-md">
          <h3 className="text-xl font-semibold mb-3">Service Three</h3>
          <p className="text-muted-foreground text-sm">Brief description of service three.</p>
        </div>
      </div>
      <div className="text-center mt-16">
        <Button variant="outline" size="lg">View All Services</Button>
      </div>
    </SectionContainer>
  </section>
);

/**
 * Renders a call-to-action section encouraging users to get in touch.
 * Includes a headline, descriptive text, and contact/learn more buttons.
 */
const CTASection = () => (
  <section className="w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
    {/* Use SectionContainer and pass text-center */}
    <SectionContainer className="text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        Ready to Get Started?
      </h2>
      <p className="mx-auto max-w-[600px] text-lg md:text-xl mb-10">
        Contact us today for a consultation or a free quote.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <Button size="lg" variant="secondary">Contact Us</Button>
        {/* Use the new outline-primary variant for proper contrast on primary background */}
        <Button size="lg" variant="outline-primary">Learn More</Button>
      </div>
    </SectionContainer>
  </section>
);

// Sample Testimonial Data
const sampleTestimonials: Testimonial[] = [
  {
    text: "Absolutely fantastic service! They were professional, efficient, and the results exceeded my expectations. Highly recommend!",
    authorName: "Jane Doe",
    authorTitle: "Homeowner, Anytown",
    rating: 5,
  },
  {
    text: "We've relied on their expertise for years. Consistent quality and great communication make them our go-to provider.",
    authorName: "John Smith",
    authorTitle: "Business Owner, Sometown",
    rating: 5,
  },
  {
    text: "A very positive experience overall. They addressed all our concerns promptly and delivered exactly what we needed.",
    authorName: "Alex Johnson",
    authorTitle: "Property Manager",
    rating: 4,
  },
  {
    text: "The team was incredibly helpful and knowledgeable. They guided us through the whole process smoothly.",
    authorName: "Sarah Chen",
    authorTitle: "New Customer",
    rating: 5,
  },
  {
    text: "Reliable and trustworthy. We appreciate their consistent attention to detail.",
    authorName: "Michael Brown",
    authorTitle: "Long-time Client",
    rating: 4,
  },
];

/**
 * The main homepage component.
 * Aggregates the Hero, Service Overview, Testimonials, and CTA sections.
 */
export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServiceOverviewSection />
      {/* Add Testimonials Section */}
      <TestimonialsSection
        id="testimonials" // Optional ID for navigation
        title="What Our Clients Say"
        description="Hear directly from satisfied customers about their experience."
        testimonials={sampleTestimonials}
        // Optional: Add className for background, e.g., className="bg-muted/40"
      />
      <CTASection />
    </main>
  );
}
