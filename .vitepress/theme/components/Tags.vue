<script setup>
import {useData} from "vitepress";
import Tag from "../../../src/tags/Tag.vue";

const { frontmatter } = useData()
</script>

<template>

  <div class="flex flex-row gap-2 items-center">
    Теги:
    <Tag v-for="tag in frontmatter['tags']" :tag="tag" />
  </div>
</template>