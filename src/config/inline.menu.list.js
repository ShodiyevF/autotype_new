require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const { v4: uuidv4 } = require('uuid');

async function addItemsToList(bot, msg) {
    const menu_list = []
    
    const versus = {
        id: `${uuidv4().toString()}|versus`,
        type: 'article',
        title: 'MAKHACHEV vs OLIVEIRA',
        input_message_content: {
            message_text: 'MAKHACHEV vs OLIVEIRA'
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: `https://telegra.ph/file/a5828b810e8dc191a2b5d.jpg`
    }
    
    const reverse = {
        id: `${uuidv4().toString()}|${(await msg.query.toString().length) === 0 ? '0' : 'reverse'}`,
        type: 'article',
        title: 'Almashtirish 🔄',
        input_message_content: {
            message_text: (await msg.query) ? (await msg.query) : 'error'
        },
        description: 'birinchi text yozib keyin shuni ustiga bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: `https://telegra.ph/file/836910297c5b6cd544fbb.jpg`
    }
    
    const secret = {
        id: `${uuidv4().toString()}|${(await msg.query.toString().length) === 0 ? '0' : 'whisper'}`,
        type: 'article',
        title: 'Maxfiy 🔒',
        input_message_content: {
            message_text: `Maxfiy xabar ${msg.from.first_name ? msg.from.first_name : 'kimdur'} dan\nxabarni o'chish uchun knopkaga bo'sing !`
        },
        description: '@autotype_bot xabar @username',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: `https://telegra.ph/file/dbc831ce27b7b58429e5b.jpg`
    }
    
    const instagram = {
        id: `${uuidv4().toString()}|${(await msg.query.toString().length) === 0 ? '0' : 'insta1'}`,
        type: 'article',
        title: 'Instagram',
        input_message_content: {
            message_text: (await msg.query) ? (await 'insta: ' + msg.query) : 'error'
        },
        description: 'instagram @username ngizni yozing keying bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: `https://telegra.ph/file/50bdf759e8fedf050cecf.jpg`
    }
    
    const uzbekSila = {
        id: `${uuidv4().toString()}|trend_uzbeksila`,
        type: 'article',
        title: 'Uzbek sila 🇺🇿',
        input_message_content: {
            message_text: 'UZBEK'
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: `https://telegra.ph/file/8e13917e7750c038e6adc.jpg`
    }
    
    const jumaMuborak = {
        id: `${uuidv4().toString()}|islamic1`,
        type: 'article',
        title: 'Juma Muborak !',
        input_message_content: {
            message_text: `🌖🌗🌘🌑🌒🌓🌔\nㅤ𝓙𝓾𝓶𝓪 𝓶𝓾𝓫𝓸𝓻𝓪𝓴\n🌖🌗🌘🌑🌒🌓🌔`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/bb56abd5ff097683053cf.jpg'
    }
    
    const bonuniYigitiBor = {
        id: `${uuidv4().toString()}|trend_bonuniyigiti`,
        type: 'article',
        title: 'Bonuni yigiti',
        input_message_content: {
            message_text: `nimaga`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/8e13917e7750c038e6adc.jpg'
    }
    
    const dunyoSaniTogangEmas = {
        id: `${uuidv4().toString()}|trend_dunsani`,
        type: 'article',
        title: 'Dunyo 🌎',
        input_message_content: {
            message_text: `dunyo`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/8e13917e7750c038e6adc.jpg'
    }
    
    const iLoveYou = {
        id: `${uuidv4().toString()}|meme_iloveyou`,
        type: 'article',
        title: 'I love you',
        input_message_content: {
            message_text: `🤍🤍🤍🤍🤍🤍🤍🤍🤍`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/c55e0cec20f105a0fb56b.jpg'
    }
    
    const RasmgaOl = {
        id: `${uuidv4().toString()}|trend_rasmgaold`,
        type: 'article',
        title: 'Rasmga ol',
        input_message_content: {
            message_text: `rasmga`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/8ebe31b4cccc50651ac85.jpg'
    }
    
    const pubg = {
        id: `${uuidv4().toString()}|pubg`,
        type: 'article',
        title: 'Pubg 🪖',
        input_message_content: {
            message_text: `G`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/375eea83dc352ed0eb82f.jpg'
    }
    
    const freefire = {
        id: `${uuidv4().toString()}|freefire`,
        type: 'article',
        title: 'Free fire 🔫',
        input_message_content: {
            message_text: `free`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: "https://telegra.ph/file/9ec707fa9acf6dc66ce44.jpg"
    }
    
    const telniOling = {
        id: `${uuidv4().toString()}|telniol`,
        type: 'article',
        title: 'Telni oling 📞',
        input_message_content: {
            message_text: `t`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/b7099bba571ff05f540d4.jpg'
    }
    
    const ok = {
        id: `${uuidv4().toString()}|ok`,
        type: 'article',
        title: 'Ok 🆗',
        input_message_content: {
            message_text: `O`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/bc9ddad3fdbd868fefde6.jpg'
    }
    
    const suroq = {
        id: `${uuidv4().toString()}|suroq`,
        type: 'article',
        title: 'Suroq ❔',
        input_message_content: {
            message_text: `┈┈███████▄┈`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/f9e34db77e69374315d3d.jpg'
    }
    
    const plus = {
        id: `${uuidv4().toString()}|plus`,
        type: 'article',
        title: 'Plus ➕',
        input_message_content: {
            message_text: `⬜️⬜️⬜️⬜️⬜️⬜️⬜️`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/e975ab7faa28d1eb67b88.jpg'
    }
    
    const soat = {
        id: `${uuidv4().toString()}|soat`,
        type: 'article',
        title: 'Soat 🕛',
        input_message_content: {
            message_text: `🕛 vaqt utyapti`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/19caadffe495a4b8324f9.jpg'
    }
    
    const toHome = {
        id: `${uuidv4().toString()}|tohome`,
        type: 'article',
        title: 'Uyga 🚶🏻',
        input_message_content: {
            message_text: `🏠ᅠᅠᅠᅠᅠᅠ🚶🏻🏢`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/2cc1b629622fe37990bc5.jpg'
    }
    
    const toMount = {
        id: `${uuidv4().toString()}|tomount`,
        type: 'article',
        title: 'Dachaga boraylik 😢',
        input_message_content: {
            message_text: `🚐ᅠᅠᅠᅠᅠᅠ👬👬👬🏘`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/13754d24fefa3438bf4d2.jpg'
    }
    
    const police = {
        id: `${uuidv4().toString()}|police`,
        type: 'article',
        title: 'Police 🖲',
        input_message_content: {
            message_text: `🔴🔴🔴🔴⬜️⬜️⬜️🔵🔵🔵🔵\n🔴🔴🔴🔴⬜️⬜️⬜️🔵🔵🔵🔵\n🔴🔴🔴🔴⬜️⬜️⬜️🔵🔵🔵🔵`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/f7ec5d8026ce01a10644a.jpg'
    }
    
    const moonMany = {
        id: `${uuidv4().toString()}|moon_many`,
        type: 'article',
        title: 'Moon 🌕',
        input_message_content: {
            message_text: `🌕ᅠ`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/7c7350072214e6b2cf1ee.jpg'
    }
    
    const moonTwo = {
        id: `${uuidv4().toString()}|moon_two`,
        type: 'article',
        title: 'Moon 🌚',
        input_message_content: {
            message_text: `🌚`
        },
        description: 'bosing',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            ]
        },
        thumb_url: 'https://telegra.ph/file/cddb86b4b8b4f2b0438fc.jpg'
    }
    
    // menu_list.push(versus)
    menu_list.push(reverse)
    menu_list.push(secret)
    menu_list.push(instagram)
    menu_list.push(uzbekSila)
    menu_list.push(jumaMuborak)
    // menu_list.push(bonuniYigitiBor)
    // menu_list.push(dunyoSaniTogangEmas)
    menu_list.push(iLoveYou)
    // menu_list.push(RasmgaOl)
    menu_list.push(pubg)
    menu_list.push(freefire)
    menu_list.push(telniOling)
    menu_list.push(ok)
    menu_list.push(suroq)
    menu_list.push(plus)
    menu_list.push(soat)
    menu_list.push(toHome)
    menu_list.push(toMount)
    menu_list.push(police)
    menu_list.push(moonMany)
    menu_list.push(moonTwo)

    return menu_list
}

module.exports = {
    addItemsToList
}