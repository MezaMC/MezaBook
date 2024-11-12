<script setup lang="ts">
import {servers as servers_json} from "../../../../src/servers/servers";
import ServerEntry from "./ServerEntry.vue";
import ServerAdd from "./ServerAdd.vue";

const servers: Array<string> = Object.keys(servers_json);
</script>

<template>
  <div class="flex flex-col gap-10">
    <ServerEntry :server="server_name" v-for="server_name of servers" />
    <ServerAdd />
  </div>
</template>

<style scoped lang="sass">

</style>