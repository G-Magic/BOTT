/**
 * @author datoccho
 * @you can edit creditss freely it's your right as long as you are not human if you are human don't change creditss
 */
module.exports.config = {
    name: `chanle`,
    version: `1.0.2`,
    hasPermssion: 0,
    creditss: `datoccho + Tòn `,
    description: `a`,
    commandCategory: `a`,
    usages: `a`,
    cooldowns: 5
};
function isEven(n) {
    return n % 2 == 0;
}
function isOdd(n) {
    if (isEven(n)) {
        return false;
    } else {
        return true;
    }
}
module.exports.run = async ({ api, event, args, Currencies }) => {
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const { createReadStream } = require(`fs-extra`);
    const { threadID, messageID, senderID } = event;
    const axios = global.nodemodule[`axios`];
    const fs = global.nodemodule[`fs-extra`];
    const data = (await Currencies.getData(senderID)).data || {};
    const getRandomIntInclusive = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var le = [`1`,`3`,`5`,`7`,`9`];
    var chan = [`2`,`4`,`6`,`8`,`10`];
    const sole = le[Math.floor(Math.random() * le.length)]
    const sochan = chan[Math.floor(Math.random() * chan.length)]
    var taixiucac = [`${sochan}`,`${sole}`];
    const rdm = taixiucac[Math.floor(Math.random() * taixiucac.length)]
    var answer;
    const money = (await getData(senderID)).money;
    var moneyBet = parseInt(args[1]);
    var thang = moneyBet * 2;
    const tax = thang * 5 / 100;
    const tong = thang - tax;
    switch(isOdd(parseInt(rdm))) {
                case true: answer = "lẻ";
                    break;
                case false: answer = "chẵn";
                    break;
                default: return api.sendMessage("Lỗi !",event.threadID);
            }
            if (!args[0]) return api.sendMessage(" Bấm /chanle [Chẵn/Lẻ] [ Số Tiền ]",event.threadID);
     var option;
          switch (args[0].toLowerCase()) {
                case "chẵn": option = "chẵn";
                    break;
                case "lẻ": option = "lẻ";
                    break;
                default: return api.sendMessage("Bấm /chanle + [Chẵn/Lẻ] + [ Số Tiền ]",event.threadID);    
            }
    if (isNaN(moneyBet) || moneyBet < 50)
        return api.sendMessage('Số tiền đặt cược dưới 50 đô', threadID, messageID);
    if (moneyBet > money)
        return api.sendMessage('Số dư của bạn không đủ.', threadID, messageID);
            try {
        if (answer == option) {
            var resault = parseInt(args[1]) * 2;
            await Currencies.increaseMoney(event.senderID, resault);
                return api.sendMessage("Kết Quả Là: " + rdm + " -> " + answer.toUpperCase() + `\nBạn chọn: ${args[0].toLocaleLowerCase()} Bạn thắng` + "\nSố Tiền Bạn Nhận Được Là: " + resault + `\nBạn thắng và nhận được ${thang}$\nVà trừ đi thuế 5% của ${thang} là ${tax}\nSau khi trừ thuê số tiền bạn nhận được là ${tong}\nSố tiền trong ví của bạn là: ${money + tong}$`,
                 threadID, () => Currencies.increaseMoney(senderID, tong), messageID);
            } else {
            await Currencies.decreaseMoney(event.senderID, parseInt(args[1]));
                return api.sendMessage("Bạn Đã Thua Với Kết Quả Là : " + rdm + " -> " + answer.toUpperCase() + `\nBạn chọn: ${args[0].toLocaleLowerCase()} Bạn thua` + "\nSố Tiền Bạn Mất Là: " + parseInt(args[1]) + `\nSố tiền trong ví của bạn là: ${money - moneyBet}$`, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
            } 
            }
    catch (e) {
        console.log(e);
    }
};