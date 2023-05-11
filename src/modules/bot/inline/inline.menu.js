require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const { v4: uuidv4 } = require('uuid');
const { getOneInlineByTitle } = require('../../../lib/usefulfunctions');
const { addItemsToList } = require('../../../config/inline.menu.list');

const inline_menu = async (bot, msg) => {
    try {
        const menu_list = await addItemsToList(bot, msg)
        
        bot.answerInlineQuery(msg.id, menu_list, {cache_time: 0})
    } catch (error) {
        console.log(error.message, 'inlinequery');
    }
}

module.exports = {
    inline_menu
}