<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
</script>

<template>
  <h1>hello world</h1>
  {{ useRoute().path }}
</template>

