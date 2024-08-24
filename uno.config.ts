// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import presetAnimations from 'unocss-preset-animations'

export default defineConfig({
	rules: [
		['font-mono', {'font-family': '"JetBrains Mono", monospace'}]
	],

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
		breakpoints: {
			'phone': '400px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px'
		},
		colors: {
			'brand': {
				'main': 'var(--vp-c-brand-1)',
				'grim': 'var(--vp-c-brand-2)',
				'dark': 'var(--vp-c-brand-3)',
				'soft': 'var(--vp-c-brand-soft)',
				'ptg': 'rgb(225, 29, 72)',
				'divider': 'var(--vp-c-divider)'
			},
			'bg': {
				'main': 'var(--vp-c-bg)',
				'alt': 'var(--vp-c-bg-alt)',
				'elv': 'var(--vp-c-bg-elv)',
				'soft': 'var(--vp-c-bg-soft)'
			},
			'vptext': {
				'1': 'var(--vp-c-text-1)',
				'1.5': '#d6d0d6',
				'2': 'var(--vp-c-text-2)',
				'3': 'var(--vp-c-text-3)',
			},
			'p2g': {
				'main': '#FF0000'
			}
		}
	}
})