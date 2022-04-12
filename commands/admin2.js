module.exports.config = {
  name: "admin",
  version: "1.1.1",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Quản lý admin bot",
  commandCategory: "config",
  usages: "[list/add/remove/only/boxonly/onlybox/qtvonly/onlyqtv,ibrieng,dangky,spadm,rmspadm,addspadm] [userID/reply]",
  cooldowns: 0,
  dependencies: {
    "fs-extra": ""
  }
};

module.exports.languages = {
  "vi": {
    "listAdmin": '[Admin] Danh sách toàn bộ người điều hành bot: \n\n%1\n[SUPERADMIN]:%2\n',
    "notHavePermssion": '[Admin] Bạn không đủ quyền hạn để có thể sử dụng chức năng "%1"',
    "addedNewAdmin": '[Admin] Đã thêm %1 người dùng trở thành người điều hành bot:\n\n%2',
    "addedNewSPAdmin": '[SUPER Admin] Đã thêm %1 người dùng trở thành SUPER ADMIN:\n\n%2',
    "removedAdmin": '[Admin] Đã gỡ bỏ %1 người điều hành bot:\n\n%2',
    "removedSPAdmin": '[SPADMIN Admin] Đã gỡ bỏ %1 SUPERADMIN:\n\n%2'
  },
  "en": {
    "listAdmin": '[Admin] Admin list: \n\n%1',
    "notHavePermssion": '[Admin] You have no permission to use "%1"',
    "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
    "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
  }
}

