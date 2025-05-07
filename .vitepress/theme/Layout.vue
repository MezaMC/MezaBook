<script setup>
import DefaultTheme from 'vitepress/theme'
import PageInfo from "./components/PageInfo.vue";
import Tags from "./components/Tags.vue";
import {useData} from "vitepress";
import { useWindowSize } from '@vueuse/core'
import { Toaster } from 'vue-sonner'
import P2G from './components/P2G.vue';

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
      <PageInfo v-if="frontmatter['authors'] && width < 1280" class="lt-hidesidebar:mb-4 hidesidebar:mt-4" />
    </template>

    <template #aside-outline-before >
      <PageInfo v-if="frontmatter['authors'] && width >= 1280" class="mb-4" />
    </template>

	<template #aside-ads-after >
      <P2G v-if="frontmatter['p2gad'] !== false" />
    </template>

    <template #doc-footer-before>
      <Tags v-if="frontmatter['tags']" />
    </template>

  </Layout>
</template>

<style scoped>

</style>