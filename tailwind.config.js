/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {   
        fontSize: {
            'sm': '0.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3.052rem',
          },
        fontFamily: {
            tekst: ['Open Sans', 'sans-serif'],
            naslovi: ['Kanit', 'sans-serif'],
            menu: ['Poppins', 'sans-serif'],
            cursive: ['Hurricane', 'cursive']
        },
        colors: {
            'blue': '#003566',
            'blue-dark': '#001D3D',
            'accent': '#FFEE32',
            'gray': '#333533',
            'headline': '#202020',
            'yellow-dark': '#FFd60A',
            'light': '#f6f0cf',
            'header-light': "#ffffff",
            'normal': "#4F453F",
            'headlines': "#3D352D",
            'bg-dark': "#2B2B2B",
            'menu-text': "#EBE9E3",
            'green': "#94A879"
        },
        extend: {},
    },
    plugins: [],
}