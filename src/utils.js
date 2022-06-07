// import inquirer
const fs = require("fs");

const writeToFile = (filePath, data) => {
	// write html to file
	fs.writeFileSync(filePath, data);
};

module.exports = { writeToFile };

