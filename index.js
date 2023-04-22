// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  'What would you like the title of your README file to be?',
  'What would you like the description to be?',
  'Describe the installation process for this project.',
  'Describe the functionality/usage of this project.',
  'Please type the names of any contributors to this project.',
  'Please choose one license from this list for your project.',
  'Please provide your GitHub username so people can see your GitHub profile.',
  'Please enter your email address so people can contact you with any questions.',

];

// TODO: Create a function to write README file
function writeReadMeFile(fileName, data) {
  // const fileName = `README.md`;
  fs.writeFile('README.md', data, null, (error) =>
    error ? console.error(error) : console.log("success"));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([
    {
      type: 'input',
      message: `${questions[0]}`,
      name: 'title'
    },
    {
      type: 'input',
      message: `${questions[1]}`,
      name: 'description'
    },
    {
      type: 'input',
      message: `${questions[2]}`,
      name: 'install'
    },
    {
      type: 'input',
      message: `${questions[3]}`,
      name: 'usage'
    },
    {
      type: 'input',
      message: `${questions[4]}`,
      name: 'contributors'
    },
    {
      type: 'checkbox',
      message: `${questions[5]}`,
      name: 'license',
      choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License' ]
    },
    {
      type: 'input',
      message: `${questions[6]}`,
      name: 'username'
    },
    {
      type: 'input',
      message: `${questions[7]}`,
      name: 'email'
    }
  ])
  .then ((data) => {
    console.log(data.title, data.description, data.install, data.usage, data.contributors, data.license, data.username, data.email)
    writeReadMeFile(generateMarkdown(data));
  });
}

// Function call to initialize app
init();
