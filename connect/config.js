/**
 - Create By ZackMans Official
 - Contact Me on https://wa.me/+6281385062956
 - Follow iG : @salman_alfarizi_15
*/

const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = fs.readFileSync("./worker/media/image/thumb.jpg")
global.log0 = fs.readFileSync("./worker/media/image/thumb.jpg")
global.err4r = fs.readFileSync("./worker/media/image/thumb.jpg")
global.owner = ['6282274499424']
global.rkyt = []
global.banUser = ['@s.whatsapp.net']
global.ntilink = ['']
global.wlcm = ['']
global.gcrevoke = ['']
global.packname = "Rain Cowokkullな"
global.packname2 = "Rain Cowokkullな"
global.author = "Rain Cowokkullな"
global.sessionName = "Rain Cowokkullな"
global.linkgrupss = "https://chat.whatsapp.com/CzzfuhlZwTSL0gAytxMcXp"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    linkm: 'Linknya Mana Kak?',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner'
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})