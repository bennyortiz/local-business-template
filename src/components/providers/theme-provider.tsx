'use client';

import React, { useEffect } from 'react';
import tinycolor from 'tinycolor2';
import businessConfig from '@/config/business-config';

// Helper function to generate dynamic theme CSS variables
function generateThemeVariables(baseColor: string): string {
  const color = tinycolor(baseColor);

  // --- Light Mode Colors ---
  const lightPrimary = color.toHexString();
  // Use isDark() for more intuitive foreground color selection
  const lightPrimaryFg = color.isDark() ? '#ffffff' : '#000000';
  // Generate a ring color (often slightly darker/desaturated for light mode)
  const lightRing = color.desaturate(15).darken(10).toHexString();

  // --- Dark Mode Colors ---
  // Adjust primary for dark mode (example: slightly desaturated and lighter)
  // Experiment with these values to get the desired dark mode look
  const darkColor = color.desaturate(10).lighten(10); // Keep dark mode primary calculation for now
  const darkPrimary = darkColor.toHexString();
  // Use isDark() for dark mode foreground as well
  const darkPrimaryFg = darkColor.isDark() ? '#ffffff' : '#000000';
  // Generate a ring color for dark mode (often lighter)
  const darkRing = darkColor.lighten(15).toHexString();


  // Return CSS string with variables for :root (light) and .dark
  return `
    :root {
      --primary: ${lightPrimary};
      --primary-foreground: ${lightPrimaryFg};
      --ring: ${lightRing};
      /* Add other dynamically derived variables for :root if needed */
    }
    .dark {
      --primary: ${darkPrimary};
      --primary-foreground: ${darkPrimaryFg};
      --ring: ${darkRing};
       /* Add other dynamically derived variables for .dark if needed */
    }
  `;
}


interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  useEffect(() => {
    // Generate the CSS variables string from the business config's base color
    const cssVariablesString = generateThemeVariables(businessConfig.themeBaseColor);
    const styleTagId = 'dynamic-theme-variables';

    // Find or create the style tag
    let styleTag = document.getElementById(styleTagId);
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleTagId;
      // Prepend to head to allow overrides by globals.css or component styles if necessary
      document.head.prepend(styleTag);
    }

    // Update the style tag content
    styleTag.innerHTML = cssVariablesString;

    // Optional: Cleanup function to remove the style tag if the provider unmounts
    // This might not be strictly necessary in a Next.js app where layout persists,
    // but good practice if the provider could potentially unmount and remount.
    // return () => {
    //   const tag = document.getElementById(styleTagId);
    //   if (tag) {
    //     document.head.removeChild(tag);
    //   }
    // };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Just return children, the effect handles the global style injection
  return <>{children}</>;
};

export default ThemeProvider;
