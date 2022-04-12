module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hung",
  description: "Kiểm tra thông tin admin bot.",
  commandCategory: "Thông tin adminbot",
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
  var callback = () => api.sendMessage({body:`\n۞𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗮𝗱𝗺𝗶𝗻۞\n😍𝗡𝗮𝗺𝗲😍: 𝐍𝐠𝐨̣𝐜 𝐍𝐡𝐢\n🎊𝗔𝗴𝗲𝕚🎊:𝟭𝟲\n🔯𝗖𝘂𝗻𝗴🔯: 𝐁𝐚̉𝐨 𝐁𝐢̀𝐧𝐡\n🤷𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵🤷: 𝐕𝐮𝐢 𝐯𝐞̉ 𝐡𝐨̀𝐚 đ𝐨̂̀𝐧𝐠. \n🤗𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼🤗: m58\n🔰𝗖𝗮̂𝗻 𝗻𝗮̣̆𝗻𝗴🔰: 45kg\n🧐𝗦𝗶𝗻𝗵 𝗡𝗵𝗮̣̂𝘁🧐: 𝟭𝟰/𝟮/𝟮𝟬𝟬𝟲\n🍀𝐋𝐈𝐍𝐊 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊🍀:https://www.facebook.com/Ebengocnhiii\n`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
