<script setup>
const props = defineProps(['id', 'title', 'punish'])
</script>

<template>
  <div class="card" :id="props.id">
    <div class="header">
      <div class="id">{{ props.id }}</div>
      <div class="title">{{ props.title }}</div>
    </div>
    <div class="desc">
      <slot></slot>
    </div>
    <div class="punish" v-if="props.punish">Наказание: {{ props.punish }}</div>
  </div>
</template>

<style lang="sass" scoped>

.card
  background: transparent
  border-radius: 10px
  padding: 10px
  margin-bottom: 10px
  outline: var(--vp-c-divider) 1px solid
  background: radial-gradient(circle at 45px 25px, rgba(64, 24, 208, 0.06), transparent 20%)
  transition: 250ms
  &:hover
    outline: var(--vp-c-brand) 1px solid

.id
  border-radius: 5px
  padding: 4px 12px
  width: fit-content
  display: flex
  justify-content: center
  align-items: center
  background: var(--vp-c-brand-soft)

.header
  display: flex

.title
  padding: 4px 12px
  font-size: 20px

.desc
  margin-top: 10px
  margin-left: 5px
  font-size: 18px
  color: #b2b2b2

.punish
  margin-top: 10px
  margin-left: 5px
  color: #9d8080
</style>