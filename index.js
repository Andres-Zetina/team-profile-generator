const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employee = () => {
    inquirer.prompt(
        {
            type: 'list',
            name: 'employeeType',
            message: 'What role of employee would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit']
        }
    ).then((data) =>{
        switch(data.employeeType) {
            case 'Manager':
                managerMaker();
                break;
            case 'Engineer':
                engineerMaker();
                break;
            case 'Intern':
                internMaker();
                break;

            default:
                stopRunning();
        }
    })
}

const managerMaker = () => {
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What's the manager's name?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What's the manager's ID?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What's the manager's email?"
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What's the manager's office number?"
      }
]).then((answers) => {
    const newManager = {
        name: answers.name,
        id: answers.id,
        email: answers.email,
        officeNumber: answers.officeNumber,
    };
    console.log(newManager);
})
};

const engineerMaker = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the engineer's name?"
          },
          {
            type: 'input',
            name: 'id',
            message: "What's the engineer's ID?"
          },
          {
            type: 'input',
            name: 'github',
            message: "What's the engenieer's email?"
          },
          {
            type: 'input',
            name: 'officeNumber',
            message: "Engineers GitHub:"
          }
    ]).then((answers) => {
        const newEngineer = {
            name: answers.name,
            id: answers.id,
            email: answers.email,
            github: answers.github,
        };
        console.log(newEngineer);
    })
};

const internMaker = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the interns's name?"
          },
          {
            type: 'input',
            name: 'id',
            message: "What's the interns's ID?"
          },
          {
            type: 'input',
            name: 'github',
            message: "What's the intern's email?"
          },
          {
            type: 'input',
            name: 'school',
            message: "What school is intern attending?"
          }
    ]).then((answers) => {
        const newIntern = {
            name: answers.name,
            id: answers.id,
            email: answers.email,
            school: answers.school,
        };
        console.log(newIntern);
    })
};

employee();