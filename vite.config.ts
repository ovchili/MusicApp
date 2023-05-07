import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		host: true,
		proxy: {
			'/api': 'http://localhost:4200/',
		},
	},
	resolve: {
		alias: {
			'~styles': resolve(__dirname, 'src/assets/styles'),
			'~fonts': resolve(__dirname, 'src/assets/fonts'),
		},
	},

	plugins: [tsconfigPaths(), react()],
})
