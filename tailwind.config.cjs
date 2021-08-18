const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				'mono': 'Fira Code'
			},
		},
	},
	plugins: [],
};

module.exports = config;