module.exports.run = async function({ api, event, args, Users, permssion, getText }) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions, messageReply } = event;
  const { configPath } = global.client;
  const { ADMINBOT, SUPERADMIN } = global.config;
  const { userName } = global.data;
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);

  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);

  switch (args[0]) {
    case "list":
    case "all":
    case "-a": {
      const listAdmin = ADMINBOT || config.ADMINBOT || [];
      var msg = [];
const axtyn = SUPERADMIN || config.SUPERADMIN || [];
      for (const idAdmin of listAdmin) {
        if (parseInt(idAdmin)) {
          const name = (await Users.getData(idAdmin)).name
          msg.push(`- ${name}\nLINK: https://facebook.com/${idAdmin}`);
        }
      }
for (const araxt of axtyn) {
      if (parseInt(araxt)) {
                    const name = (await Users.getData(araxt)).name
                    msg.push(`\n[𝗦𝗨𝗣𝗘𝗥 𝗔𝗗𝗠𝗜𝗡] - ${name}\n𝗟𝗜𝗡𝗞: https://facebook.com/${araxt}\n`);
                }
            }
            return api.sendMessage(`[𝗔𝗱𝗺𝗶𝗻] 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗻𝗴𝘂̛𝗼̛̀𝗶 đ𝗶𝗲̂̀𝘂 𝗵𝗮̀𝗻𝗵 𝗯𝗼𝘁 : \n\n${msg.join("\n")}`, threadID, messageID);
      
        }

    case "add": {
      if (permssion < 1) return api.sendMessage("𝗟𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗱𝗮̀𝗻𝗵 𝗰𝗵𝗼 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 🐧", threadID, messageID);
      if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
      if (mention.length != 0 && isNaN(content[0])) {
        var listAdd = [];

        for (const id of mention) {
          ADMINBOT.push(id);
          config.ADMINBOT.push(id);
          listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
        };

        writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
        return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
      }
      else if (content.length != 0 && !isNaN(content[0])) {
        ADMINBOT.push(content[0]);
        config.ADMINBOT.push(content[0]);
        const name = (await Users.getData(content[0])).name
        writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
        return api.sendMessage(getText("addedNewAdmin", 1, `[ 𝗔𝗱𝗺𝗶𝗻 ] \n» ${name}`), threadID, messageID);
      }
      else return global.utils.throwError(this.config.name, threadID, messageID);
      }
    case "addspadm": {
             if (permssion !== 3) return api.sendMessage('𝗟𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗱𝗮̀𝗻𝗵 𝗰𝗵𝗼 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 🐧', threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    SUPERADMIN.push(id);
                    config.SUPERADMIN.push(id);
                    listAdd.push(`[ ${id} ] \n» ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewSPAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                SUPERADMIN.push(content[0]);
                config.SUPERADMIN.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(`[𝗦𝗨𝗣𝗘𝗥 𝗔𝗗𝗠𝗜𝗡] - ${name}`, threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        
}
    //---> ADMIN ONLY <---//
    case "only": {
      if (permssion < 1) return api.sendMessage("𝗟𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗱𝗮̀𝗻𝗵 𝗰𝗵𝗼 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 🐧", threadID, messageID);
        if (config.adminOnly == false) {
          config.adminOnly = true;
          api.sendMessage("»𝗠𝗢𝗗𝗘 - 𝗕𝗮̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗮𝗱𝗺𝗶𝗻𝗢𝗻𝗹𝘆(𝗰𝗵𝗶̉ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝗺𝗼̛́𝗶 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁)", threadID, messageID);
        } else {
          config.adminOnly = false;
          api.sendMessage("»𝗠𝗢𝗗𝗘 - 𝗧𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗮𝗱𝗺𝗶𝗻𝗢𝗻𝗹𝘆(𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 đ𝗲̂̀𝘂 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁)", threadID, messageID);
        }
          writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
          break;
    }
    case 'SUPERADMIN':
        case 'spadm': {
            if (permssion < 1) return api.sendMessage(" 𝗟𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗱𝗮̀𝗻𝗵 𝗰𝗵𝗼 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 🐧", threadID, messageID);
            if (config.adminOnly == false) {
                config.adminOnly = true;
                api.sendMessage("\n»𝗠𝗢𝗗𝗘 - 𝗕𝗮̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗦𝗨𝗣𝗘𝗥𝗔𝗗𝗠𝗜𝗡 𝗼𝗻𝗹𝘆", threadID, messageID);
            } else {
                config.adminOnly = false;
                api.sendMessage("\n»𝗠𝗢𝗗𝗘 - 𝗧𝗮̆𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗦𝗨𝗣𝗘𝗥𝗔𝗗𝗠𝗜𝗡  𝗼𝗻𝗹𝘆", threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
        case 'ibrieng': {
           if (config.ibrieng == false) {
                config.ibrieng = true;
                api.sendMessage("\n»𝗠𝗢𝗗𝗘 - 𝗕𝗮̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗶𝗯𝗿𝗶𝗲𝗻𝗴", threadID, messageID);
            } else {
                config.ibrieng = false;
                api.sendMessage("\n»𝗠𝗢𝗗𝗘 - 𝗧𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗶𝗯𝗿𝗶𝗲𝗻𝗴", threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
        }
        case 'dangky': {
           if (config.dangky == false) {
                config.dangky = true;
                api.sendMessage("\n»𝗠𝗢𝗗𝗘 - 𝗕𝗮̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗱𝗮𝗻𝗴𝗸𝘆", threadID, messageID);
            } else {
                config.dangky = false;
                api.sendMessage("\n»𝗠𝗢𝗗𝗘 - 𝗧𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗱𝗮𝗻𝗴𝗸𝘆", threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
        }
    //---> ADMIN BOX ONLY <---//
    case "boxonly":
    case "onlybox":
    case "onlyqtv":
    case "qtvonly": {
      if (permssion < 1) return api.sendMessage("𝗟𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗱𝗮̀𝗻𝗵 𝗰𝗵𝗼 𝗾𝘁𝘃 𝗯𝗼𝘅 𝘃𝗮̀ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁🐧", threadID, messageID);
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("»𝗠𝗢𝗗𝗘 - 𝗧𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗮𝗱𝗺𝗶𝗻𝗯𝗼𝘅𝗢𝗻𝗹𝘆(𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 đ𝗲̂̀𝘂 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁)", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("»𝗠𝗢𝗗𝗘 - 𝗕𝗮̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗮𝗱𝗺𝗶𝗻𝗯𝗼𝘅𝗢𝗻𝗹𝘆(𝗰𝗵𝗶̉ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘅 𝗺𝗼̛́𝗶 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁)", threadID, messageID);
        }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
    }

    case "remove":
    case "rm":
    case "delete": {
      if (permssion != 2) return api.sendMessage("𝗟𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗱𝗮̀𝗻𝗵 𝗰𝗵𝗼 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 🐧", threadID, messageID);
      if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
      if (mentions.length != 0 && isNaN(content[0])) {
        const mention = Object.keys(mentions);
        var listAdd = [];

        for (const id of mention) {
          const index = config.ADMINBOT.findIndex(item => item == id);
          ADMINBOT.splice(index, 1);
          config.ADMINBOT.splice(index, 1);
          listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
        };

        writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
        return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
      }
      else if (content.length != 0 && !isNaN(content[0])) {
        const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
        ADMINBOT.splice(index, 1);
        config.ADMINBOT.splice(index, 1);
        const name = (await Users.getData(content[0])).name
        writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
        return api.sendMessage(getText("removedAdmin", 1, `[ ${content[0]} ] » ${name}`), threadID, messageID);
      }
      else global.utils.throwError(this.config.name, threadID, messageID);
    }
    case "delspadmin":
        case "delspadm":
        case "rmspadm":{
            if (permssion !== 3) return api.sendMessage("𝗟𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗱𝗮̀𝗻𝗵 𝗰𝗵𝗼 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 🐧", threadID, messageID);
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.SUPERADMIN.findIndex(item => item == id);
                    SUPERADMIN.splice(index, 1);
                    config.SUPERADMIN.splice(index, 1);
                    listAdd.push(`[ ${id} ] \n» ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.SUPERADMIN.findIndex(item => item.toString() == content[0]);
                SUPERADMIN.splice(index, 1);
                config. SUPERADMIN.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedSPAdmin", 1, `[ ${content[0]} ] \n» ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }
    default: {
      return api.sendMessage(`"𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴: \n» ${global.config.PREFIX}𝗮𝗱𝗺𝗶𝗻 𝗹𝗶𝘀𝘁 -> 𝘅𝗲𝗺 𝗹𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻\n» ${global.config.PREFIX}𝗮𝗱𝗺𝗶𝗻 𝗮𝗱𝗱 -> 𝘁𝗵𝗲̂𝗺 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁\n» ${global.config.PREFIX}𝗮𝗱𝗺𝗶𝗻 𝗿𝗲𝗺𝗼𝘃𝗲 -> 𝗴𝗼̛̃ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁\n» ${global.config.PREFIX}𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘅𝗼𝗻𝗹𝘆 -> 𝗯𝗮̣̂𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗰𝗵𝗶̉ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘅 𝗺𝗼̛́𝗶 đ𝘂̛𝗼̛̣𝗰 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁\n» ${global.config.PREFIX}𝗮𝗱𝗺𝗶𝗻 𝗼𝗻𝗹𝘆 -> 𝗯𝗮̣̂𝘁 𝗰𝗵𝗲̂̉ đ𝗼̣̂ 𝗰𝗵𝗶̉ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝗺𝗼̛́𝗶 đ𝘂̛𝗼̛̣𝗰 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁\n» ${global.config.PREFIX}𝗮𝗱𝗺𝗶𝗻 𝘀𝗽𝗮𝗱𝗺 -> 𝗰𝗵𝗶̉ 𝘀𝘂́𝗽 𝗽𝗼̛ 𝗮𝗶 đ𝗼̂̀ đ𝗰 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁 \n» ${global.config.PREFIX}𝗮𝗱𝗺𝗶𝗻 𝗶𝗯𝗿𝗶𝗲𝗻𝗴: 𝗞𝗵𝗼̂𝗻𝗴 𝗔𝗶 Đ𝘂̛𝗼̛̣𝗰 𝗶𝗯 𝗿𝗶𝗲̂𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁\n» HDSD: ${global.config.PREFIX}𝗮𝗱𝗺𝗶𝗻 <case>"`, threadID, messageID)
      return global.utils.throwError(this.config.name, threadID, messageID);
    }
  };
}