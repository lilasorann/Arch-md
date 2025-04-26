/* 

   Contact: https://wa.me/2347036214381
   Telegram: https://t.me/Ednut_x    
   Developer : https://wa.me/2348102487241
  
*/

require('../config');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const FileType = require('file-type');
const PhoneNumber = require('awesome-phonenumber');
        const isCreator = [ ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const { jidNormalizedUser, proto, getBinaryNodeChildren, getBinaryNodeChild, generateWAMessageContent, generateForwardMessageContent, prepareWAMessageMedia, delay, areJidsSameUser, extractMessageContent, generateMessageID, downloadContentFromMessage, generateWAMessageFromContent, jidDecode, generateWAMessage, toBuffer, getContentType, getDevice } = require('baileys');
const {
    randomBytes
} = require('crypto')

async function LoadDataBase(conn, m) {
	try {
		const botNumber = await conn.decodeJid(conn.user.id);
		const isNumber = x => typeof x === 'number' && !isNaN(x)
		const isBoolean = x => typeof x === 'boolean' && Boolean(x)
		let setBot = global.db.settings
		if (typeof setBot !== 'object') global.db.settings = {}
		if (setBot) {
			if (!('anticall' in setBot)) setBot.anticall = false
			if (!('available' in setBot)) setBot.available = false
			if (!('autoread' in setBot)) setBot.autoread = false
			if (!('autorecording' in setBot)) setBot.autorecording = false
			if (!('autotyping' in setBot)) setBot.autotyping = false
			if (!('unavailable' in setBot)) setBot.unavailable = false
			if (!('readsw' in setBot)) setBot.readsw = false	
			if (!('readsw2' in setBot)) setBot.readsw2 = false	
				if (!('mode' in setBot)) setBot.mode = false	
				if (!('levelup' in setBot)) setBot.levelup = false
								if (!('send' in setBot)) setBot.send = false
		} else {
			global.db.settings = {
				anticall: false,
				autoread: false,
				autorecording: false, 
				autotyping: false,
				available: false,
				unavailable: false,
				readsw: false,
				readsw2: false,
				mode: false,
				levelup: false,
				send: false
			}
		}
		

let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
        


if (user) {
  if (!('banned' in user)) user.banned = false
  if (!('setalive' in user)) user.setalive = ''
  if (!('warn' in user)) user.warn = 0
  if (!('level' in user)) user.level = 0
  if (!('exp' in user)) user.exp = 0
} else {
  global.db.users[m.sender] = {
    banned: false,
    setalive: '',
    warn: 0,
    level: 0,
    exp: 0
  }
}


		if (m.isGroup) {
			let group = global.db.groups[m.chat]
			if (typeof group !== 'object') global.db.groups[m.chat] = {}
			if (group) {
				if (!('antilink' in group)) group.antilink = false
				if (!('antilink2' in group)) group.antilink2 = false
				if (!('antilink3' in group)) group.antilink3 = false
				if (!('welcome' in group)) group.welcome = false
				if (!('goodbye' in group)) group.goodbye = false
						if (!('mute' in group)) group.mute = false
														if (!('open' in group)) group.open = false
															if (!('antitag' in group)) group.antitag = false	
		if (!('banned' in group)) group.banned = false
			} else {
				global.db.groups[m.chat] = {
					antilink: false,
					antilink2: false,
					antilink3: false,
					welcome: false, 
					goodbye: false,
					mute: false,
					open: false,
					antitag: false,
					banned: false
				}
			}
		}
	} catch (e) {
		throw e;
	}
}
		

module.exports = { LoadDataBase }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
