<script setup>
import DefaultTheme from 'vitepress/theme'
import PageInfo from "./PageInfo.vue";
import Tags from "./Tags.vue";
import {useData} from "vitepress";
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>

    <template #sidebar-nav-before >
      <PageInfo v-if="frontmatter['author'] && width < 1280" />
    </template>

    <template #aside-outline-before >
      <PageInfo v-if="frontmatter['author'] && width >= 1280" />
    </template>

    <template #doc-footer-before>
      <Tags v-if="frontmatter['tags']" />
    </template>
  </Layout>
</template>

<style scoped>

</style>