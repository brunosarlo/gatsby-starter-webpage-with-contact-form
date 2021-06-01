module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./gatsby-ssr.js', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sitename: [
        'dancing-script',
        'serif',
      ],
      body: ['Georgia', 'sans-serif'],
    },
    // Add `top-100` and similar classes for absolute-positioned elements
    inset: {
      '0': 0,
      auto: 'auto',
      '1': '1em',
      '100': '100%',
    },
    extend: {
      colors: {
        primary: {
          '100':'#006371',
          '50':'#10A79E',
          '20':'#10A79E'
        },
        secondary: {
          '100':'#320967'
        },
        accent: '#ffb61d',
        violet: {
          '100':'#320967',
          '50':'#603399',
          '20':'#10A79E'
        },
        green: {
          '100':'#146D22',
          '50':'#59A058',
          '20':'#C4D6C4'
        },
        // Overwrite default grays with a neutral shade (defaults are blue-ish)
          gray: {
            '100': '#f5f5f5',
            '200': '#eeeeee',
            '300': '#e0e0e0',
            '400': '#bdbdbd',
            '500': '#9e9e9e',
            '600': '#757575',
            '700': '#616161',
            '800': '#424242',
            '900': '#212121',
          },
      },
      // We all need that container that is almost-but-not-quite full height
      height: {
        'almost-screen': '70vh',
      },
      minHeight: {
        'almost-screen': '70vh',
      },
      // Utilities to lock an image or video to a fixed aspect ratio
      // (https://github.com/tailwindcss/designing-with-tailwindcss/tree/master/02-designing-an-image-card/06-locking-images-to-a-fixed-aspect-ratio)
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '9/16': '56.25%',
        '10/16': '62.5%',
      },
      // https://twitter.com/mjsarfatti/status/1263432797039067136
      transitionTimingFunction: {
        'ease-spring': 'cubic-bezier(0.25,0.02,0,1)',
      },
    },
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    // require('@tailwindcss/custom-forms'),
    // require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};