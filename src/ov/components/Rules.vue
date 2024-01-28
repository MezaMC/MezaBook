<script setup>

</script>

<template>
  <div class="cards">
    <slot />
  </div>
</template>

<style scoped>

.cards {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

</style>