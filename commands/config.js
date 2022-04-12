module.exports.config = {
	name: "config",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Tòn",
	description: "config bot!",
	commandCategory: "admin",
	cooldowns: 5
};

module.exports.languages = {
  "vi": {},
  "en": {}
};
module.exports.handleReply = async function({ api, event, handleReply , Users , Threads}) {
  const botID = api.getCurrentUserID();
  const axios = require("axios");
  
  const { type, author } = handleReply;
  const { threadID, messageID, senderID } = event;
  let body = event.body || "";
  if (author != senderID) return;
  
  const args = body.split(" ");
  
  const reply = function(msg, callback) {
    if (callback) api.sendMessage(msg, threadID, callback, messageID);
    else api.sendMessage(msg, threadID, messageID);
  };
  
  if (type == 'menu') {
if (["01", "1"].includes(args[0])) {
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = threadSetting.PREFIX || global.config.PREFIX;
      return reply(`Dấu lệnh của bot là: [ ${prefix} ]`);
    }
else if (["2", "02"].includes(args[0])) {
const botname = global.config.BOTNAME;
      return reply(`Tên Bot : ${botname}`);
    }
else if (["3", "03"].includes(args[0])) {
const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
const { userName } = global.data;
  var listAdmin = global.config.ADMINBOT;
  var msgAd = [];
  let count = 0;
  for (const idAdmin of listAdmin) {
  if (parseInt(idAdmin)) {
  count++;
  var fullName = global.data.userName.get(idAdmin);
  const name = (await Users.getData(idAdmin)).name
   msgAd.push(`[ ${count} ] - ${name}\n> ${idAdmin}`);
    }
  }
   const res = await axios.get('https://apixin-1.toannguyen73.repl.co/animenam');
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
	let callback = function () {
       reply({ body: `------- • [ ADMIN ] • -------\n${msgAd.join("\n")}`,
						attachment: fs.createReadStream(__dirname + `/cache/animenam.${ext}`)
					}, () => fs.unlinkSync(__dirname + `/cache/animenam.${ext}`));
				};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/animenam.${ext}`)).on("close", callback);	
    }
else if (["4", "04"].includes(args[0])) {
const { threadID, messageID } = event;
const cheerio = global.nodemodule["cheerio"];
      return reply(`Đang khởi động lại...⟲` , () => process.exit(1))
    }
else if (["5", "05"].includes(args[0])) {
const ngonngu = global.config.language;
var muahaha = ngonngu == "vi" ? "Tiếng việt" : ngonngu == "en" ? "Tiếng anh" : "aaaa";
      return reply(`Ngôn ngữ là : ${muahaha}`)
    }
else if (["6", "06"].includes(args[0])) {
var listBanned = [], listbanViews = [];
  i = 1, j = 1;
const userBanned = global.data.userBanned.keys();
        //console.log(userBanned)
var modules = "UserBan: "
for (const singleUser of userBanned) {
const name = global.data.userName.get(singleUser) || await Users.getNameUser(singleUser);
const reason = await global.data.userBanned.get(singleUser).reason;
          listbanViews.push(`${i++}. ${name} \n🔰UID: ${singleUser}\n🤷‍♀️Lý do: ${reason}`);
        }
      return reply(`${listbanViews.join("\n")}`)
    }
else if (["7", "07"].includes(args[0])) {
      return reply(`reply tin nhắn này và nhập emoji mà bạn muốn đổi.`, (err, info) => {
        global.client.handleReply.push({
          name: this.config.name,
          messageID: info.messageID,
          author: senderID,
          type: "doiemoji"
        });
      });
    }
else if (["8", "08"].includes(args[0])) {
      return reply(`reply tin nhắn này và nhập tên box mà bạn muốn đổi.`, (err, info) => {
        global.client.handleReply.push({
          name: this.config.name,
          messageID: info.messageID,
          author: senderID,
          type: "doitenbox"
        });
      });
    }
else if (["9", "09"].includes(args[0])) {
const { threadID, messageID } = event;
  const threadInfo = await api.getThreadInfo(threadID);
  await Threads.setData(threadID, { name: threadInfo.name, threadInfo });
  global.data.threadInfo.set(threadID, threadInfo);
      return reply(`Đã làm mới thông tin nhóm thành công.`)
        }
else if (["10"].includes(args[0])) {
delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
      return reply(`Đã làm mới config.json thành công.`)
        }
else if (["11"].includes(args[0])) {
var listBanned = [], listbanViews = [];
  i = 1, j = 1;
  var dataThread = [];
   const threadBanned = global.data.threadBanned.keys();
        //console.log(threadBanned)
        for (const singleThread of threadBanned) {
          const nameT = await global.data.threadInfo.get(singleThread).threadName || "Tên không tồn tại";
          const reason = await global.data.threadBanned.get(singleThread).reason;
          const date = await global.data.threadBanned.get(singleThread).dateAdded;
          //const data = (await api.getThreadInfo(singleThread));
          //const nameT = data.name;
          var modules = "ThreadBan: "
          //console.log(modules, nameT)
          listBanned.push(`${i++}. ${nameT}\n🔰TID: ${singleThread}`);
          
          listbanViews.push(`${j++}. ${nameT}\n🔰TID: ${singleThread}\n🤷‍♀️Lý do: ${reason}\n_Time: ${date}`);
        }
      return reply(`${listbanViews.join("\n")}`);
}
else if (["12"].includes(args[0])) {
  let threadInfo = await api.getThreadInfo(event.threadID);
  const request = require('request');
	const fs = require("fs");
      var callback = () =>
       reply({ body: `${event.threadID}`,
						attachment: fs.createReadStream(__dirname + '/cache/1.png')
					},
					() => fs.unlinkSync(__dirname + '/cache/1.png')
				);
			return request(encodeURI(`${threadInfo.imageSrc}`))
				.pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
				.on('close', () => callback());
	    }
else if (["13"].includes(args[0])) {
const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  const botname = global.config.BOTNAME;
  const res = await axios.get('https://apixin-1.toannguyen73.repl.co/umaru');
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
	let callback = function () {
       reply({ body: `${botname} đã hoạt động được ${hours} giờ ${minutes} phút ${seconds} giây.`,
						attachment: fs.createReadStream(__dirname + `/cache/config.${ext}`)
					}, () => fs.unlinkSync(__dirname + `/cache/config.${ext}`));
				};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/config.${ext}`)).on("close", callback);	
    }
