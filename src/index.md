---
layout: home
title: Главная

hero:
  name: "MezaBook"
  text: "Свободный ресурс о сообществе мистических Minecraft серверов"
  image: /logo/home.svg
  actions:
    - theme: alt icon icon-book-open
      text: Читать статьи
      link: /p/
    - theme: alt icon icon-mezaservers
      text: MezaServers
      link: /servers/
    

# features:
#   - title: <span class='emoji'>📥</span> Возможность редактирования
#     details: Каждый может отредактировать любой аспект сайта, создав Pull Request.
#     link: https://github.com/MezaMC/MezaBook
#     linkText: Подробная инструкция

#   - title: <span class='emoji'>🧪</span> Проект Meza Inc.
#     details: Проекты, созданные Meza Inc, известны в сообществе своим высоким качеством.
#     link: https://t.me/meza_inc
#     linkText: Telegram канал Meza Inc.

#   - title: <span class='emoji'>🕯️</span> Полноценный аналог МКВ
#     details: На МКВ есть множество неудобств и ограничений. MezaBook создан для расширения возможностей сообщества.

#   - title: <span class='emoji'>📄</span> Сделан на VitePress
#     details: Красивый дизайн и широкий функционал сайта - заслуга фреймворка VitePress.
#     link: https://vitepress.dev

#   - title: <span class='emoji'>🔓</span> Тесная связь с GitHub
#     details: GitHub позволяет реализовать систему комментариев и редактирования статей.
#     link: https://github.com/MezaMC/MezaBook

#   - title: <span class='emoji'>⚡</span> Стоит на Cloudflare Pages
#     details: Это гарантирует стабильную работу сайта, удобство деплоя и защиту от DDoS атак.
#     link: https://pages.cloudflare.com
---

<script setup>
    import HomeContent from "../.vitepress/theme/components/HomePage/HomeContent.vue";
</script>

<HomeContent />