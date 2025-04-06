import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card'; // Removed CardHeader
import { Star, Quote, UserCircle } from 'lucide-react'; // Added UserCircle
import { cn } from '@/lib/utils';

export interface Testimonial {
  text: string;
  authorName: string;
  authorTitle: string;
  rating: number; // Expecting a number between 0 and 5
}

interface TestimonialCardProps extends Testimonial {
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  authorName,
  authorTitle,
  rating,
  className,
}) => {
  // Ensure rating is within 0-5 range
  const validRating = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    // Added shadow, relative positioning. Removed h-full to rely on parent flexbox align-items: stretch.
    <Card className={cn('relative flex flex-col shadow-sm hover:shadow-md transition-shadow overflow-hidden', className)}>
       {/* Large Background Quote Icon */}
       <Quote
         className="absolute -right-4 -top-4 h-24 w-24 text-primary opacity-10 z-0"
         aria-hidden="true"
         strokeWidth={1.5} // Make it slightly bolder if needed
       />
      {/* Main content area - Added z-10 to ensure content is above background icon */}
      <CardContent className="relative z-10 flex-grow pt-6 pb-4 flex flex-col">
        {/* Star Rating at the top */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-5 w-5',
                i < validRating ? 'text-primary fill-primary' : 'text-muted-foreground/50'
              )}
              aria-hidden="true"
            />
          ))}
          <span className="sr-only">{validRating} out of 5 stars</span>
        </div>

        {/* Testimonial Text - Removed small leading quote icon */}
        <blockquote className="flex-grow text-base md:text-lg text-foreground mb-4">
           {/* Removed small quote icon: <Quote className="absolute left-0 top-0 h-4 w-4 text-muted-foreground" aria-hidden="true" /> */}
           {text}
        </blockquote>
      </CardContent>
      {/* Footer with Author Info - Added z-10, removed bg-muted/50, added flex layout */}
      <CardFooter className="relative z-10 pt-4 border-t flex items-center gap-3">
         {/* Generic User Icon */}
         <UserCircle className="h-8 w-8 text-muted-foreground flex-shrink-0" aria-hidden="true" />
         {/* Author Details */}
        <div className="text-sm">
          <p className="font-semibold text-foreground">{authorName}</p>
          <p className="text-xs text-muted-foreground">{authorTitle}</p> {/* Made title smaller */}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
