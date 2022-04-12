module.exports.config = {
    name: "daily",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Tòn",//nhấc từ đâu đó muahahaha
    description: "a",
    commandCategory: "a",
    usages: "a",
    cooldowns: 5 ,
    envConfig: {
      rewardDay1: {
        coin: 100
      }
    },
};
module.exports.run = async ({ api, event, args, Currencies, Users, Threads }) => {
  const reward = global.configModule[this.config.name].rewardDay1;
  const moment = require("moment-timezone");
  if (args[0] == "info") {
  const rewardAll = global.configModule[this.config.name];
  let msg = "";
  let i = 1;
  for (let i = 1; i < 8; i++) {
  const getCoin = Math.floor(reward.coin * (1 + 20 / 100) ** ((i == 0 ? 7 : i) - 1));
  msg += `${i == 7 ? "Chủ Nhật" : "Thứ " + (i + 1)}: ${getCoin} coin\n`}
  return api.sendMessage(`${msg}`, event.threadID , event.messageID)
  };
  const dateTime = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
  const date = new Date();
  let current_day = date.getDay(); // Lấy số thứ tự của ngày hiện tại
  const money = (await Currencies.getData(event.senderID)).money;
  const { senderID } = event;
  const userData = await Users.getData(senderID);
  const data = userData.data;
  if (!data.lastTimeGetReward) {
  data.lastTimeGetReward = null;
  await Users.setData(senderID, { data: data })
  }
  if (data.lastTimeGetReward === dateTime) return api.sendMessage("Bạn đã nhận phần quà báo danh của ngày hôm nay rồi, vui lòng quay lại vào ngày mai", event.threadID , event.messageID)
  const getCoin = Math.floor(reward.coin * (1 + 20 / 100) ** ((current_day == 0 ? 7 : current_day) - 1));
  data.lastTimeGetReward = dateTime
  await Users.setData(event.senderID, { data: data }, (err, data) => {
  if (err) return api.sendMessage(`Đã xảy ra lỗi`, event.threadID);
  api.sendMessage(`Bạn đã nhận được ${getCoin} coin`, event.threadID, event.messageID     ,ạmaasyncaasy      awaitCurrenciesincreaseMoneyeventsenderID, parseInt(ggetCoinẹetCoin);
  });
  }