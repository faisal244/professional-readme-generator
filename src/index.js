console.log("hello from node");

// 1. import inquirer
const inquirer = require("inquirer");

// 2. declare your questions array
const questions = [
	{
		type: "input",
		name: "projectTitle",
		message: "Please enter is your project title:",
	},
	{
		type: "input",
		name: "description",
		message: "Please enter a description of your project:",
	},
];

// 3. declare your init function to ask questions
const init = async () => {
	// get answers for first set of questions
	const answers = await inquirer.prompt(questions);

	// display answers
	console.log(answers);
};

// 4. start your application
init();
