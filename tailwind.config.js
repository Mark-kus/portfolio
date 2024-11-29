/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-gold': 'linear-gradient(to right, #D97706, #F59E0B 80%)', // amber-700 to yellow-500
        'gradient-marine': 'linear-gradient(to left, #1E3A8A, #3B82F6 80%)', // blue-900 to blue-500
      },
      textColor: {
        'transparent': 'transparent',
      },
      backgroundClip: {
        text: 'text', // Enables bg-clip-text
      },
    }
  },
  plugins: [],
}
