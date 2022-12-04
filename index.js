const inquirer = require("inquirer");

const employees = {
  manager: {},
  engineers: [],
  interns: [],
};

function start() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Enter Manager's Name: ",
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter Manager's ID: ",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Enter Manager's Email: ",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter Manager's Office Number: ",
      },
    ])
    .then((answers) => {
      employees.manager = answers;
    });
}

function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "managerName",
        message: "Enter Manager's Name: ",
      },
    ])
    .then((answers) => {
      employees.manager = answers;
    });
}

// ``````````````````````````````````````````````
//  START APPLICATION
// ``````````````````````````````````````````
start();
