// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import presetAnimations from 'unocss-preset-animations'

export default defineConfig({
	content: {
		filesystem: [
			'**/*.{html,js,ts,mjs,mts,vue,md}',
		],
	},
	presets: [
		presetUno(),
		presetAttributify(),
		presetAnimations()
	],
	transformers: [
		transformerVariantGroup()
	],
	theme: {
		colors: {
			'brand': {
				'main': 'var(--vp-c-brand-1)',
				'grim': 'var(--vp-c-brand-2)',
				'dark': 'var(--vp-c-brand-3)',
				'soft': 'var(--vp-c-brand-soft)'
			},
			'bg': {
				'main': 'var(--vp-c-bg)',
				'alt': 'var(--vp-c-bg-alt)',
				'elv': 'var(--vp-c-bg-elv)',
				'soft': 'var(--vp-c-bg-soft)'
			},
			'vptext': {
				'1': 'var(--vp-c-text-1)',
				'2': 'var(--vp-c-text-2)',
				'3': 'var(--vp-c-text-3)',
			}
		}
	}
})