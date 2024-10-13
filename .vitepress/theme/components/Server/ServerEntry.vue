<script setup lang="ts">

import ServerEntryTop from "./ServerEntryTop.vue";
import ServerEntryOnline from "./ServerEntryOnline.vue";
import ServerEntryLinks from "./ServerEntryLinks.vue";
import {Server, servers} from "../../../../src/servers/servers";
import {computed, ref} from "vue";

const props = defineProps<{
  server: string
  onpage?: Boolean
}>()
const server: Server = servers[props.server]

const serverInfo = ref();
const api_url = (server.alt_api ?? false) ? `https://api.mcstatus.io/v2/status/java/` : `https://api.mcsrvstat.us/3/`
const status_url = (server.alt_api ?? false) ? `https://mcstatus.io/status/java/` : `https://mcsrvstat.us/server/`
fetch(`${api_url}${server.ip}`)
    .then(resp => resp.json())
    .then(data => serverInfo.value = data)
    .catch(() => {});

let server_color = server.color ?? 'var(--vp-c-brand)';

const serverIconImg = computed(() => {
  if (server.icon !== undefined) {
    return server.icon;
  } else if (serverInfo.value?.icon) {
    return serverInfo.value.icon;
  } else {
    return '/pack.png';
  }
});

const serverOnlineData = computed(() => {
  if (serverInfo?.value?.online === true) {
    return {
      online: serverInfo?.value?.players?.online,
      max_online: serverInfo?.value?.players?.max,
      version: serverInfo?.value?.protocol?.name
    }
  }
});

</script>

<template>
  <div class="rounded-2 overflow-hidden border-(1px solid white op-15) hover:border-op-30 transition">

    <ServerEntryTop :ip="server.ip" :name="server.name" :img="serverIconImg" /> <!-- Верхний блок (иконка, название и ip) -->

    <hr class="important:(p-0 m-0)"> <!-- Разделитель -->

    <div class="w-full flex p-l-4 p-r-4 p-3 flex-col gap-1.5"> <!-- Нижний блок -->

      <span v-html="server.desc" v-if="server.desc" class="text-vptext-1.5" /> <!-- Описание -->
      <ServerEntryOnline :data="serverOnlineData" /> <!-- Онлайн и версия -->
      <ServerEntryLinks :links="server.links" :onpage="onpage" /> <!-- Ссылки -->

    </div>
  </div>
</template>

<style scoped lang="sass">
:deep(.color-server)
  color: v-bind(server_color) !important
  transition: 150ms
  //color: var(--vp-c-brand)

:deep(a.color-server)
  &:hover
    filter: brightness(1.2)
  &:active
    filter: brightness(1.5)
</style>