<script setup>
import { Icon } from "@iconify/vue";
import Feature from "./Feature.vue";
import TechFeature from "./TechFeature.vue";
</script>

<template>

	<div class="transition flex flex-col items-center">
		<span class=" text-brand-main text-lg font-500 mb-3">Удобно · Красиво · Практично</span>
		<h2 class=" text-3xl line-height-[1.3] text-center font-600 important:m-0 important:p-0"></h2>
		<span class="flex items-center gap-2 font-600 text-2xl text-center">
				<Icon icon="tabler:building-skyscraper" class="w-8 h-8 lt-sm:hidden" />
				<span>Современная платформа для сообщества</span>
			</span>
		<span class="font-400 mt-3 max-w-[700px] line-height-[1.6]" un-text="vptext-2 [20px] center">
			MezaBook создан, чтобы объединить сообщество мистики Minecraft
		</span>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-8 mt-12">
			<Feature icon="tabler:edit" title="Удобство и практичность">
				Для создания и изменения статей используется GitHub, что позволяет отслеживать изменения и делает невозможным вандализм.
			</Feature>
			<Feature icon="tabler:sparkles" title="Элегантный дизайн">
				Весь дизайн сайта продуман до мелочей, что делает его практичным. В то же время стиль MezaBook современный и красивый.
			</Feature>
			<Feature icon="tabler:maximize" title="Безграничные возможности">
				Сайт использует Vue, а репозиторий GitHub содержит весь исходный код, что даёт редакторам безграничные возможности.
			</Feature>
			<Feature icon="tabler:plug-connected" title="Независимая платформа">
				MezaBook является самостоятельной и свободной платформой. К тому же, рекламы на сайте нет - целью проекта не является заработок.
			</Feature>
		</div>

		<div class="max-w-[680px] text-center mt-30 flex flex-col items-center">
			<span class="flex items-center gap-2 font-600 text-2xl mb-3">
				<Icon icon="tabler:users" class="w-8 h-8 lt-sm:hidden" />
				<span>Немного о сообществе</span>
			</span>

			<div class="flex flex-col gap-[6px] text-vptext-2 text-lg">
				<span>
					Участники сообщества занимаются производством и потреблением 
					тематического контента по мистике в Minecraft.
				</span>
				<br>
				<span>
					Практически весь контент не претендует на реалистичность. 
					Современные мистические сервера, АРГ и страшные видео создаются 
					ради истории и атмосферы, а не ради показа реальной мистики.
				</span>
			</div>

			<a href="/community/" class="mt-4 hover:underline">Подробнее...</a>
		</div>

		<div class="max-w-[960px] mt-30 flex flex-col items-center">
			<span class="flex items-center gap-2 font-600 text-2xl mb-8">
				<Icon icon="tabler:code" class="w-8 h-8 lt-sm:hidden" />
				<span>Техническая часть MezaBook</span>
			</span>

			<div class="flex flex-row gap-4 h-fit">
				<div class="lt-lg:hidden flex items-center justify-center bg-bg-elv rounded-2xl ">
					<img src="/logo/right-gears.svg" alt="logo" class="w-54 m-8 tech-logo-anim">
				</div>
				<div class="max-w-148 flex flex-col gap-4">

					<TechFeature icon="simple-icons:vitepress" title="VitePress" link="https://vitepress.dev">
						Vue фреймворк для генерации статических сайтов.<br>
						Основной дизайн MezaBook взят из стандартной темы VitePress.
					</TechFeature>

					<TechFeature icon="simple-icons:vuedotjs" title="Vue.js" link="https://vuejs.org">
						JavaScript фреймворк для создания продвинутых сайтов.
					</TechFeature>

					<TechFeature icon="simple-icons:cloudflarepages" title="Cloudflare Pages" link="https://pages.cloudflare.com/">
						Сайт размещён на бесплатном хостинге от Cloudflare с мощной L7 защитой. 
					</TechFeature>
					
					<TechFeature icon="simple-icons:github" title="GitHub" link="https://github.com">
						Используется для хранения git репозитория с исходным кодом.
					</TechFeature>

					<TechFeature icon="simple-icons:unocss" title="UnoCSS" link="https://unocss.dev/">
						Мощный CSS-движок, предоставляющий огромное количество удобных утилит для ускорения вёрстки.
					</TechFeature>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

$delta: 8px;

@keyframes floating-up-down {
  from {
    transform: translate(0, -$delta);
  }
  to {
    transform: translate(0, $delta);
  }
}

.tech-logo-anim {
  animation-name: floating-up-down;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}

</style>