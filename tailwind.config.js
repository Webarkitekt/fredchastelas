module.exports = {
  content: [
    './pages/**/*.{html,js,tsx}',
    './components/**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        interaction: {
          default: "#FF922D"
        },
        primary: "#3C6676",
        secondary: "#E8F0F3"
      },
      fontFamily: {
        serif: "Baskervville"
      },
      typography: ({theme}) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray[500]'),
            '--tw-prose-headings': theme('colors.gray[700]'),
            '--tw-prose-bold': theme('colors.gray[700]'),
            '--tw-prose-links': theme('colors.interaction[default]'),
            h2: {
              fontWeight: 300,
              fontFamily: theme('fontFamily.serif'),
              fontSize: '2.5rem'
            }
          }
        },
        lg: {
          css: [
            {
              h2:{
                fontSize: ('3rem')
              }
            }
          ]
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'richtext'
    }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
