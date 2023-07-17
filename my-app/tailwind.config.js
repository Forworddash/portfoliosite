// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        sm: '640px',   // Small screens (e.g., phones)
        md: '768px',   // Medium screens (e.g., tablets)
        lg: '1024px',  // Large screens (e.g., laptops)
        xl: '1280px',  // Extra-large screens (e.g., desktops)
      },
      colors: {
        // Add your custom colors here
        primary: '#FF8885',   // Example color: red
        secondary: '#E9EAAC', // Example color: green
        tertiary: '#F2E2D0',  // Example color: blue
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
};
