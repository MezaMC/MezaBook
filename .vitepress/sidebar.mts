export default [

    {
        text: 'Информация',
        collapsed: true,
        items: [
            { text: 'Что такое MezaBook', link: '/info/' },
            { text: 'Правила', link: '/info/rules' },
            { text: 'Создание статей', link: '/info/creating-page' },
            { text: 'Теги', link: '/info/tags' }
        ]
    },

    {
        text: 'Для игроков',
        link: '/p/',
        items: [
            { text: 'Сервера', link: '/p/servers' },
            { text: 'Meteor Client', link: '/p/meteor' },
            { text: 'Полезные примочки', link: '/p/useful-things' }
        ]
    },

    {
        text: 'Для разработчиков',
        link: '/s/',
        items: [
        ]
    }

]