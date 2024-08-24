<script setup lang="ts">

import {Icon} from "@iconify/vue";

const props = defineProps<{
  page?: string
  discord?: string
  website?: string
  youtube?: string
}>()

interface LinkData {
  link: string
  icon: string
  display: string
  last?: boolean
}

let data: Array<LinkData> = [
  {
    link: props.page,
    icon: 'tabler:file',
    display: 'Страница'
  },
  {
    link: props.discord,
    icon: 'tabler:brand-discord',
    display: 'Discord'
  },
  {
    link: props.website,
    icon: 'tabler:world',
    display: 'Сайт'
  },
  {
    link: props.youtube,
    icon: 'tabler:brand-youtube',
    display: 'YouTube'
  }
].filter(item => item.link);
data[data.length-1].last = true;

</script>

<template>

  <div class="flex items-center gap-2.5" v-if="Object.keys(props).length !== 0">

    <template v-for="item of data">
      <a class="flex items-center gap-1" :href="item.link" target="_blank">
        <Icon :icon="item.icon" />
        {{ item.display }}
      </a>

      <div class="w-[1px] h-4 bg-brand-divider" v-if="item.last !== true" />
    </template>

  </div>
</template>

<style scoped lang="sass">
a
  cursor: pointer
</style>