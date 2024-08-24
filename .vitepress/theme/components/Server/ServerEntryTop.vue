<script setup lang="ts">

import {Icon} from "@iconify/vue";
import {toast} from "vue-sonner";
const props = defineProps<{
  ip: string
  name: string
  img?: string
}>()

function toClipboard(text: string){
  navigator.clipboard.writeText(text);
  toast.success(`${text} скопировано в буфер обмена.`);
}

</script>

<template>
  <div class="flex h-[64px] bg-bg-elv items-center lt-phone:(flex-col h-[128px] items-start gap-1)">
    <img :src="img !== undefined ? img : '/pack.png'" alt="server icon" width="64" height="64" />
    <div class="debug flex flex-col w-fit h-fit sm:m-l-4 m-l-2">
      <span class="debug font-600 sm:text-2xl text-xl h-8 overflow-scroll text-nowrap flex items-center" v-html="name"></span>
      <div class="flex gap-1 items-center max-h-6">
        <span class="debug font-mono lt-sm:text-sm h-fit text-brand-main font-500">{{ ip }}</span>
        <button @click="toClipboard(ip)"
                class="h-7.5 w-7.5 transition flex items-center justify-center rounded border-transparent text-vptext-2
                hover:(bg-bg-alt border-(solid 1px brand-divider) text-vptext-1) active:(scale-80 border-brand-dark text-brand-main)">
          <Icon icon="tabler:copy" class="w-4.5 h-4.5"></Icon>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>