else if (["14"].includes(args[0])) {
const moment = require("moment-timezone");
const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
var buoi = hours <= 10 ? "Buổi Sáng" : 
    hours > 10 && hours <= 12 ? "Buổi Trưa" :
    hours > 12 && hours <= 18 ? "Buổi Chiều" : "Buổi Tối";
var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
      api.sendMessage(`chúc các bạn ${buoi} vv`, idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	return api.sendMessage(`Đã gửi tn cho ${count} box`, event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(`ko thể gửi tới ${cantSend.length} box`, event.threadID, event.messageID) : "", event.messageID);
}
  }
 else if (type == 'doiemoji') {
    const name = body.toLowerCase();
    api.changeThreadEmoji(name, event.threadID);
  }
else if (type == 'doitenbox') {
   var content = body.toLowerCase();
   var c = content.slice(7, 99) || event.body;
    api.setTitle(c, event.threadID);
  }
}
module.exports.run = async ({ event, api , Users }) => {
const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
  const reply = function(msg, callback) {
    if (callback) api.sendMessage(msg, threadID, callback, messageID);
    else api.sendMessage(msg, threadID, messageID);
  };
const { threadID, messageID, senderID } = event;
  var msg = {
    body: "----- • [ ☭ Thông Tin ☭ ] • -----"
          + "\n» [ 1 ] : Prefix."
          + "\n» [ 2 ] : Tên Bot."
          + "\n» [ 3 ] : Admin Bot."
          + "\n» [ 4 ] : Khởi động lại."
          + "\n» [ 5 ] : Ngôn ngữ."
          + "\n» [ 6 ] : Danh sách người dùng bị cấm."
          + "\n» [ 7 ] : Đổi emoji box."
          + "\n» [ 8 ] : Đổi tên box."
          + "\n» [ 9 ] : Làm mới thông tin nhóm."
          + "\n» [ 10 ] : Làm mới config.json."
          + "\n» [ 11 ] : Danh sách nhóm bị cấm."
          + "\n» [ 12 ] : Lấy id của box."             
          + "\n» [ 13 ] : Xem thời gian bot hoạt động."
          + "\n» [ 14 ] : Gửi lời chúc tới tất cả các nhóm."
          + "\n-------------------------------------------"
          + `\n» Bot ID: ${api.getCurrentUserID()}`
          + `\n» Reply + số để chọn.`
          + "\n------ | [ MODE 🍉 ] | ------"
    };
  const res = await axios.get('https://apixin-1.toannguyen73.repl.co/umaru');
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
	//let callback = function () {
  reply(msg, (err, info) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: info.messageID,
      author: senderID,
      type: "menu"
    });
  }, 
       );
};