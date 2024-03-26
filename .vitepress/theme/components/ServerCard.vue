<script setup lang="ts">
import {computed, ref} from 'vue'
import {Icon} from "@iconify/vue";

const props = defineProps(['ip', 'pagelink', 'dslink', 'icon_url'])

const serverInfo = ref();
fetch(`https://api.mcstatus.io/v2/status/java/${props.ip}`)
    .then(resp => resp.json())
    .then(data => serverInfo.value = data)
    .catch(() => {});

function toClipboard(text: string){
  navigator.clipboard.writeText(text);
}

const serverIconUrl = computed(() => {
  if (props.icon_url !== undefined) {
    return props.icon_url;
  } else if (serverInfo.value?.icon) {
    return serverInfo.value.icon;
  } else {
    return '/pack.png';
  }
})

</script>

<template>
  <div class="card flex flex-col sm:flex-row items-start justify-between">

    <div class="flex flex-row gap-3">
      <div class="min-w-16 flex items-center rounded-lg">
        <img :src="serverIconUrl" class="w-[64px] h-[64px] rounded-lg" alt=" ">
      </div>

      <div class="flex flex-col">
        <div class="ip text-xl flex sm:flex-row flex-col sm:items-center sm:gap-3">
          {{ props.ip }}
          <div class="flex gap-2">
            <button title="Скопировать IP" @click="toClipboard(props.ip)"><Icon icon="tabler:copy" /></button>
            <a title="Больше информации" target="_blank" :href="`https://mcsrvstat.us/server/${props.ip}`"><Icon icon="tabler:info-circle" /></a>
            <a title="Discord сервер" target="_blank" :href="`https://discord.gg/${props['dslink']}`" v-if="props['dslink'] !== undefined"><Icon icon="tabler:brand-discord" /></a>
            <a title="Страница сервера" :href="props['pagelink']" v-if="props['pagelink'] !== undefined"><Icon icon="tabler:file" /></a>
          </div>

        </div>
        <div class="desc text-lg max-w-lg min-w-0 leading-5 text-gray-400">
          <slot></slot>
        </div>
      </div>
    </div>

    <div class="flex flex-row sm:flex-col justify-end sm:gap-0 gap-3">
      <div class="flex items-center mr-1 mt-1 min-h-3 gap-2.5">

        <div class="w-2 h-2 rounded-xl indicator sm:ml-0 ml-3" :class="[serverInfo?.online == true ? 'online' : '', 'offline']"></div>

        <span class="text-lg w-fit p-0 flex gap-1 justify-end" v-if="serverInfo?.online == true">

          <span class="sm:hidden">Онлайн: </span>
          {{serverInfo?.players?.online}}
          <span class="text-gray-400">/</span>
          {{serverInfo?.players?.max}}
        </span>

        <span class="text-lg text-red-700 font-semibold" v-else>
          Выкл
        </span>


      </div>
<!--      <div class="flex items-center justify-end gap-1 text-lg sm:mt-0 mt-1"-->
<!--           v-if="serverInfo?.protocol !== undefined">-->
<!--        <span class="sm:hidden">Версия: </span>-->
<!--        <span class="mr-1">{{serverInfo?.protocol?.name}}</span>-->
<!--      </div>-->
    </div>

  </div>
</template>

<style lang="sass" scoped>

.ip
  font-weight: 600
  font-family: 'Noto Sans Mono', monospace

  button
    font-size: 22px
    color: #c4c4c4
    transition: 100ms ease-out

    &:active
      transform: scale(90%)
      color: var(--vp-c-brand)

  a
    color: #c4c4c4
    font-size: 22px
    transition: 100ms ease-out
    &:hover
      color: var(--vp-c-brand)

    &:active
      transform: scale(90%)


.card
  background: var(--vp-c-bg)
  border-radius: 10px
  padding: 10px
  margin-bottom: 10px
  outline: var(--vp-c-divider) 1px solid
  transition: border-color .25s
  &:hover
    outline: var(--vp-c-brand) 1px solid

.indicator
  &.offline
    background: red
    box-shadow: rgba(255, 0, 0, 0.58) 0 0 5px 1px
  &.online
    background: lime
    box-shadow: rgba(0, 255, 0, 0.58) 0 0 5px 1px

</style>