module.exports.config = {
  name: "gai",
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
  axios.get('https://apitiktok.toan1511.repl.co/').then(res => {
  let ext = res.data.data.substring
  (res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🌸Số video hiện có: ${count} video`,
            attachment: fs.createReadStream(__dirname + `/cache/cac.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cac.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/cac.${ext}`)).on("close", callback);
      })
}