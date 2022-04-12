module.exports.config = {
    name: "checktt",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Kiểm tra lượt tương tác trong nhóm",
    commandCategory: "system",
    usages: "[all/tag]",
    cooldowns: 5,
    envConfig: {
        "maxColumn": 10
    }
};

module.exports.run = async function ({ args, api, event, Currencies }) {
    const { threadID, senderID, messageID, type, mentions } = event;
    var mention = Object.keys(event.mentions);
    const data = await api.getThreadInfo(event.threadID);
    if (args[0] == "all") {
        var number = 0, msg = "", storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
        });
        for (const lastData of exp) {
            number++;
            msg += `${number}. ${lastData.name} với ${lastData.exp} tin nhắn \n`;
        }
        return api.sendMessage(msg, event.threadID);
    }
      else 
        if(type == "message_reply") { mention[0] = event.messageReply.senderID }
        if (mention[0]) {
          var storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});

        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
            if (a.id > b.id) return 1;
            if (a.id < b.id) return -1;
        });
        const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(mention[0])) + 1;
        const infoUser = exp[rank - 1];
        var xephang = infoUser.exp < 100 ? "tt kém nên ko có rank" : infoUser.exp > 100 && infoUser.exp < 1000 ? "Đồng" : infoUser.exp > 1000 && infoUser.exp < 3000 ? "Bạc" : infoUser.exp > 3000 && infoUser.exp < 6000 ? "Vàng" : infoUser.exp > 6000 && infoUser.exp < 8000 ? "Kim cương" : infoUser.exp > 8000 && infoUser.exp < 99999 ? "Thách Đấu" : "Quá ghê gớm";
        return api.sendMessage(`👤 Tên: ${infoUser.name}\n👥 Bạn đang đứng hạng: ${rank}\n📝 Số tn là: ${infoUser.exp}\n👑 Rank: ${xephang}`, event.threadID);
    }
    else if (mention[0]) {
        var storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});

        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
            if (a.id > b.id) return 1;
            if (a.id < b.id) return -1;
        });
        const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(mention[0])) + 1;
        const infoUser = exp[rank - 1];
        var xephang = infoUser.exp < 100 ? "tt kém nên ko có rank" : infoUser.exp > 100 && infoUser.exp < 1000 ? "Đồng" : infoUser.exp > 1000 && infoUser.exp < 3000 ? "Bạc" : infoUser.exp > 3000 && infoUser.exp < 6000 ? "Vàng" : infoUser.exp > 6000 && infoUser.exp < 8000 ? "Kim cương" : infoUser.exp > 8000 && infoUser.exp < 9999999999999999999999 ? "Thách Đấu" : "Quá ghê gớm";
        return api.sendMessage(`👤 Tên: ${infoUser.name}\n👥 Bạn đang đứng hạng: ${rank}\n📝 Số tn là: ${infoUser.exp}\n👑 Rank: ${xephang}`, event.threadID);
    }
    else {
        var storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
            if (a.id > b.id) return 1;
            if (a.id < b.id) return -1;
        });
        const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;
        const infoUser = exp[rank - 1];
var xephang = infoUser.exp < 100 ? "tt kém nên ko có rank" : infoUser.exp > 100 && infoUser.exp < 1000 ? "Đồng" : infoUser.exp > 1000 && infoUser.exp < 3000 ? "Bạc" : infoUser.exp > 3000 && infoUser.exp < 6000 ? "Vàng" : infoUser.exp > 6000 && infoUser.exp < 8000 ? "Kim cương" : infoUser.exp > 8000 && infoUser.exp < 9999999999999999999999 ? "Thách Đấu" : "Quá ghê gớm";
        return api.sendMessage(`👤 Bạn đang đứng hạng: ${rank}\n📝 Số tn là: ${infoUser.exp}\n👑 Rank: ${xephang}`, event.threadID);
    }
    }