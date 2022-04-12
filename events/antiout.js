module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đá";
 if (type == "tự rời") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗲̂𝗺 𝗹𝗮̣𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 ${name} 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 :( `, event.threadID)
   } else api.sendMessage(`𝗧𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗺𝗮𝗻𝗴 𝘁𝗲̂𝗻 ${name} 𝘃𝘂̛̀𝗮 𝗼𝘂𝘁❗ `, event.threadID);
  })
 }
}