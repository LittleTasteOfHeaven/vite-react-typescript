module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
	theme: {
		screens: {
			'xs': '448px',
			// => @media (min-width: 448px) { ... }

			'sm': '576px',
			// => @media (min-width: 576px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		container: {
			center: true,
			space: '2rem',
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				md: '1.75rem',
				lg: '1.875rem',
				xl: '2rem',
				'2xl': '2.25rem',
			},
		},
		extend: {},
	},
	plugins: [],
};