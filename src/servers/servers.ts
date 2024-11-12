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
            discord: 'https://discord.gg/hcKq2TPJhz',
            donate: 'https://boosty.to/survivalhome',
            telegram: 'https://t.me/survivalhome',
            youtube: 'https://www.youtube.com/@SurvivalHomeserver'
        },
    },
    echo_void: {
        name: `EchoVoid`,
        ip: '65.109.58.46:20931',
        desc: '<span style=\'color: #bf0000;\'>they are watching</span>',
        links: {
            discord: 'https://discord.gg/JNKCzGYQ3U',
            website: 'https://new-alliancemc.github.io/newalliance/'
        },
    },
    crimsonium: {
        name: '<span class="grad-crimsonium">Crimsonium</span>',
        desc: 'Мистический сервер со своими интересными мифами и сюжетом. Погрузитесь в мир мистики!',
        ip: '212.80.7.203:20052',
        links: {
            discord: 'https://discord.gg/P4nZnX2pG7'
        }
    },
    mythic_casual: {
        name: 'MythicCasual',
        ip: '212.80.7.68:24093',
        icon: 'https://cdn.discordapp.com/icons/1200803681059225723/7a661c13a82936bc397f2f77e357df8a.webp?size=128',
        links: {
            discord: 'https://discord.gg/V5EXBvH9Vr'
        }
    },
    dishade: {
        name: `<span class="color-[#C1A685]">Dishade</span>`,
        ip: '5.83.140.211:25721',
        desc: 'Таинственный мистический сервер с захватывающим сюжетом',
        links: {
            discord: 'https://discord.gg/nWt9K3Ztts',
            youtube: 'https://www.youtube.com/@Dishade_Server',
        },
    },
    haunted_craft: {
        name: "<span class='color-gray-5'>Туман поглощает последние лучи света</span>",
        ip: '212.80.7.212:20006',
        links: {
            discord: 'https://discord.gg/kRnSZ57e4u',
            telegram: 'https://t.me/hauntedcraft',
            youtube: 'https://www.youtube.com/@HauntedCraftYT'
        }
    }

}

