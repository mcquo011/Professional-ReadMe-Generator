const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is the title of your Repository?",
    name: "title",
    validate: (value) => {
      if (value === "") {
        return "You must enter a title!";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "userName",
    validate: (value) => {
      if (value === "") {
        return "You must enter an username!";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: (value) => {
      if (value === "") {
        return "You must enter an email!";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Describe your project:",
    name: "description",
    validate: (value) => {
      if (value === "") {
        return "Please enter a description!";
      }
      return true;
    },
  },
  {
    type: "list",
    message: "Choose a license:",
    choices: ["MIT", "APACHE2.0", "GPL3.0", "None"],
    name: "license",
  },
  {
    type: "input",
    name: "dependencies",
    message: "Any dependencies to install?",
    default: "npm i inquirer@8.2.4",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your application?",
    validate: (value) => {
      if (value === "") {
        return "Please describe how to use your application";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "contributers",
    message: "Who are the contributors on this repository?",
  },

  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
  },
];


function writeToFile(data) {
  fs.writeFile("README-gen.md", data, (err) => {
    if (err) {
      console.error(`Error generating ReadMe: ${err}`);
    } else {
      console.log(`ReadMe generated successfully.`);
    }
  });
}


function init() {
  return inquirer
    .prompt(questions)
    .then((userInput) => {
      console.log(userInput);
      return generateMarkdown(userInput);
    })
    .then((readMeData) => {
      return writeToFile(readMeData);
    });

}

init()

