import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ember: ['"Amazon Ember"', 'sans-serif'],
        courgette: ['Courgette', 'sans-serif'],
      },
      colors: {
        'custom-azul': {
          '1': '#232f3e',
          '2': '#333333',
          '3': '#0972d3',
        },
        'custom-naranja': '#ff9900',
        'custom-negro': { '1': '#000716', '2': '#16191f' },
        'custom-blanco': { '1': '#ffffff', '2': '#fafafa' },
        'custom-gris': { '1': '#dddddd', '2': '#545b64' },
        'custom-naranja-darck': '#cc7a00',
      },
      fontSize: {
        'custom-size1': '13px',
        'custom-size2': '14px',
        'custom-size3': '15px',
        'custom-size4': '16px',
        'custom-size5': '18px',
        'custom-size6': '20px',
        'custom-size7': '24px',
        'custom-size8': '38px',
      },
      fontWeight: {
        thin: '200',
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
      },
      screens: {
        xs: '450px',
        sm: '250px',
        md: '700px',
        lg: '1100px',
        xl: '1200px',
        '2xl': '1400px',
      },
      boxShadow: {
        'thin-black': '0px 1px 1px 1px rgba(0, 0, 0, 0.3)',
      },
      height: {
        'h-bar': 'calc(100vh - 70px)',
      },
    },
  },
  plugins: [
    function ({ addComponents }: { addComponents: (components: any) => void }) {
      const newUtilities = {
        '.contenedor': {
          padding: '10px 40px',
        },
      };
      addComponents(newUtilities);
    },
  ],
};
export default config;
