// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ''
  if(license === 'Apache License 2.0'){
    let licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else if (license === 'GNU General Public License v3.0'){
    let licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } else if (license === 'MIT License'){
    let licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else {
    let licenseBadge = '';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ''
  if(license === 'Apache License 2.0' ){
    let licenseLink = `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === 'GNU General Public License v3.0'){
    let licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
  } else if ( license === 'MIT License'){
    let licenseLink = `https://opensource.org/licenses/MIT`;
  } else {
    let licenseLink = '';
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let renderLicense = 
  `
  ## License
    [Link to License](${renderLicenseLink()})
  `
  return renderLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readMe = 
  `# ${data.title}

  ## Description

    * ${renderLicenseBadge()}

    * ${data.description}
  
  ## Table of Contents (Optional)
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  
    * ${data.install}

  ## Usage
  
    * ${data.usage}

  ## Contributing

    * ${data.contributors}

  ## Tests


  ## Questions 

    * ${data.username}
    * ${data.email}

  ${renderLicenseSection()}

  `;
  return readMe;
}

module.exports = generateMarkdown;
module.exports = renderLicenseSection;