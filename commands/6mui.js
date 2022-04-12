module.exports.config = {
  name: "6mui",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ndgb aka ʚBinɞ",
  description: "Ảnh 6 múi",
  commandCategory: "Hình Ảnh",
  usages: "6mui",
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
"https://i.imgur.com/UxVlVEN.jpg",
"https://i.imgur.com/XlzA7PN.jpg",
"https://i.imgur.com/OQcPgDI.jpg",
"https://i.imgur.com/HUx0gLW.jpg",
"https://i.imgur.com/uu0zlbO.jpg",
"https://i.imgur.com/htOJGF1.jpg",
"https://i.imgur.com/vUTbmqv.jpg",
" https://i.imgur.com/AeUB1wm.jpg",
"https://i.imgur.com/HF26k5L.jpg",
"https://i.imgur.com/egBfzfz.jpg",
"https://i.imgur.com/pS4pQrC.jpg",
"https://i.imgur.com/eA8xcqK.jpg",
"https://i.imgur.com/dLA3uft.jpg",
"https://i.imgur.com/s8t4tLM.jpg",
"https://i.imgur.com/ZjNFPVp.jpg",
"https://i.imgur.com/FYp2YCO.jpg",
"https://i.imgur.com/GYASkzJ.jpg",
"https://i.imgur.com/K4x322h.jpg",
"https://i.imgur.com/dHHPBCX.jpg",
"https://i.imgur.com/lIK53nm.jpg",
"https://i.imgur.com/oAsDgyj.jpg",
"https://i.imgur.com/RKAN3b8.jpg",
"https://i.imgur.com/TvOuFw7.jpg",
  ];
   var callback = () => api.sendMessage({body:`Khoái lắm cơ\nSố ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/23.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/23.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/23.jpg")).on("close",() => callback());
   };
