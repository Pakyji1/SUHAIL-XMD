const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "393802347902";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_55_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMixcbiAgICAgICAgMTYzLFxuICAgICAgICA5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyLFxuICAgICAgICA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgzLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDUzLFxuICAgICAgICA0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUwLFxuICAgICAgICA0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkxLFxuICAgICAgICA0MixcbiAgICAgICAgODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODksXG4gICAgICAgIDE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWDhUbndIV2k3T1FTTjgvb0gvQ2dwQThpWWVZSGphdG5IcGU2VElMQTF4QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIzOTM4MDIzNDc5MDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY0NDI2RkYwRDZFMjJDNjExNDk3M0NFMUFEODg2MEJGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjM3NzMxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjM5MzgwMjM0NzkwMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkJBMkM4OTZCMzQzODA0NzlBRjNEQzgyMEQxQ0Y1OEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMzc3MzE0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5xTWh5NDc3UlVlZ0NBOGZObXh5bkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjIyYzI1MmUtZWJkMS00NTU3LWEzNDgtMzg3OGE5ZjM2NDhlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDIwNSxcbiAgICAgIDE2NCxcbiAgICAgIDE0OCxcbiAgICAgIDcwLFxuICAgICAgNSxcbiAgICAgIDE4OSxcbiAgICAgIDcsXG4gICAgICAxOSxcbiAgICAgIDY2LFxuICAgICAgMTcxLFxuICAgICAgMjQxLFxuICAgICAgNzAsXG4gICAgICAyMSxcbiAgICAgIDMwLFxuICAgICAgMTkyLFxuICAgICAgMjM1LFxuICAgICAgMjEyLFxuICAgICAgMjQ1LFxuICAgICAgMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICAyMjksXG4gICAgICAyMDAsXG4gICAgICAyNDUsXG4gICAgICAxMDcsXG4gICAgICAxNDAsXG4gICAgICA1MixcbiAgICAgIDI0NSxcbiAgICAgIDIyNyxcbiAgICAgIDE3NSxcbiAgICAgIDE4NSxcbiAgICAgIDI0MyxcbiAgICAgIDEwNyxcbiAgICAgIDY0LFxuICAgICAgNTYsXG4gICAgICAyNDAsXG4gICAgICAxMTYsXG4gICAgICAyNDgsXG4gICAgICAzOCxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzV0FEMTNKTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMzkzODAyMzQ3OTAyOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzEwMDg1ODU2MzM5NjE6MzhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4aW06qqK4aWF4aWKz4Hqqrvhp4Hqq53hpYrhppPqqrtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQemR2YmdCRU5uMWg3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdmVUN0T09ESXc2anpNR2tJRk5SOU5RUEZJS3VNcVhEaE5KUEl2UHBIZ3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUVZPdy92aml0bmcyVnFvSGdKejcyRVdES2NMSXNYMG5MMDlVWnI2RzJZSk9tenVYaE9mbnRmZG9CZzE1cFUydVc5MlVnZU1COTMzaCt6UTE1eFBEQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZldKMXJxbmgyZWlGTVJGSnRwanE3UEkyTmR1UW1qdTZ4NmduMkJuVktlQlFtelhmVGk0V1h2eXMvK0VCUExpMlFjeTFKTy9kZXkwemlWUCtuZmhtRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMzkzODAyMzQ3OTAyOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjM3NzMwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxwbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHBsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWHJJTzI0eDFQaW1Fd2dPMzB0dXR3RWYrWkRxaUpNYW0yVkpYdEtjZ1Fzaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODY4ODc0MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjM3NzMxMzkxOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
