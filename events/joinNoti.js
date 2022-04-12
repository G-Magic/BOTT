module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Binee",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	},
  envConfig: {
		autoUnsend: true,
		timeToUnsend: 10
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinMp4");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinMp4", "hi.mp4");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}
module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`『 ${global.config.PREFIX} 』 • ${(!global.config.BOTNAME) ? "Bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`🔰𝐊𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠🔰\n🐧𝐓𝐞̂𝐧 𝐁𝐨𝐭:${global.config.BOTNAME}.\n🎀𝐃𝐚̂́𝐮 𝐋𝐞̣̂𝐧𝐡:[ ${global.config.PREFIX} ]\n💓𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 ${global.config.PREFIX}𝐦𝐞𝐧𝐮 đ𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗹𝗲̣̂𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗼𝘁.\n≻──── • 🥺 • ────≺`, attachment: fs.createReadStream(__dirname + "/cache/joinMp4/a.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinMp4");
			const pathGif = join(path, `${threadID}.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
		const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id: event.senderID });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);		
		(typeof threadData.customJoin == "undefined") ? msg = "💮𝗖𝗵𝗮̀𝗼 𝗺𝘂̛̀𝗻𝗴💮 {name} \nĐ𝗲̂́𝗻 𝘃𝗼̛́𝗶: {threadName}\n{type} \n𝗟𝗮̀ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘁𝗵𝘂̛́ {soThanhVien} 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺\n𝗖𝗵𝘂́𝗰 𝗰𝗮́𝗰 𝗯𝗮̣𝗻 𝗰𝗼́ 𝗯𝘂𝗼̂̉𝗶 {session} {time} 𝘃𝘂𝗶 𝘃𝗲̉" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝗰𝗮́𝗰 𝗰𝗼𝗻 𝘃𝗼̛̣' : '𝗰𝗼𝗻 𝘃𝗼̛̣')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName)
      .replace(/\{session}/g, time <= 10 ? "𝘀𝗮́𝗻𝗴" : 
    hours > 10 && hours <= 12 ? "𝘁𝗿𝘂̛𝗮" :
    hours > 12 && hours <= 18 ? "𝗰𝗵𝗶𝗲̂̀𝘂" : "𝘁𝗼̂́𝗶")
    .replace(/\{time}/g, time);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinMp4"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinMp4", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}