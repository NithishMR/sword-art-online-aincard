// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Use this if you're using the Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Use this if you're using the Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // If your components are in a 'src' directory, add that too:
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 'extend' allows you to add to Tailwind's defaults, not override them entirely
      colors: {
        "sao-dark-blue": "#0A192F", // A deep, dark blue
        "sao-light-text": "#CCD6F6", // Light, slightly desaturated blue/grey for text
        "sao-accent": "#64FFDA", // Vibrant teal/cyan for UI elements
        "sao-item-bg": "#112240", // Darker blue for item backgrounds
        "sao-hover-bg": "#1A3A53", // Slightly lighter blue for hover states
        "sao-selected-bg": "#234E70", // Background for selected items
        "sao-border": "#3A506B", // Border color
        "sao-gold": "#FFD700", // Gold accent for important details
      },
      fontFamily: {
        // Ensure you import these fonts in your global CSS or layout file if they are not system fonts
        "sao-body": ['"Segoe UI"', "Tahoma", "Geneva", "Verdana", "sans-serif"], // Clean, modern font for body
        "sao-header": ['"Orbitron"', "sans-serif"], // Techy/futuristic font for headers (example)
      },
    },
  },
  plugins: [
    // You can add Tailwind plugins here if you use any, e.g., require('@tailwindcss/forms')
  ],
};
