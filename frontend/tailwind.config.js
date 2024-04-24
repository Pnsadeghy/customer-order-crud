/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: '2rem'
        }
    },
    plugins: [],
}