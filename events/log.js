module.exports.config = {
  name: "log",
  eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
  version: "1.0.0",
  credits: "Mirai Team",
  description: "Ghi lại thông báo các hoạt đông của bot!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "=== 𝗧𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 ===" +
                        "\n\n» 𝗧𝗵𝗿𝗲𝗮𝗱 𝗺𝗮𝗻𝗴 𝗜𝗗: " + event.threadID +
                        "\n» 𝗛𝗮̀𝗻𝗵 đ𝗼̣̂𝗻𝗴: {task}" +
                        "\n» 𝗛𝗮̀𝗻𝗵 đ𝗼̣̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝘁𝗮̣𝗼 𝗯𝗼̛̉𝗶 𝘂𝘀𝗲𝗿𝗜𝗗: " + event.author +
                        "\n» " + Date.now() +" «",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            // const oldName = (await Threads.getData(event.threadID)).name || "Tên không tồn tại",
            //         newName = event.logMessageData.name || "Tên không tồn tại";
            // task = "Người dùng thay đổi tên nhóm từ: '" + oldName + "' thành '" + newName + "'";
            // await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 đ𝗮̃ 𝘁𝗵𝗲̂𝗺 𝗯𝗼𝘁 𝘃𝗮̀𝗼 𝗺𝗼̣̂𝘁 𝗻𝗵𝗼́𝗺 𝗺𝗼̛́𝗶❗";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 đ𝗮̃ 𝗸𝗶𝗰𝗸 𝗯𝗼𝘁 𝗿𝗮 𝗸𝗵𝗼̉𝗶 𝗻𝗵𝗼́𝗺❗"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}