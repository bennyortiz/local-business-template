'use client';

import React, { useEffect } from 'react';
import theme, { generateCssVariables } from '@/config/theme';

// Create a context if we need to pass the theme object down,
// but for now, we just need to inject CSS variables globally.
// If needed later: export const ThemeContext = React.createContext(theme);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  useEffect(() => {
    // Generate the CSS variables string from the theme config
    const cssVariablesString = generateCssVariables(theme);

    // --- New Approach: Set variables directly on root element ---
    // Simple parsing logic (assumes format from generateCssVariables)
    const root = document.documentElement;
    const lines = cssVariablesString.split('\n');
    const existingVars = new Set<string>(); // Keep track of vars set in this run

    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('--') && trimmedLine.includes(':')) {
        const parts = trimmedLine.split(':');
        const varName = parts[0].trim();
        const varValue = parts.slice(1).join(':').trim().replace(';', ''); // Remove trailing semicolon
        if (varName && varValue) {
          root.style.setProperty(varName, varValue);
          existingVars.add(varName);
        }
      }
    });

    // Optional: Cleanup function to remove the variables if the provider unmounts
    // return () => {
    //   existingVars.forEach(varName => {
    //     root.style.removeProperty(varName);
    //   });
    // };
    // --- End New Approach ---

    // --- Old Approach (commented out) ---
    // const styleTagId = 'dynamic-theme-variables';
    // let styleTag = document.getElementById(styleTagId);
    // if (!styleTag) {
    //   styleTag = document.createElement('style');
    //   styleTag.id = styleTagId;
    //   document.head.appendChild(styleTag);
    // }
    // styleTag.innerHTML = cssVariablesString;
    // return () => {
    //   const tag = document.getElementById(styleTagId);
    //   if (tag) {
    //     document.head.removeChild(tag);
    //   }
    // };
  }, []); // Empty dependency array ensures this runs only once on mount

  // If we created a context, wrap children with Context.Provider
  // return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;

  // For now, just return children as variables are injected globally
  return <>{children}</>;
};

export default ThemeProvider;
