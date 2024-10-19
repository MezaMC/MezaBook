export interface ServerLinks {
    discord?: string
    page?: string
    youtube?: string
    website?: string
    donate?: string
    telegram?: string
}

export interface Server {
    name: string
	ip?: string
	desc?: string
	icon?: string
    archived?: boolean
    links?: ServerLinks
	color?: string
	alt_api?: boolean
}

export const servers: { [name: string]: Server } = {
    demonstrate: {
        name: 'Demonstrate',
        ip: 'mc.demonstrate.space',
        desc: 'Вы чувствуете? Они наблюдают за тобой!',
        links: {
            discord: 'https://discord.gg/mJc8DhwaQF',
            donate: 'https://www.donationalerts.com/r/demonstrate_1',
            telegram: 'https://t.me/+0tYnsyFrrMc0Njhi'
        },
    },
    warped_redux: {
        name: `<span class="grad-warped">Warped</span><span class="grad-redux">Redux</span>`,
        ip: 'WarpedRedux.online',
        icon: '/server-icons/warped_redux.png',
        desc: `Возвращение легендарного мистического сервера<br>Новая история, новые возможности`,
        alt_api: true,
        color: `#00cdac`,
        links: {
            discord: 'https://discord.gg/Q69FqG47xw'
        },
    },
    unknown_dead: {
        name: 'ʊռӄռօառ.⃣.⃣',
        ip: '212.80.7.230:20096',
        alt_api: true,
        desc: `<span style='color: #bf0000;'>Tԋҽ ɱσʂƚ ƚҽɾɾιႦʅҽ αɳԃ ԃҽɱσɳιƈ ʂҽɾʋҽɾ</span>`,
        color: '#ca9292',
        links: {
            discord: 'https://discord.gg/qEupJs53Tc',
            page: `/servers/pages/UnknownDead`,
            website: 'https://dev-ce2.github.io/devlogs/'
        },
    },
    survival_home: {
        name: `<span class="grad-survivalhome">SurvivalHome</span>`,
        ip: '212.80.7.212:20070',
        icon: 'https://cdn.discordapp.com/icons/1180571431046758490/e59a2262b1d3bb64840a363e80633c2b.webp?size=128',
        desc: `Уютный и приятный сервер!`,
		alt_api: true,
        color: '#e1c682',
        links: {
            discord: 'https://discord.gg/hcKq2TPJhz'
        },
    },
    new_alliance: {
        name: `NewAlliance`,
        ip: '65.109.58.46:20133',
        desc: '<span style=\'color: #bf0000;\'>they are watching</span>',
        links: {
            discord: 'https://discord.gg/JNKCzGYQ3U',
            website: 'https://new-alliancemc.github.io/newalliance/'
        },
    },
    dishade: {
        name: `<span class="color-[#C1A685]">Dishade</span>`,
        ip: '212.80.7.66:26231',
        desc: 'Таинственный мистический сервер с захватывающим сюжетом',
        links: {
            discord: 'https://discord.gg/nWt9K3Ztts',
            youtube: 'https://www.youtube.com/@Dishade_Server',
        },
    },
    mythic_casual: {
        name: 'MythicCasual',
        ip: '212.80.7.68:24093',
        icon: 'https://cdn.discordapp.com/icons/1200803681059225723/7a661c13a82936bc397f2f77e357df8a.webp?size=128',
        links: {
            discord: 'https://discord.gg/V5EXBvH9Vr'
        }
    },
    wadner_server: {
        name: 'Wadner server',
        ip: '212.80.7.202:20444',
        desc: 'Сервер не включался долгое время',
        icon: 'https://cdn.discordapp.com/icons/1035994086487892059/2b1e9353c623aa2fd2b5759b2cdd5f3e.webp?size=128',
        color: '#8caaa5',
        links: {
            discord: 'https://discord.gg/8BdbfEKNHE'
        },
    },

}

