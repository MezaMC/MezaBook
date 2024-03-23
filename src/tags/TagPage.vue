<script setup lang="ts">
const props = defineProps<{
  tag: string
}>()

import {data as pages} from './pages.data.mts'
import tags_data from './tags.mts'
let tags = Object.keys(tags_data)
import {computed, ref} from "vue";
import Tag from "./Tag.vue";

const display_pages = computed(() => {
    return pages
        .filter(page => page.frontmatter.tags !== undefined)
        .filter(page => page.frontmatter.tags.includes(props.tag))
        .map(page => page);

});

let css_color = tags_data[props.tag]?.['color'] ?? 'var(--vp-c-brand-1)';
</script>


<template>
  <div class="flex flex-row gap-2">
    <Tag v-for="tag in tags" :tag="tag" :class="[props.tag !== tag ? 'inactive' : 'active']"/>
  </div>

  <p v-if="tags_data[props.tag]?.['desc'] !== undefined" v-html="tags_data[props.tag]?.['desc']"/>

  <div v-if="display_pages.length !== 0">
    <h2>Список статей</h2>
    <ul>
      <li v-for="page of display_pages"><a :href="page.url">{{page.frontmatter.title}}</a></li>
    </ul>
  </div>
  <div v-else class="text-red-500">
    Страниц с таким тегом не найдено.
  </div>
</template>


<style scoped lang="sass">

</style>