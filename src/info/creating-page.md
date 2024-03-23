---
comment: false
author: envizar
editLink: false
---

# Создание статьи

## Упрощённый вариант

1. Перейдите по [ссылке](https://github.com/MezaMC/MezaBook/issues/new).
2. Напишите свою статью в формате Markdown
::: tip Название статьи
В `Add a title` пишите название на английском, маленькими буквами и используя `-` вместо пробелов.
Адрес статьи будет выглядеть так: `https://book.meza.one/<категория>/<название>`
:::
::: details :framed_picture: Изображение
![Добавление новой статьи](/images/new-article-example.png)
:::
3. Можете посмотреть на то, как применится форматирование
::: details :framed_picture: Изображение
![Предпросмотр новой статьи](/images/new-article-example-preview.png)
:::
4. Нажмите `Submit new issue` и ждите, пока редакторы MezaBook заметят статью.

## Классический вариант
1. [Создайте форк](https://github.com/MezaMC/MezaBook/fork) репозитория MezaBook.
2. Внесите изменения, используя привычный Вам редактор. Я рекомендую [VSCode](https://code.visualstudio.com/).
::: info Информация
Вам понадобится [NodeJS](https://nodejs.org/en/download), [pnpm](https://pnpm.io/ru/installation).

Все статьи находятся в папке `/src/`. Не трогайте другие файлы, если не знаете, за что они отвечают.
Каждая папка внутри `/src/` - категория. Создавайте статьи только в категориях.
Чтобы запустить у себя локальную копию сайта, напишите команды `pnpm i`, `pnpm run dev`.
:::
3. [Откройте Pull Request](https://github.com/MezaMC/MezaBook/compare/) в ветку dev.
4. Ждите, пока редакторы MezaBook заметят Ваш Pull Request.

## Особенности
### Эмодзи
```
:tada: :100: :x:
```
Результат: :tada: :100: :x:

Полный список доступных эмодзи: [ссылка](https://raw.githubusercontent.com/markdown-it/markdown-it-emoji/master/lib/data/full.mjs).

### Параметры статьи
```yaml
# Включить/выключить комментарии под статьёй
# По умолчанию true
comment: true/false

# Указывайте никнейм из ссылки на участника:
# https://github.com/<никнейм>
author: никнейм
# Пример: "author: envizar", ссылка будет вести на
# https://github.com/envizar

# Разрешить/запретить другим редактировать статью
# Если кто-то кроме автора попытается отредактировать
# статью с "editLink: false", его правки будут отклонены
editLink: true/false

# Включить/выключить отображение последнего времени редактирования
lastUpdated: true/false

# Список с тегами статьи
# Учтите, что можно указывать только существующие теги
tags: [tag1, tag2]
```
Параметры пишутся в начале .md файла
```md
---
* тут параметры статьи *
---
# Название статьи
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, sit!
```