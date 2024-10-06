<script setup>
import {Icon} from "@iconify/vue";
const props = defineProps(['icon', 'title'])
</script>

<template>
  <div class="feature">
    <div class="flex items-center gap-2.5" >
      <div class="icon">
        <Icon :icon="props.icon" class="text-2xl"></Icon>
      </div>
      <span class="text-lg md:text-2xl font-medium">
        {{props.title}}
      </span>
    </div>
    <div class="desc text-base mt-1">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.feature
  max-width: 400px

.icon
  background-color: var(--vp-c-brand-soft)
  padding: 6px
  border-radius: 8px

.desc
  color: var(--vp-c-text-2)
  max-width: 450px

</style>