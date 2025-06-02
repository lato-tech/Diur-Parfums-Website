export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Cormorant Garamond', 'serif'],
        'accent': ['Libre Baskerville', 'serif']
      },
      colors: {
        diur: {
          sage: '#606C5D',
          olive: '#4F583D',
          forest: '#1F2920',
          cream: '#FFF8E3',
          gold: '#C6A969',
          maroon: '#5C2C23'
        }
      }
    }
  }
}