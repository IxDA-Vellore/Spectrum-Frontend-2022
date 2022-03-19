module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                primary: ['Barlow'],
                secondary: ['Monument Extended'],
            },
            colors: {
                'btn-primary': '#CAFB5B',
                'btn-hover': '#FFE084',
                'scroll-div': '#171717',
            },
            boxShadow: {
                scroll: '0px 8px 16px rgba(0, 0, 0, 0.12)',
            },
        },
        plugins: [],
    },
};
