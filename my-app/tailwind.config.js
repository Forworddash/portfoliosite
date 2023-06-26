/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
};
