module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hung",
  description: "Kiá»m tra thÃ´ng tin admin bot.",
  commandCategory: "ThÃ´ng tin adminbot",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
    "https://tinyurl.com/y9nw467t",
    "https://tinyurl.com/yubnupys",
    "https://tinyurl.com/mr3zde7y",
    "https://tinyurl.com/2uevwmu3",
  ];
  var callback = () => api.sendMessage({body:`\nÛð§ðµð¼Ìð»ð´ ðð¶ð» ð®ð±ðºð¶ð»Û\nðð¡ð®ðºð²ð: ðð ð¨Ì£ð ðð¡ð¢\nððð´ð²ðð:ð­ð²\nð¯ððð»ð´ð¯: ððÌð¨ ðð¢Ìð§ð¡\nð¤·ð§ð¶Ìð»ðµ ð°ð®Ìð°ðµð¤·: ðð®ð¢ ð¯ðÌ ð¡ð¨Ìð Äð¨ÌÌð§ð . \nð¤ððµð¶ð²ÌÌð ð°ð®ð¼ð¤: m58\nð°ðð®Ìð» ð»ð®Ì£Ìð»ð´ð°: 45kg\nð§ð¦ð¶ð»ðµ ð¡ðµð®Ì£Ìðð§: ð­ð°/ð®/ð®ð¬ð¬ð²\nððððð ððððððððð:https://www.facebook.com/Ebengocnhiii\n`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
