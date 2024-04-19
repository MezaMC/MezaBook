export interface Server {
    ip: string
    desc: string
    icon?: string
    discord?: string
    page?: string
    outline_color?: string
	alt_api?: boolean
}

export const servers: { [name: string]: Server } = {
    ominous_void: {
        ip: 'OminousVoid.net',
        desc: `Особенный Minecraft сервер, где обитают <span style='color: #AA0000;'>паранормальные существа.</span>`,
        discord: '8C6kYDGaUX',
        page: '/ov/',
        outline_color: '#ccc7e1'
    },
    wadner_server: {
        ip: '51.77.93.194:20444',
        desc: `<span style='color: #CC0000;'>Wadner server</span>`,
        discord: '8BdbfEKNHE',
        outline_color: '#8caaa5'
    },
    unknown_dead: {
        ip: '198.251.89.194:20096',
        desc: `<span style='color: #DD0000;'>UnknownDead</span>
        <span style='color: #990000;'> - Tԋҽ ɱσʂƚ ƚҽɾɾιႦʅҽ αɳԃ ԃҽɱσɳιƈ ʂҽɾʋҽɾ</span>`,
        discord: 'qEupJs53Tc',
        page: `/community/servers/UnknownDead`,
        outline_color: '#DD0000'
    },
    trinity_server: {
        ip: '65.109.38.94:20619',
        desc: `<span style='color: #bea674;'>Trinity Server</span> - Загадочный серверный мир, открытый Троицей.`,
        discord: 'Kt7d6nx3Cr',
        outline_color: '#bea674'
    },
    survival_home: {
        ip: '46.4.17.189:25047',
        desc: `<span class="text-blue-500">SurvivalHome</span> » Уютный сервер для выживания!`,
        discord: 'hcKq2TPJhz',
        outline_color: '#468fe4',
		alt_api: true
    },
    red_union: {
        ip: 'millerium.world',
        desc: `<span class="text-[#CC0000] font-bold">Red Union</span>`,
        discord: 'GfHMvvWtRF',
        outline_color: '#CC0000'
    },
    mythic_casual: {
        ip: '138.201.122.104:24093',
        desc: `<span class="text-gray-100">Mythic Casual</span> - Необычный мистический сервер с испытаниями и артефактами`,
        discord: 'mythiccasual',
        outline_color: 'gray'
    },
	warped_redux: {
		ip: 'WarpedRedux.online',
		desc: `<style scoped>.grad-warped{background: linear-gradient(90deg, #3cff57, #00CDAC);}
		.grad-redux{background: linear-gradient(90deg, #FFB000, #D9924F);}
		.text-clip{-webkit-background-clip: text; -webkit-text-fill-color: transparent;}</style>
		<span class="grad-warped text-clip">Warped</span><span class="grad-redux text-clip">Redux</span> 
		- возвращение легендарного мистического сервера. Новая история, новые возможности`,
		alt_api: true,
		outline_color: `#00cdac`,
		discord: 'Q69FqG47xw'
	}
}