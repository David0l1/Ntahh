
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://rimurubotz-api.herokuapp.com/api/gura?text=${response[0]}`
  conn.sendButton(m.chat, res, 'gura.png', `Nih Kak`, `Thanks`, `Thanks`, m, false)
}
handler.help = ['logogura'].map(v => v + ' <text>')
handler.tags = ['nulis', 'anime']
handler.command = /^(logogura)$/i
handler.register = true

handler.limit = true

module.exports = handler
