module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '40em',
      md: '48em', //48em = 768px
      lg: '64em', //64em = 1024px
      xl: '90em',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.svg')",
      },
    },
  },
  plugins: [],
};
