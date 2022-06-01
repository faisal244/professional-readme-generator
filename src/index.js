// import inquirer and fs

const inquirer = require("inquirer");

// import functions from utils file
const utils = require("./utils");

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
		name: "contributions",
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

const generateReadme = (answers) => {
	return `# ${answers.projectTitle} ![MIT](https://img.shields.io/badge/MIT-License-green)

    ## Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Description

    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    ## Installation

    Please follow the instructions below:

    \`\`\`
    npm install
    \`\`\`

    ## Usage

    Please follow the instructions below:

    \`\`\`
    npm run start
    \`\`\`

    ## License

    MIT License

    ## Contributing

    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

    ## Tests

    Please follow the instructions below:

    \`\`\`
    npm run test
    \`\`\`

    ## Questions

    Please contact me on my email: myemail@email.com

    Visit my GitHub profile [here](https://github.com/surajverma2587)
    `;
};

// 3. declare your init function to ask questions
const init = async () => {
	// get answers for first set of questions
	const answers = await inquirer.prompt(questions);

	// display answers
	console.log(answers);

	// generate the README

	const readme = generateReadme(answers);
	console.log(readme);

	// write the file
	utils.writeToFile("./foo.md", readme);
};

// 4. start your application
init();
