/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'usc-green': '#124d00',
        'ann-header': '#578ebe',
        'btn-hover': '#848C14',
      },
      fontFamily: {
        'sans': ['Times New Roman', 'Times', 'sans-serif']
      },
      spacing: {
        '20px': '20px',  
        '30px': '30px',  
      },
      boxShadow: {
        'announcement': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '*': {
          margin: '0',
          padding: '0',
          'box-sizing': 'border-box',
        },
      });
    },
  ],
}
