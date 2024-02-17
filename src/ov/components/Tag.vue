<template>
  <span class="tag"><slot></slot></span>

</template>


<style lang="sass" scoped>

.tag
  outline: var(--vp-c-brand-1) 1px solid
  padding: 2px 8px
  border-radius: 6px
  box-shadow: 0 0 8px 1px var(--vp-c-brand-3)
  background: var(--vp-c-brand-soft)
  transition: 250ms

  &:hover
    box-shadow: 0 0 16px 2px var(--vp-c-brand-3)

</style>

<script setup lang="ts">
</script>