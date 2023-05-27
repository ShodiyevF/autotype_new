const { delay } = require("../../../../lib/usefulfunctions")

async function reverseChosen(bot, res) {
    let string = ``
    const param = {
        inline_message_id: res.inline_message_id
    }
    for (const i of res.query) {
        string = string + i
        await bot.editMessageText(string + '░', param)
        delay(700)
    }
    await bot.editMessageText(string, param)
}

module.exports = {
    reverseChosen
}