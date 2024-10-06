import Tag from "./Tag.vue";

interface Tag {
    icon?: string,
    color?: string,
    bg?: string,
    desc?: string,
    display?: string
}

const tags_data: { [name: string]: Tag } = {
    server: {
        icon: 'tabler:server',
        display: 'Сервер',
        desc: 'Тег для статей о мистических серверах'
    },
    ov: {
        icon: 'tabler:grave-2',
        display: 'OminousVoid',
        color: '#c8bafd',
        bg: 'rgba(106,110,253,0.16)',
        desc: 'Тег для статей, отсонящихся к <a href="/ov/">OminousVoid</a>'
    }
}

export default tags_data