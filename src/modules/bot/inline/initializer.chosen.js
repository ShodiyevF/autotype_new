const { reverseChosen } = require("./chosen/reverse.chosen");
const { uniqRow } = require("../../../lib/pg");

const chosenInitializer = async (bot, res) => {
    try {
        const response = res.result_id.split('|')[1]
        const checkUser = (await uniqRow('select * from users where user_chatid = $1', res.from.id)).rows[0]
        if (!checkUser) {
            let botmsg2 = `Bot ga obuna bo'lishingiz kerak\n@autotype_bot ga kirib start buyrug'rini bering`
            const param = {
                inline_message_id: res.inline_message_id,
                parse_mode: 'HTML'
            }
            await bot.editMessageText(botmsg2, param)
        } else if (response == '0'){
            let botmsg2 = `kiritilishda hatolik bor, so'z ni bo'sh qoldirmang ❌`
            const param = {
                inline_message_id: res.inline_message_id,
                parse_mode: 'HTML'
            }
            await bot.editMessageText(botmsg2, param)
        } else if (response == 'versus'){
            reverseChosen(bot, res)
        } else if (response == 'reverse'){
            reverseChosen(bot, res)
        }
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    chosenInitializer
}