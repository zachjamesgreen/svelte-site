import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
        "postcss": true
    })],

	kit: {
		adapter: adapter({
			out: 'dist',
			precompress: false,
			env: {
				port: '35000'
			}
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
