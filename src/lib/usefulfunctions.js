const { uniqRow } = require('./pg.js');

async function getOneInlineByTitle(title) {
    const inlines = (await uniqRow('select * from inlinemenu where menu_title = $1', title)).rows[0]
    return inlines
}

const delay = ms => new Promise(res => setTimeout(res, ms));

module.exports = {
    getOneInlineByTitle,
    delay
}