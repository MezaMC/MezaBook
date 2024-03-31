
interface Tag {
    icon?: string,
    color?: string,
    bg?: string,
    desc?: string,
    display?: string
}

export default {
    server: <Tag>{
        icon: 'tabler:server',
        display: 'Сервер',
        desc: 'Тег для статей о мистических серверах'
    },
    ov: <Tag>{
        icon: 'tabler:grave-2',
        display: 'OminousVoid',
        color: '#c8bafd',
        bg: 'rgba(106,110,253,0.16)',
        desc: 'Тег для статей, отсонящихся к <a href="/ov/">OminousVoid</a>'
    }
}