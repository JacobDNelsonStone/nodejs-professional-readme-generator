// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license.answer == true ){

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let renderLicence = 
  `
  ## License
  `
  return renderLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, renderLicence) {
  let readMe = 
  `# ${data.title}

  ## Description

    * ${data.description}
  
  ## Table of Contents (Optional)
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  
  

  ## Usage
  
  

  ## Contributing

  

  ## Tests

  ${renderLicense}

  `;
  return readMe
}

module.exports = generateMarkdown;
