<script setup lang="ts">

const props = defineProps<{
  data: undefined | {
    online: number | undefined
    max_online: number | undefined
    version: string | undefined
  }
}>()

</script>

<template >

  <div v-if="data !== undefined" class="flex gap-2.5 items-center">
    <div class="h-1.5 w-1.5 bg-green rounded shadow-green shadow-[0px_0px_5px_1px] " />

    <span v-if="data.online !== undefined && data.max_online !== undefined" class="flex gap-1">
      <span class="text-vptext-2">Онлайн:</span>
      <span class="flex gap-0.5">{{ data.online }}<span class="text-vptext-3">/</span>{{ data.max_online }}</span>
    </span>

    <template v-if="data.version !== undefined">
      <div class="w-[1px] h-4 bg-brand-divider" />
      <span class="flex gap-1"><span class="lt-phone:hidden text-vptext-2">Версия:</span> {{ data.version }}</span>
    </template>

  </div>
  <div v-else class="flex gap-2.5 items-center">
    <div class="h-1.5 w-1.5 bg-red-6 rounded shadow-red-6 shadow-[0px_0px_5px_1px] " />
    <span class="text-vptext-2">Сервер выключен</span>
  </div>
</template>

<style scoped lang="sass">
</style>