module.exports = {
    plugins: [
      'tailwindcss',
      // ...(process.env.NODE_ENV === 'production'
      //   ? [
      //       [
      //         {
      //           content: [
      //             './pages/**/*.{js,jsx,ts,tsx}',
      //             './components/**/*.{js,jsx,ts,tsx}'
      //           ],
      //           defaultExtractor: content =>
      //             content.match(/[\w-/:]+(?<!:)/g) || []
      //         }
      //       ]
      //     ]
      //   : [])
    ]
  }