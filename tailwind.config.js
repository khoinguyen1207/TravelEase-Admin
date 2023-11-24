/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    corePlugins: {
        preflight: false
    },
    theme: {
        extend: {
            colors: {
                primary: '#4F46E5',
                secondary: '#111827',
                yankeesBlue: '#1F2937'
            }
        }
    },
    plugins: []
}
