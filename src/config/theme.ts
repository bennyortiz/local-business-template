import tinycolor from 'tinycolor2';
import businessConfig from './business-config';

/**
 * Generates a dynamic theme palette based on the primary color
 * defined in business-config.ts.
 */

export interface ColorPalette {
  lightest: string;
  light: string;
  DEFAULT: string; // The original primary color
  dark: string;
  darkest: string;
  text: string; // Text color that contrasts well with the DEFAULT primary color
}

export interface Theme {
  colors: {
    primary: ColorPalette;
    // We can add secondary, accent, grayscale palettes here later
  };
  // Other theme properties like fonts, spacing, etc., can be added here
}

/**
 * Generates color variations for a given base color.
 * @param baseColor - The hex color string (e.g., '#3b82f6')
 * @returns A ColorPalette object.
 */
const generatePalette = (baseColor: string): ColorPalette => {
  const color = tinycolor(baseColor);

  // Determine a contrasting text color (black or white)
  const textColor = color.isLight() ? '#000000' : '#ffffff';

  return {
    lightest: color.lighten(30).toHexString(),
    light: color.lighten(15).toHexString(),
    DEFAULT: color.toHexString(),
    dark: color.darken(15).toHexString(),
    darkest: color.darken(30).toHexString(),
    text: textColor,
  };
};

// Generate the theme object
const theme: Theme = {
  colors: {
    primary: generatePalette(businessConfig.primaryColor),
    // Example: Add grayscale later
    // gray: { ... }
  },
  // Example: Add fonts later
  // fonts: { ... }
};

// Function to generate CSS variables string from the theme
// This will be used to inject the theme into the global scope
export const generateCssVariables = (theme: Theme): string => {
  let cssString = ':root {\n';
  for (const [category, palette] of Object.entries(theme.colors)) {
    for (const [shade, value] of Object.entries(palette)) {
      const varName = `--color-${category}${shade === 'DEFAULT' ? '' : `-${shade}`}`;
      cssString += `  ${varName}: ${value};\n`;
    }
  }
  // Add other theme variables here (fonts, spacing etc.)
  cssString += '}';
  return cssString;
};

export default theme;
