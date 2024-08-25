export interface ServerLinks {
    discord?: string
    page?: string
    youtube?: string
    website?: string
    donate?: string
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
    wadner_server: {
        name: 'Wadner server',
        ip: '212.80.7.202:20444',
        icon: 'https://cdn.discordapp.com/icons/1035994086487892059/2b1e9353c623aa2fd2b5759b2cdd5f3e.webp?size=128',
        color: '#8caaa5',
        links: {
            discord: 'https://discord.gg/8BdbfEKNHE'
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
        icon: 'https://cdn.discordapp.com/icons/995385741804830760/a_8bbf5bd85601881f716ec80cbbb1718e.webp?size=128',
        desc: `<span style='color: #bf0000;'> - Tԋҽ ɱσʂƚ ƚҽɾɾιႦʅҽ αɳԃ ԃҽɱσɳιƈ ʂҽɾʋҽɾ</span>`,
        color: '#ca9292',
        links: {
            discord: 'https://discord.gg/qEupJs53Tc',
            page: `/servers/UnknownDead`,
            website: 'https://dev-ce2.github.io/devlogs/'
        },
    },
    survival_home: {
        name: `<span class="grad-survivalhome">SurvivalHome</span>`,
        ip: 'survivalhome.0ping.ru',
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
        desc: 'После продолжительной ██████, завод превратился в руины, остатки прошлого по сей день есть в этом мире.',
        links: {
            discord: 'https://discord.gg/JNKCzGYQ3U'
        },
    },
    dishade: {
        name: `<span class="color-[#C1A685]">Dishade</span>`,
        ip: '138.201.142.120:25696',
        desc: 'Таинственный мистический сервер с захватывающим сюжетом',
        links: {
            discord: 'https://discord.gg/nWt9K3Ztts',
            youtube: 'https://www.youtube.com/@Dishade_Server',
        },
    },
    demonstrate: {
        name: 'Demonstrate',
        ip: '178.63.10.85:25572',
        desc: 'Вы чувствуете? Они наблюдают за тобой!',
        links: {
            discord: 'https://discord.gg/mJc8DhwaQF'
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
    hauntedcraft: {
        name: 'HauntedCraft',
        ip: '212.80.7.210:20061',
        desc: 'Наша история только начинается',
        links: {
            discord: 'https://discord.gg/kRnSZ57e4u'
        }
    }

}

