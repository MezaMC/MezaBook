<script setup lang="ts">
import tags_data from './tags';
import { Icon } from '@iconify/vue';

const props = defineProps<{
  tag: string
}>();

let css_color = tags_data[props.tag]?.['color'] ?? 'var(--vp-c-brand-1)';
let css_bg = tags_data[props.tag]?.['bg'] ?? 'var(--vp-c-brand-soft)';
</script>

<template>

  <a :href="`/tags/${props.tag}`"
     class="tag flex flex-row items-center gap-1 rounded-3xl font-semibold">
  <Icon :icon="tags_data[props.tag]['icon']"
        v-if="tags_data[props.tag]?.['icon'] !== undefined"/>
  <span>{{tags_data[props.tag]?.display ?? props.tag}}</span>
  </a>
</template>

<style scoped lang="sass">
.tag
  color: v-bind(css_color) !important
  background-color: v-bind(css_bg)
  padding: 2px 12px
  transition: .3s ease-out
  outline: transparent solid 1px
  width: fit-content

  &:hover
    outline: v-bind(css_color) solid 1px

  &.inactive
    filter: brightness(.75)
    &:hover
      filter: brightness(1)

  &.active
    outline: 1px solid
</style>