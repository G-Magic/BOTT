module.exports.config = {
    name: "fbget",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Zera",
    description: "Tải video hoặc ghi âm từ fb",
  commandCategory: "media",
  usages: "fbget audio/video [link]",
  cooldowns: 0
};
module.exports.languages = {
  "vi": {},
  "en": {}
};
module.exports.handleReply = async function  ({ api , event , handleReply , Users , Threads })  {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
const { type, author } = handleReply;
let body = event.body || "";
if (author != event.senderID) return;
const args = body.split(" ");
if (type == 'menu') {
if (["01", "1"].includes(args[0])) {
const path = __dirname+`/cache/2.mp3`;
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(path, Buffer.from(getPorn, "utf-8"));
      return api.sendMessage({ body: `Tải thành công` ,  attachment: fs.createReadStream(path)} , event.threadID, () => fs.unlinkSync(path) , event.messageID);
        }
else if (["2", "02"].includes(args[0])) {
const path1 = __dirname+`/cache/1.mp4`;
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(path1, Buffer.from(getPorn, "utf-8"));
      return api.sendMessage({ body: `Tải thành công` , attachment: fs.createReadStream(path1)}, event.threadID, () => fs.unlinkSync(path1),event.messageID);
}
}
}
module.exports.run = async ({ event, api }) => {
const { threadID, messageID, senderID } = event;
  var msg = {
    body: "----- • [ ☭ Facebook ☭ ] • -----"
          + "\n» [ 1 ] : Audio."
          + "\n» [ 2 ] : Video."
          + `\n» Reply + số để chọn.`
          + "\n------ | [ MODE 🍉 ] | ------"
    };
  api.sendMessage(msg, threadID, (err, info) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: info.messageID,
      author: senderID,
      type: "menu"
    });
  } , messageID);
};
/*try { 
  if(args[0] == 'audio'){
        api.sendMessage(`Đang xử lí yêu cầu!!!`, event.threadID, (err, info) =>
    setTimeout(() => {
        api.unsendMessage(info.messageID) } , 100),event.messageID);
        const path = __dirname+`/cache/2.mp3`;
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(path, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `✅Loaded success✅`, 
    attachment: fs.createReadStream(path)}, event.threadID, () => fs.unlinkSync(path),event.messageID);
    }; 
  }catch {return api.sendMessage(`Không thể xử lý yêu cầu`,event.threadID,event.messageID)}
    try { 
      if(args[0] == 'video'){
            api.sendMessage(`Đang xử lí yêu cầu!!!`, event.threadID, (err, info) =>
    setTimeout(() => {
        api.unsendMessage(info.messageID) } , 100),event.messageID);
            const path1 = __dirname+`/cache/1.mp4`;
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(path1, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `✅Loaded success✅`, 
    attachment: fs.createReadStream(path1)}, event.threadID, () => fs.unlinkSync(path1),event.messageID);
    }; 
  }catch {return api.sendMessage(`Không thể xử lý yêu cầu`,event.threadID,event.messageID)}
      }*/