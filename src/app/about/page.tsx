import React from 'react';
import { Metadata } from 'next';
import SectionContainer from '@/components/layout/SectionContainer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building, Target, Users, Image as ImageIcon } from 'lucide-react'; // Icons for visual placeholders

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our company history, team, mission, and values.',
};

// Placeholder Icon Component - Now fills height
const PlaceholderIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  // Use h-full to make the div fill the grid column height
  // min-h-[200px] or similar can prevent it becoming too small on mobile before stacking
  <div className="flex h-full min-h-[200px] w-full items-center justify-center rounded-lg bg-muted p-8">
    <Icon className="size-16 text-muted-foreground md:size-24" />
  </div>
);

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section - Keep as is */}
      <section className="w-full border-b bg-muted/40 py-20 md:py-28 lg:py-36">
        <SectionContainer className="text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl/none">
            About Us
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Our Story, Mission, and the Team Behind Our Success
          </p>
        </SectionContainer>
      </section>

      {/* History Section - Two Column Layout */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <SectionContainer>
          {/* Removed items-center from grid to allow natural height flow */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Text Column */}
            <div className="flex flex-col justify-center space-y-4"> {/* Added flex justify-center */}
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Our History</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {/* TODO: Replace placeholder content */}
                  Founded in [Year], Your Local Business started with a simple goal: to provide exceptional [Service Category] services to our community. Over the years, we've grown from a small operation into a trusted local provider, always maintaining our commitment to quality and customer satisfaction.
                </p>
                <p>
                  We are proud of our journey and the relationships we've built along the way. [Add another paragraph about key milestones or growth if applicable].
                </p>
              </div>
            </div>
            {/* Image/Icon Column */}
            {/* The grid cell itself will stretch. PlaceholderIcon inside uses h-full */}
            <div className="order-first md:order-last">
              <PlaceholderIcon icon={Building} />
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Mission Section - Two Column Layout (Alternating Background & Order) */}
      <section className="w-full bg-muted/40 py-16 md:py-24 lg:py-32">
        <SectionContainer>
          {/* Removed items-center from grid */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Image/Icon Column */}
            <div>
              <PlaceholderIcon icon={Target} />
            </div>
            {/* Text Column */}
            <div className="flex flex-col justify-center space-y-4"> {/* Added flex justify-center */}
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Our Mission & Values</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {/* TODO: Replace placeholder content */}
                  Our mission is to [State your mission clearly and concisely]. We strive to achieve this by consistently delivering high-quality work, fostering strong client relationships through open communication, and upholding our core values.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><span className="font-medium text-foreground">[Value 1]:</span> [Brief explanation]</li>
                  <li><span className="font-medium text-foreground">[Value 2]:</span> [Brief explanation]</li>
                  <li><span className="font-medium text-foreground">[Value 3]:</span> [Brief explanation]</li>
                </ul>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <SectionContainer>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Meet the Team</h2>
            <p className="mt-3 text-lg text-muted-foreground md:text-xl">
              The passionate individuals driving our success.
            </p>
          </div>
          {/* TODO: Replace with actual team member data and potentially Card components */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder Team Member Card */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-muted">
                  <ImageIcon className="size-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Team Member {i}</h3>
                <p className="mb-3 text-base text-primary">[Job Title]</p>
                <p className="text-sm text-muted-foreground">
                  Brief bio or area of expertise for team member {i}. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* CTA Section - Alternating Background */}
      <section className="w-full bg-muted/40 py-16 md:py-24 lg:py-32">
        <SectionContainer className="text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Ready to Work With Us?</h2>
          <p className="mx-auto mb-8 max-w-[600px] text-lg text-muted-foreground md:text-xl">
            Have questions or want to discuss your project? Get in touch today!
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </SectionContainer>
      </section>
    </main>
  );
}
