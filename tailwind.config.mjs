/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        forest: '#3D6B4F',
        sage: '#A8B89A',
        earth: '#C4A882',
        'warm-white': '#FAFAF8',
        ink: '#1A1A1A',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
