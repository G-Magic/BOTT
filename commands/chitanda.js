module.exports.config = {
  name: "chitanda",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Binee",
  description: "Gif TR",
  commandCategory: "ramdom-images",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apichitanda.toan1511.repl.co/').then(res => {
  let ext = res.data.data.substring
  (res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🌸Số ảnh gif hiện có: ${count} ảnh`,
            attachment: fs.createReadStream(__dirname + `/cache/choo.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/choo.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/choo.${ext}`)).on("close", callback);
      })
}