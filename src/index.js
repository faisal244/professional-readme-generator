// import inquirer and fs

const inquirer = require("inquirer");

// import functions from utils file
const utils = require("./utils");

// 2. declare your questions array
const questions = [
	{
		type: "input",
		name: "projectTitle",
		message: "Please enter your project title:",
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
		message: "Please enter project usage information:",
	},
	{
		type: "list",
		name: "licence",
		message: "Please select a licence from the options below:",
		choices: ["MIT", "Apache", "GNU", "BSD", "CreativeCommons"],
	},
	{
		type: "input",
		name: "contribution",
		message: "Please enter any contribution guidelines for this project",
	},
	{
		type: "input",
		name: "testingInfo",
		message:
			"Please provide any relevant testing instructions for this project",
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
	return `# ${answers.projectTitle} ![MIT](https://img.shields.io/badge/${answers.licence}-License-green)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${answers.description}

## Installation

Please follow the instructions below:

\`\`\`
${answers.installation}
\`\`\`

## Usage

Please follow the instructions below:

\`\`\`
${answers.usage}
\`\`\`

## License

${answers.licence} licence


## Contributing

${answers.contribution}

## Tests

Please follow the instructions below:

\`\`\`
${answers.testingInfo}
\`\`\`

## Questions

If you have any questions or feedback about this project, please feel free to reach out to me.

Contact me by Email: [${answers.email}](mailto:${answers.email})

Visit my GitHub profile: [${answers.githubProfile}/](${answers.githubProfile}/)
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
