// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "APACHE2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLink(license) {
  if (license !== "none") {
    return `[${license}]`;
  }
  return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return ""
  } return `## License
  
    Copyright (c) ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

 ## Table of Contents

  * [GitHub](#github)
  * [Description](#description)

  ## GitHub

  [${data.userName}](https://github.com/${data.userName}/)

  ## Description 

  ${data.description}

 

  ## Dependencies 

  ${data.dependencies}

  ## Usage

  ${data.usage}

  ## Contributers 

  ${data.contributers}

  ## License 

  ${renderLicenseSection(data.license)}
  ${renderLink(data.license)}
  
`;
}

module.exports = generateMarkdown;
