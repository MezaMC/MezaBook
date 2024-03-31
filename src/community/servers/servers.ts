export interface Server {
    ip: string
    desc: string
    icon?: string
    discord?: string
    page?: string
}

export const servers: { [name: string]: Server } = {
    ominous_void: {
        ip: 'OminousVoid.net',
        desc: `Особенный Minecraft сервер, где обитают <span style='color: #AA0000;'>паранормальные существа.</span>`,
        discord: '8C6kYDGaUX',
        page: '/ov/'
    },
    wadner_server: {
        ip: '51.77.93.194:20444',
        desc: `<span style='color: #CC0000;'>Wadner server</span>`,
        discord: '8BdbfEKNHE'
    },
    orbitium: {
        ip: 'orbitium.online',
        desc: `Таинственный сервер с мистикой, содержащий в себе много неизвестного...`,
        discord: 'orbitium'
    },
    unknown_dead: {
        ip: '198.251.89.194:20096',
        desc: `<span style='color: #DD0000;'>UnknownDead</span>
        <span style='color: #990000;'> - Tԋҽ ɱσʂƚ ƚҽɾɾιႦʅҽ αɳԃ ԃҽɱσɳιƈ ʂҽɾʋҽɾ</span>`,
        discord: 'qEupJs53Tc',
        page: `/community/servers/UnknownDead`
    },
    trinity_server: {
        ip: '65.109.38.94:20619',
        desc: `<span style='color: #bea674;'>Trinity Server</span> - Загадочный серверный мир, открытый Троицей.`,
        discord: 'Kt7d6nx3Cr'
    },
    survival_home: {
        ip: '46.4.17.189:25047',
        desc: `<span class="text-blue-500">SurvivalHome</span> » Уютный сервер для выживания!`,
        discord: 'hcKq2TPJhz'
    },
    mythic_casual: {
        ip: '138.201.122.104:24093',
        desc: `<span class="text-gray-100">Mythic Casual</span> - Необычный мистический сервер с испытаниями и артефактами`,
        discord: 'mythiccasual'
    },
}