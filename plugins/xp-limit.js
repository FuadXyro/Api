import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
let info = `${global.db.data.users[who].limit} Limit Left=͟͟͞͞💫 `

await conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: null, sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
export default handler