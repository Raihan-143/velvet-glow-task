/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                maven: ['"Maven Pro"', 'sans-serif'],
            },
            backgroundImage: {
                'hero-radial': 'radial-gradient(50% 50% at 50% 50%, #FFC7CF 34.62%, rgba(255, 255, 255, 0) 100%)',
            },
        },
    },
    plugins: [],
};
