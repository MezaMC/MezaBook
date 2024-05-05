<script setup>

import {Icon} from "@iconify/vue";
import {useData} from "vitepress";

</script>


<template>
	<div class="flex items-center justify-center mb-2 text-vptext-2 hover:text-vptext-1 transition-colors">
		<div class="w-[92%] bg-bg-elv rounded-2 hover:(outline-brand-ptg outline-2 outline-offset-6) outline outline-transparent transition-all z-0 flex items-center flex-col p-t-4 gap-2 overflow-hidden">
			<div class="flex gap-2">
				<img src="/logo/p2g_logo.svg" class="w-8 h-8">
				<span class="font-600 text-lg text-gray-2">Play2GO.cloud</span>
			</div>
			<div class="m-l-3 m-r-3">
				Мощный Minecraft/VPS хостинг с низкими ценами и отличной защитой от DDoS.
			</div>
			<a href="https://p2g.meza.one" target="_blank" class="text-gray-2 active:text-brand-ptg/white h-12 flex w-full mt-2 border-2 border-t-solid border-gray-5/40 transition-colors 
			hover:(border-brand-ptg bg-brand-ptg/12)
			items-center justify-center font-500 gap-1">
				<span>Перейти</span>
				<Icon icon="tabler:external-link" class="w-4 h-4 stroke-width-2" />
			</a>
		</div>
	</div>
</template>