export default {

    '/info': [{
        text: 'Информация',
        items: [{
            text: 'О MezaBook',
            link: '/info/'
        },
            {
                text: 'Правила',
                link: '/info/rules'
            },
            {
                text: 'Создание статей',
                link: '/info/creating-page'
            },
            {
                text: 'Создание своей вики',
                link: '/info/creating-wiki'
            },
            {
                text: 'Теги',
                link: '/info/tags'
            }
        ]
    }],

    '/p': [{
        text: 'Для игроков',
        link: '/p/',
        items: [
            {
                text: 'Сервера',
                link: '/p/servers'
            },
            {
                text: 'Meteor Client',
                link: '/p/meteor'
            },
            {
                text: 'Полезные примочки',
                link: '/p/useful-things'
            }
        ]
    }]

}