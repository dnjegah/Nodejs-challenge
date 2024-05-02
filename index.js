// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "Full Name",
    },
    {
        type: 'input',
        message: 'Title of your project',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Project description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'installation',
    },
    {
        type: "input",
        message: "What is the link to the deployed application?",
        name: "deployment",
    },
    {
        type: 'input',
        message: 'Please provide usage information if applicable:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide contributor information:',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Please provide testing information:',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Please enter your Github username:',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "NONE"],
        name: 'license'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((userResponse) => {
        console.log('userResponse:', userResponse);
        writeToFile('generatedReadMe.md', generateMarkdown({ ...userResponse}));
    });
}

// Function call to initialize app
init();