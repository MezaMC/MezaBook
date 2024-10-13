<script setup lang="ts">

import {Icon} from "@iconify/vue";
import {ServerLinks} from "../../../../src/servers/servers";
import { useRouter } from "vitepress";

const router = useRouter();

const props = defineProps<{
  links: ServerLinks
  onpage?: Boolean
}>();

interface LinkData {
  link: string
  icon: string
  display: string
  last?: boolean
  internal_page?: boolean
}

let data: Array<LinkData>;

if (props.links) {
  data = [
    {
      link: props.links.page,
      icon: 'tabler:file',
      display: 'Страница',
      internal_page: true
    },
    {
      link: props.links.telegram,
      icon: 'tabler:brand-telegram',
      display: 'Telegram'
    },
    {
      link: props.links.discord,
      icon: 'tabler:brand-discord',
      display: 'Discord'
    },
    {
      link: props.links.website,
      icon: 'tabler:world',
      display: 'Сайт'
    },
    {
      link: props.links.youtube,
      icon: 'tabler:brand-youtube',
      display: 'YouTube'
    },
    {
      link: props.links.donate,
      icon: 'tabler:coins',
      display: 'Поддержать'
    },
  ].filter(item => item.link);

  if (props.onpage == true) {
    data = data.filter(item => item.display != "Страница")
  }
}

</script>

<template>
<!--lt-sm:(grid items-center gap-1.5 cols-2)-->
  <div class="flex items-center flex-wrap gap-[0.2rem_1.5rem]" v-if="data">

    <template v-for="item of data">

      <a @click="router.go(item.link);" v-if="item.internal_page === true">
        <Icon :icon="item.icon" />
        {{ item.display }}
      </a>

      <a :href="item.link" target="_blank" v-else>
        <Icon :icon="item.icon" />
        {{ item.display }}
      </a>

<!--      <div class="w-[1px] h-4 bg-brand-divider" v-if="item.last !== true" /> &lt;!&ndash; Разделитель &ndash;&gt;-->

    </template>

  </div>

</template>

<style scoped lang="scss">
a {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.24rem;
}
</style>