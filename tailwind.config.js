/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1a1a1a',   // Almost Black
                secondary: '#4b5563', // Grey 600
                accent: '#e5e7eb',    // Grey 200
                background: '#ffffff',
                surface: '#f3f4f6',   // Grey 100
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
                arabic: ['Almarai', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
