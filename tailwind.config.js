/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      zero: '0px',
      xs: '541px',
      sm: '640px',
      md: '912px'
    },
    fontFamily: {
      'rubik-mono-one': 'RubikMonoOne Regular',
      montserrat: 'Montserrat Regular'
    },
    colors: {
      error: '#e11d48',
      white: '#fff',
      black: '#000',
      gray: '#595959'
    },
    extend: {
      maxWidth: {
        'app-container': '1075px'
      },
      backgroundImage: {
        'main-pattern':
          'linear-gradient(180deg, #0F4260 0%, #3E778D 7.05%, #96D3E0 15.93%, #D0DED7 26.81%, #BEC6B5 62.53%, #FFE590 100%)'
      }
    }
  },
  plugins: []
}
