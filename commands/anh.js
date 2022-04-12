module.exports.config = {
	name: "anh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Tòn",
	description: "Xem ảnh",
	commandCategory: "Ảnh",
	cooldowns: 5
};

module.exports.languages = {
  "vi": {},
  "en": {}
};
module.exports.handleReply = async function({ api, event, handleReply , Users , Threads}) {
  const axios = require("axios");
  const { type, author } = handleReply;
  const { threadID, messageID, senderID } = event;
  if (isNaN(event.body)) return api.sendMessage("Hãy nhập 1 con số",event.threadID,event.messageID);
  let body = event.body || "";
  if (author != senderID) return;
  const args = body.split(" ");
  const reply = function(msg, callback) {
  if (callback) api.sendMessage(msg, threadID, callback, messageID);
  else api.sendMessage(msg, threadID, messageID);
  };
if (type == 'menu') {
if (["01", "1"].includes(args[0])) {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get('https://apixin-1.toannguyen73.repl.co/animenam');
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
let callback = function () {
reply({ body: `Ảnh của bạn đây `, attachment: fs.createReadStream(__dirname + `/cache/animenam1.${ext}`)
}, () => fs.unlinkSync(__dirname + `/cache/animenam1.${ext}`));
};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/animenam1.${ext}`)).on("close", callback);
}
else if (["2", "02"].includes(args[0])) {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get('https://apixin-1.toannguyen73.repl.co/umaru');
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
let callback = function () {
reply({ body: `Ảnh của bạn đây `, attachment: fs.createReadStream(__dirname + `/cache/umaru1.${ext}`)
}, () => fs.unlinkSync(__dirname + `/cache/umaru1.${ext}`));
};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/umaru1.${ext}`)).on("close", callback);
    }
else if (["2", "02"].includes(args[0])) {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get('https://apixin-1.toannguyen73.repl.co/umaru');
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
let callback = function () {
reply({ body: `Ảnh của bạn đây `, attachment: fs.createReadStream(__dirname + `/cache/umaru1.${ext}`)
}, () => fs.unlinkSync(__dirname + `/cache/umaru1.${ext}`));
};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/umaru1.${ext}`)).on("close", callback);
    }
else if (["3", "03"].includes(args[0])) {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get('https://apixin-1.toannguyen73.repl.co/loli');
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
let callback = function () {
reply({ body: `Ảnh của bạn đây `, attachment: fs.createReadStream(__dirname + `/cache/loli.${ext}`)
}, () => fs.unlinkSync(__dirname + `/cache/loli.${ext}`));
};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/loli.${ext}`)).on("close", callback);
    }
else if (["4", "04"].includes(args[0])) {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get('https://apixin-1.toannguyen73.repl.co/mong');
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
let callback = function () {
reply({ body: `Ảnh của bạn đây `, attachment: fs.createReadStream(__dirname + `/cache/mong.${ext}`)
}, () => fs.unlinkSync(__dirname + `/cache/mong.${ext}`));
};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/mong.${ext}`)).on("close", callback);
    }
else if (["5", "05"].includes(args[0])) {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get('https://apixin-1.toannguyen73.repl.co/gai');
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
let callback = function () {
reply({ body: `Ảnh của bạn đây `, attachment: fs.createReadStream(__dirname + `/cache/gai.${ext}`)
}, () => fs.unlinkSync(__dirname + `/cache/gai.${ext}`));
};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/gai.${ext}`)).on("close", callback);
    }
else if (["6", "06"].includes(args[0])) {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get('https://apixin-1.toannguyen73.repl.co/gainga');
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
let callback = function () {
reply({ body: `Ảnh của bạn đây `, attachment: fs.createReadStream(__dirname + `/cache/gainga.${ext}`)
}, () => fs.unlinkSync(__dirname + `/cache/gainga.${ext}`));
};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/gainga.${ext}`)).on("close", callback);
    }
else if (["7", "07"].includes(args[0])) {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get('https://apixin-1.toannguyen73.repl.co/zu');
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
let callback = function () {
reply({ body: `Ảnh của bạn đây `, attachment: fs.createReadStream(__dirname + `/cache/zu.${ext}`)
}, () => fs.unlinkSync(__dirname + `/cache/zu.${ext}`));
};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/zu.${ext}`)).on("close", callback);
    }
else if (["8", "08"].includes(args[0])) {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get('https://apixin-1.toannguyen73.repl.co/nude');
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
let callback = function () {
reply({ body: `Ảnh của bạn đây `, attachment: fs.createReadStream(__dirname + `/cache/nude.${ext}`)
}, () => fs.unlinkSync(__dirname + `/cache/nude.${ext}`));
};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/nude.${ext}`)).on("close", callback);
    }
else if (["9", "09"].includes(args[0])) {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get('https://apixin-1.toannguyen73.repl.co/mirai');
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
let callback = function () {
reply({ body: `Ảnh của bạn đây `, attachment: fs.createReadStream(__dirname + `/cache/mirai.${ext}`)
}, () => fs.unlinkSync(__dirname + `/cache/mirai.${ext}`));
};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/mirai.${ext}`)).on("close", callback);
    }
else if (["10"].includes(args[0])) {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get('https://apixin-1.toannguyen73.repl.co/6mui');
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);""
let callback = function () {
reply({ body: `Ảnh của bạn đây `, attachment: fs.createReadStream(__dirname + `/cache/6mui.${ext}`)
}, () => fs.unlinkSync(__dirname + `/cache/6mui.${ext}`));
};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/6mui.${ext}`)).on("close", callback);
    }
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
    body: "===== • [ ☭ Tất cả Ảnh ☭ ] • ====="
          + "\n» [ 1 ] : Ảnh anime nam."
          + "\n» [ 2 ] : Ảnh umaru."
          + "\n» [ 3 ] : Ảnh loli." 
          + "\n» [ 4 ] : Ảnh mông."
          + "\n» [ 5 ] : Ảnh gái."
          + "\n» [ 6 ] : Ảnh gái nga."
          + "\n» [ 7 ] : Ảnh dú."
          + "\n» [ 8 ] : Ảnh nude 18+ cân nhắc trc khi xem."
          + "\n» [ 9 ] : Ảnh mirai."
          + "\n» [ 10 ] : Ảnh 6 múi."
          + "\n-------------------------------------------"
          + `\n» Reply + số để chọn.`
          + "\n------ | [ MODE 🍉 ] | ------"
    };
  reply(msg, (err, info) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: info.messageID,
      author: senderID,
      type: "menu" });
  },
   );
  };