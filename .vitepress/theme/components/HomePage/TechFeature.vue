<script setup>
import {Icon} from "@iconify/vue";
const props = defineProps(['icon', 'title', 'link'])
</script>

<template>
	<div outline="transparent solid hover:(brand-grim 2 offset-4)" 
	class="bg-bg-elv p-4 rounded-2xl animate-in zoom-in-30 animate-state-running"
	transition="duration-200 ease-in-out all"
	:href="props.link">

		<span class="flex items-center gap-2" >
			<Icon :icon="props.icon" class="text-[28px] text-brand-main"></Icon>
			<a class="text-2xl font-medium cursor-pointer important:underline-brand-dark important:underline" :href="props.link" target="_blank">{{props.title}}</a>
		</span>
		<div class="text-vptext-2 mt-1">
			<slot></slot>
		</div>

	</div>
</template>