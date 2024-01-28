<script setup>
const props = defineProps(['id', 'title', 'punish'])
</script>

<template>
  <div class="card">
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

<style scoped>

.card {
  background: var(--vp-c-bg-alt);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  outline: rgba(255, 255, 255, 0.1) 1px solid;
}

.id {
  background: var(--vp-c-bg-elv);
  border-radius: 5px;
  padding: 4px 12px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  display: flex;
}

.title {
  padding: 4px 12px;
  font-size: 20px;
}

.desc {
  margin-top: 10px;
  margin-left: 5px;
  font-size: 18px;
  color: #b2b2b2;
}

.punish {
  margin-top: 10px;
  margin-left: 5px;
  color: #9d8080;
}

</style>