const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF7F50")('[ WARNING ] → ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000")('[ WARNING ] → ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#FF4500")(`[ ${option} ] → `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF0000")('[ SHIRON ] → ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000")('[ SHIRON ] → ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00FFFF")(`[ SHIRON ] → `) + data);
			break;
	}
}