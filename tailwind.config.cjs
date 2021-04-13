const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
	mode: "jit", // changed from "aot"
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
		},
	},
	theme: {
    colors: {
      background: {
        accent: 'var(--color-background-accent)',
        alpha: 'var(--color-background-alpha)',
        DEFAULT: 'var(--color-background-default)',
        paper: 'var(--color-background-paper)',
      },
      primary: {
        contrast: 'var(--color-primary-contrast-text)',
        dark: 'var(--color-primary-dark)',
        DEFAULT: 'var(--color-primary-main)',
        light: 'var(--color-primary-light)',
        lighter: 'var(--color-primary-lighter)',
      },
      secondary: {
        contrast: 'var(--color-secondary-contrast-text)',
        dark: 'var(--color-secondary-dark)',
        DEFAULT: 'var(--color-secondary-main)',
        light: 'var(--color-secondary-light)',
      },
      ...colors,
    },
		extend: {},
    fontFamily: {
      heading: 'var(--font-family-heading)',
      text: 'var(--font-family-text)',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1920px',
    },
	},
	variants: {
		extend: {
      translate: ['group-hover'],
    },
	},
	plugins: [],
};
