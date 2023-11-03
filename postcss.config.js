export const config = {
    
    plugins: {
      autoprefixer: {
        flexbox: 'no-2009', // Enable flexbox but only for modern browsers
        overrideBrowserslist: ['last 2 versions', '>1%'], // Define the target browsers
      },
    },
  };
  