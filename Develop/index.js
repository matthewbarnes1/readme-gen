// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('/Users/matthewbarnes/readme-gen/Develop/generator.js')


//* This array holds all of the neccesary questions for application MD file
const questions = [
    {
      type: 'input',
      message: 'Enter a title for project: ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description of project: ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter necessary installation info: ',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage info: ',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please enter license info: ',
        name: 'license',
        choices:['MIT', 'ISC', 'GNUPLv3'],
        filter(val){
          return val.toLowerCase();
        }
        
      },    
      {
        type: 'input',
        message: 'Please enter contributing info: ',
        name: 'contributing',
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


//* Uses questions array to prompt user 
function ABCDE(){
  return inquirer.prompt(questions)
  .then((answers) =>{
    const mark = MarkDown.generateReadme(answers)
    fs.writeFile('new-README.md', mark, function(err){
      if(err){
        console.log("Could not save file", err)
      }else{
        console.log('New README File generated!')
      }
      })

    console.log(mark);
    return answers;
  })
  .catch((error) =>{
  console.log(error)
  })
}

ABCDE()



