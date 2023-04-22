// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  'What would you like the title of your README file to be?',
  'What would you like the description to be?',
  'Describe the installation process for this project.',
  'Describe the functionality/usage of this project.',
  'Please type the names of any contributors to this project.',
  'Please choose a license for this project from this list.',
  'Please provide your GitHub username so people can see your GitHub profile.',
  'Please enter your email address so people can contact you with any questions.',
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fileName = `README.md`;
  fs.writeFile(fileName, data, null, (error) =>
  error ? console.error(error) : console.log("success"));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
