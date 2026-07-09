/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FDFBF7',
        coal: '#1A1918',
        teal: {
          800: '#0F373A',
          900: '#0A2527',
        },
        emerald: {
          custom: '#10B981', // Muted emerald green (kept for semantic/legacy uses)
        },
        // Calmer honey gold, derived from the logo sun
        gold: {
          sun: '#E9D26D',
          deep: '#8F6B12',
        },
        // Warm olive-charcoal darks, straight from the logo marks
        ink: {
          700: '#3E4237',
          800: '#31342B',
          900: '#24271F',
          950: '#191B15',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
      backgroundImage: {
        'paper-noise': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBucdW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC4wNCIvPjwvc3ZnPg==')",
      },
    },
  },
  plugins: [],
}

