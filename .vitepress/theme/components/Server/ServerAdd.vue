<script setup lang="ts">

import {Icon} from "@iconify/vue";
</script>

<template>
  <div class="flex w-full justify-center">
    <a href="https://github.com/MezaMC/MezaBook/issues/new?labels=%D0%A1%D0%B5%D1%80%D0%B2%D0%B5%D1%80&template=new-server.yml"
       target="_blank"
       class="flex gap-1 border-(brand-dark 2px solid) rounded-2 pl-3 pr-3 p-2 important:transition-all
       hover:(bg-brand-soft important:color-white/80) active:scale-90">
      <Icon icon="tabler:plus" class="w-6 h-6 lt-sm:hidden" />
      Добавить свой сервер
    </a>
  </div>
</template>

<style scoped lang="sass">

</style>