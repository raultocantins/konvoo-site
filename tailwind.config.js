module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: '#302f32',
        brightRedLight: '#302f32',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: '#302f32',
        darkGrayishBlue: '#302f32',
        veryDarkBlue: '#302f32',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}
