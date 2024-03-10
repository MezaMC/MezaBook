<script setup>
import { Icon } from '@iconify/vue';
import Feature from "./Feature.vue";
</script>

<template>
  <div class="slogan">
    <span class="slogan-header">Быстро · Красиво · Практично</span>
    <span class="slogan-main">Центр сообщества мистики Minecraft</span>
    <span class="slogan-footer">MezaBook позволяет каждому делиться своими работами с сообществом. Наша цель - объединение комьюнити</span>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-8 mt-12">
      <Feature icon="tabler:pencil" title="Создавать статьи - просто">
        Если Вы не хотите разбираться в системе Git, можете просто открыть Issue на нашем GitHub и отослать файл со статьёй в формате Markdown.
      </Feature>
      <Feature icon="tabler:device-desktop" title="Предпросмотр изменений">
        Вы можете запустить локальную копию MezaBook на своём ПК, чтобы в реальном времени смотреть внесённые изменения.
      </Feature>
      <Feature icon="tabler:hand-off" title="Вандализм невозможен">
        Портить чужие статьи или размещать недопустимый контент невозможно. Все статьи проверяются вручную перед публикацией.
      </Feature>
      <Feature icon="tabler:code" title="Каждый может так же">
        Вы можете бесплатно создать такой же и полностью независимый сайт, после чего разместить ссылку на сайт здесь.
      </Feature>
    </div>
  </div>


</template>

<style lang="sass" scoped>

.slogan
  //outline: 1px red solid
  margin-top: 100px
  display: flex
  flex-direction: column
  align-items: center

.slogan-header
  color: var(--vp-c-brand)
  font-size: 18px
  font-weight: 500
  margin-bottom: 12px

.slogan-main
  font-size: 30px
  font-weight: 600
  text-align: center
  line-height: 1.3

.slogan-footer
  color: var(--vp-c-text-2)
  font-size: 20px
  font-weight: 400
  margin-top: 12px
  max-width: 700px
  text-align: center
  line-height: 1.6

</style>