<script setup>
import DefaultTheme from 'vitepress/theme'
import PageInfo from "./components/PageInfo.vue";
import Tags from "./components/Tags.vue";
import {useData} from "vitepress";
import { useWindowSize } from '@vueuse/core'
import { Toaster } from 'vue-sonner'


const { width, height } = useWindowSize()

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>

    <template #layout-top>
      <Toaster theme="dark" position="bottom-right" />
    </template>

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