// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;
const mrk = new Request('generated-readme.md');


//* This array holds all of the neccesary questions for application MD file
const questions = [
    {
      type: 'input',
      message: 'What is the projects title?: ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please enter a description: ',
      name: 'descr',
    },
    {
      type: 'input',
      message: 'Please enter installation info: ',
      name: 'install',
    },
    {
        type: 'input',
        message: 'Please enter usage info: ',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please enter license info: ',
        name: 'license',
      },    
      {
        type: 'input',
        message: 'Please enter contributing info: ',
        name: 'contri',
      },
      {
        type: 'input',
        message: 'Please enter tests info: ',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Please enter questons info: ',
        name: 'questions',
      },
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

fs.readFile('generated-readme.md', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;

    }});

