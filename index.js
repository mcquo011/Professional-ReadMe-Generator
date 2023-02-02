// TODO: Include packages needed for this application
// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your Repository?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "userName",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "Describe your project:",
    name: "description",
  },
  {
    type: "list",
    message: "Choose a license:",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2", "BSD3", "None"],
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
  },
  {
    type: "input",
    name: "contributers",
    message: "Who are the contributors on this repository?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
