const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeam = require("./src/template");
const fs = require("fs");

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
      employees.manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.officeNumber
      );
      menu();
    });
}

function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "Choose What to do",
        choices: ["Add Engineer", "Add Intern", "Finish Building"],
      },
    ])
    .then((answers) => {
      switch (answers.option) {
        case "Add Engineer":
          addEngineer();
          break;
        case "Add Intern":
          addIntern();
          break;
        default:
          buildTeam();
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Engineer's Name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Engineer's ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter Engineer's Email: ",
      },
      {
        type: "input",
        name: "github",
        message: "Enter Engineer's Github username: ",
      },
    ])
    .then((answers) => {
      let newEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      employees.engineers.push(newEngineer);
      menu();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Intern's Name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Intern's ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter Intern's Email: ",
      },
      {
        type: "input",
        name: "school",
        message: "Enter Intern's School name: ",
      },
    ])
    .then((answers) => {
      let newIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      employees.interns.push(newIntern);
      menu();
    });
}

function buildTeam() {
  const teamPage = generateTeam(employees);
  fs.writeFile(__dirname + "/dist/index.html", teamPage, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Team Build Successfully!");
    }
  });
}

// ``````````````````````````````````````````````
//  START APPLICATION
// ``````````````````````````````````````````
start();
