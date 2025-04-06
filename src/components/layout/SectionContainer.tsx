import React from 'react';
import { cn } from '@/lib/utils'; // Assuming cn utility exists for merging classes

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  // Add other props as needed, e.g., for background color, specific padding overrides
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
  ...props // Spread any other props onto the div
}) => {
  return (
    // Apply standard container, centering, and padding. Merge with any additional classes.
    <div
      className={cn(
        'container mx-auto px-4 md:px-6', // Standard container and horizontal padding
        className // Allow additional classes to be passed
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
