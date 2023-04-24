// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown');


// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(licenseLink) {
//   let renderLicense = 

//   return renderLicense;
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licenseBadge, licenseLink) {
  let readMe =
  `# ${data.title}

  ## Description

    ${licenseBadge}

    ${data.description}
  
  ## Table of Contents 
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#contributors)
  * [License](#license)
  
  ## Installation
  
    ${data.install}

  ## Usage
  
    ${data.usage}

  ## Contributors

    ${data.contributors}

  ## Tests

  ## Questions 

    ${data.username}
    ${data.email}

  ${licenseLink}

  `;
  return readMe;
}

// module.exports = generateMarkdown;
// module.exports = renderLicenseSection;

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
function writeReadMeFile(readMe) {
  // const fileName = `README.md`;
  fs.writeFile('README.md', readMe, null, (error) =>
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
      choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License']
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
    .then((data) => {
      console.log(data.title, data.description, data.install, data.usage, data.contributors, data.license, data.username, data.email)
      let licenseString = JSON.stringify(data.license[0]);

      // console.log(licenseString);
      // const licenseBadge = renderLicenseBadge(licenseString);
      // console.log(licenseBadge);
      // // const licenseLink = renderLicenseLink(licenseString);
      // // console.log(licenseString)
      // const licenseSection = renderLicenseLink(licenseString);
      // console.log(licenseSection)
      writeReadMeFile(generateMarkdown( data, renderLicenseBadge(licenseString), renderLicenseLink(licenseString) ));
    });
}

function renderLicenseBadge(license) {
  let licenseBadge = ''
  if (license === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else if (license === 'GNU General Public License v3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } else if (license === 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else {
    return licenseBadge;
  }
}

function renderLicenseLink(license) {
  let licenseLink = ''
  if (license === 'Apache License 2.0') {
    return `
    ## License
      [Link to License](https://opensource.org/licenses/Apache-2.0)
    `;
  } else if (license === 'GNU General Public License v3.0') {
    return `
    ## License
      [Link to License](https://www.gnu.org/licenses/gpl-3.0)
      `;
  } else if (license === 'MIT License') {
    return `
    ## License
      [Link to License](https://opensource.org/licenses/MIT)
      `;
  } else {
    return licenseLink;
  }
  // return licenseLink
}
// Function call to initialize app
init();
