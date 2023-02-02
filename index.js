const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { exit } = require('process');

const employee = () => {
    inquirer.prompt(
        {
            type: 'list',
            name: 'employeeType',
            message: 'What role of employee would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern', 'Quit']
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
            case 'Quit':
                quit();
                break;

            default:
        }
        generateHTML();
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
    const managerHTML = `
    <div class="card" style="width: 18rem;">
  <div class="card-header">
    Manager
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${newManager.name}</li>
    <li class="list-group-item">ID: ${newManager.id}</li>
    <li class="list-group-item">Office Number ${newManager.officeNumber}</li>
  </ul>
</div>
    `;

    fs.readFile('./index.html', 'utf-8', (err,data) => {
        if(err) throw err;
        
        const updatedHTML = data.replace('<body>', `${managerHTML}<body>`);

        fs.writeFile('./index.html', updatedHTML, (err) =>{
            if(err) throw err; 
        })
    })
    employee();
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
        const engineerHTML = `
    <div class="card" style="width: 18rem;">
  <div class="card-header">
    Engineer
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${newEngineer.name}</li>
    <li class="list-group-item">ID: ${newEngineer.id}</li>
    <li class="list-group-item">GitHub: ${newEngineer.github}</li>
  </ul>
</div>
    `;

    fs.readFile('./index.html', 'utf-8', (err,data) => {
        if(err) throw err;
        
        const updatedHTML = data.replace('<body>', `${engineerHTML}<body>`);

        fs.writeFile('./index.html', updatedHTML, (err) =>{
            if(err) throw err; 
        })
    })
    employee();
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
        const internHTML = `
    <div class="card" style="width: 18rem;">
  <div class="card-header">
    Manager
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${newIntern.name}</li>
    <li class="list-group-item">ID: ${newIntern.id}</li>
    <li class="list-group-item">Office Number ${newIntern.officeNumber}</li>
  </ul>
</div>
    `;

    fs.readFile('./index.html', 'utf-8', (err,data) => {
        if(err) throw err;
        
        const updatedHTML = data.replace('<body>', `${internHTML}<body>`);

        fs.writeFile('./index.html', updatedHTML, (err) =>{
            if(err) throw err; 
        })
    })
    employee();
    })
};

const generateHTML = () => {
    fs.access('./index.html', fs.F_OK, (err) => {
        if (err) {
        const html =`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team-profile-generator</title>
                <link rel="stylesheet" href='./assets/style.css'>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            </head>
            <body>

            </body>
            </html>`;
        fs.writeFile('./index.html', html, (err) => {
            if(err) throw err;
        });
    };
});
};
const quit = () => {
    process.exit(0);
}
employee();