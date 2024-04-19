// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
	content: {
		filesystem: [
			'**/*.{html,js,ts,mjs,mts,vue,md}',
		],
	},
	presets: [
		presetUno({}),
		presetAttributify({})
	]
})