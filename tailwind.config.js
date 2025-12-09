/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00e5ff', // Matching the existing primary color
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
