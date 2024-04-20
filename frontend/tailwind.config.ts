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
      },
      colors: {
        'custom-azul': {
          '1': '#232f3e',
          '2': '#333333',
          '3': '#0972d3',
        },
        'custom-naranja': '#ff9900',
        'custom-negro': '#000716',
        'custom-blanco': '#ffffff',
        'custom-gris': '#dddddd',
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
        sm: '575px',
        md: '700px',
        lg: '750px',
        xl: '1200px',
        '2xl': '1400px',
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
