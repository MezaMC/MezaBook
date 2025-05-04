import { defineConfig } from 'vitepress'
import sidebar from "./sidebar.mts";
import UnoCSS from 'unocss/vite';

// FontAwesome Telegram icon
const TelegramIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">' +
    '<path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 ' +
    '39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-' +
    '34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s' +
    '-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26' +
    '.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.' +
    '9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "MezaBook",
  description: "Сайт о русскоязычном сообществе майнкрафт мистики",

  vite: {
	plugins: [
		UnoCSS(),
	  ],
    // css: {
    //   scss: {
    //     api: 'modern-compiler', // or "modern"
    //   }
    // }
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  appearance: 'force-dark',
  srcDir: 'src',
  cleanUrls: true,
  lastUpdated: true,

  sitemap: {
    hostname: 'https://book.meza.one'
  },

  head: [
    ['meta', { name: 'theme-color', content: '#6eb59f' }],
    ['meta', { property: 'og:url', content: 'https://book.meza.one/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'MezaBook' }],
    ['meta', {property: 'og:description', content: 'Сайт о русскоязычном сообществе майнкрафт мистики'}],
    ['meta', {property: 'og:image', content: 'https://book.meza.one/logo/home.png'}],
    ['link', { rel: 'icon', href: '/logo/min.svg' }]
  ],

  themeConfig: {
    logo: '/logo/min.svg',

    footer: {
      message: 'Выпущено под <a href="https://github.com/mezamc/mezabook/blob/main/LICENSE">лицензией MIT</a>.',
      copyright: 'Copyright © 2024 - '+(new Date()).getFullYear()+'. <a href="https://github.com/mezamc">Meza Inc.</a>'
    },

    notFound: {
      code: 'Ошибка 404',
      title: 'Страница не найдена',
      quote: '',
      linkText: 'На Главную'
    },



    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск страницы'
          },
          modal: {
            noResultsText: 'Результатов не найдено по запросу',
            resetButtonTitle: 'Очистить',
            footer: {
              selectText: '- выбрать',
              navigateText: '- переключение между результатами',
              closeText: '- закрыть'
            }
          }
        }
      }
    },

    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Режим',
    returnToTopLabel: 'Наверх',
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    outline: {
      label: 'Содержание',
      level: [2,3]
    },


    editLink: {
      pattern: 'https://github.com/MezaMC/MezaBook/edit/main/src/:path',
      text: 'Редактировать на GitHub'
    },

    lastUpdated: {
      text: 'Обновлено',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      {
        text: 'Категории',
        items: [
          { text: 'Информация', link: '/info/' },
          { text: 'Для игроков', link: '/p/' }
        ]
      }
    ],

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MezaMC/MezaBook' },
      { icon: 'discord', link: 'https://discord.gg/YNw5zke3Y3' },
      { icon: {svg: TelegramIcon}, link: 'https://t.me/meza_inc' }
    ]
  }
})
