const colors = require('tailwindcss/colors');
module.exports = {
    purge: {
        content: ['./public/**/*.html', './src/**/*.vue']
    },
    // darkMode: false, // or 'media' or 'class'
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                fuchsia: colors.fuchsia
            },
            fontFamily: {
                headline: 'Poppins, sans-serif'
            },
            spacing: {
                18: '4.5rem'
            }
        }
    },
    variants: {
        extend: {
            backgroundColor: ['active']
        }
    },
    plugins: []
};