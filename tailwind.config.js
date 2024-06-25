/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
			gridTemplateColumns: {
				'w1': "repeat(1, minmax(min-content, 1fr))",
				'w2': "repeat(2, minmax(min-content, 1fr))",
				'w3': "repeat(3, minmax(min-content, 1fr))",
			}
    },
  },
  plugins: [],
}

export default tailwindConfig;
