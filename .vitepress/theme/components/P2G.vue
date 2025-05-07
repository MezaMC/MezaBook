<template>
  <div
      class="w-full flex justify-between bg-bg-card rounded-2 p-4 p-t-2 box-border banner
      border-(2 solid #FF86AB55) hover:border-#FF86AB99 transition"
  >
    <div class="flex flex-col gap-1">
      <div class="flex flex-row items-center gap-2">
        <img src="/logo/p2g_logo.svg" alt="p2g-logo" class="w-8 h-8" />
        <b>Play2GO.cloud</b>
      </div>
      <span>
        Мощный и недорогой Minecraft/VDS хостинг.
      </span>
      <a class="hover:p-l-1 transition-all" href="https://p2g.meza.one" target="_blank">Перейти</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.banner {
  background: linear-gradient(
          60deg,
          #250107,
          #060404
  );
}

a {
  color: #FF86AB;
  text-decoration-color: #FF86AB55;
  text-decoration: underline;
  &:hover {
    color: #ffbdd3;
  }
}

.close-button {
  --color: 255, 134, 171;
}

</style>