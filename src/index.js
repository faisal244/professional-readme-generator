console.log("hello from node");

// import inquirer and fs
const fs = require("fs");
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
	{
		type: "input",
		name: "installation",
		message: "Please enter installation instructions for your project:",
	},
	{
		type: "input",
		name: "usage",
		message: "Please enter usage information for your project:",
	},
	{
		type: "list",
		name: "licence",
		message: "Please select a licence",
		choices: ["MIT", "Apache", "GNU", "Creative Commons"],
	},
	{
		type: "input",
		name: "contributors",
		message: "Please enter any contribution guidelines for this project",
	},
	{
		type: "input",
		name: "testing",
		message: "Please provide any relevant testing information",
	},
	{
		type: "input",
		name: "email",
		message: "Please provide your email address so users can contact you",
	},
	{
		type: "input",
		name: "githubProfile",
		message:
			"Please provide a link to your github profile so that users can contact you",
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
