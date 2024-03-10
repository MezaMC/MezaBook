<script setup>
import DefaultTheme from 'vitepress/theme'
import PageInfo from "./PageInfo.vue";
import {useData} from "vitepress";

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <PageInfo v-if="frontmatter['author']"></PageInfo>
    </template>
  </Layout>
</template>

<style scoped>

</style>