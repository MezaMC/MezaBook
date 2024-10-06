---
comment: false
---

<script setup>
    import Tag from '/tags/Tag.vue'
    import tags from '/tags/tags.ts'
</script>

# Теги
Для удобной навигации на MezaBook существуют теги.

Нажмите на тег, чтобы перейти на страницу тега.

## Существующие теги
<table>
    <thead>
        <tr>
            <th>Тег</th>
            <th>ID тега</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="tag of Object.keys(tags)">
            <td><Tag :tag="tag"/></td>
            <td><code>{{tag}}</code></td>
            <td>
                <div v-if="tags[tag]?.desc !== undefined" v-html="tags[tag]?.desc"></div>
                <span v-else>-</span>
            </td>
        </tr>
    </tbody>
</table>

## Как добавить тег к статье
Добавьте ID тега в список `tags` в параметрах статьи:

```md
---
title: Основная информация
tags: [server]
---

# {{ $frontmatter.title }}
Содержимое статьи
```
::: details Пояснение
Вместо <span v-pre>`{{ $frontmatter.title }}`</span> автоматически подставляется текст из `title`.

В итоге выйдет следущее:
```md
# Основная информация
Содержимое статьи
```
:::

:warning: Не забудте указать `title`.

## Как создать собственный тег
Добавьте объект тега в `/src/tags/tags.ts`:

```ts
const tags_data: { [name: string]: Tag } =  {
    // ...
    my_tag: { // [!code ++]
        display: 'Отображаемое название тега', // [!code ++]
        color: 'Основной цвет в формате #RRGGBB[AA]', // [!code ++]
        bg: 'Фоновой цвет в формате #RRGGBB[AA]', // [!code ++]
        icon: 'Иконка с iconify', // [!code ++]
        desc: 'Описание тега', // [!code ++]
    } // [!code ++]
}
```
Все эти параметры необязательны: можно добавить просто `my_tag: {}`.<br>
:warning: Не забудьте поставить запятую перед предыдущим объектом тега.