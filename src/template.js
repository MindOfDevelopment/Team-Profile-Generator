const generateTeam = (team) => {
  let managerCard = `
  <div class="container">
        <div class="top">
          <h2>${team.manager.getName()}</h2>
          <h4><i class="fa-solid fa-mug-hot"></i> ${team.manager.getRole()}</h4>
        </div>
        <div class="lower">
          <ul>
            <li>ID: ${team.manager.getId()}</li>
            <li>Email: <a href="mailto:${team.manager.getEmail()}">${team.manager.getEmail()}</a></li>
            <li>Office Number: ${team.manager.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>
  `;

  let engineerCards = team.engineers
    .map((emp) => {
      return `
  <div class="container">
  <div class="top">
    <h2>${emp.getName()}</h2>
    <h4><i class="fa-solid fa-glasses"></i> ${emp.getRole()}</h4>
  </div>
  <div class="lower">
    <ul>
      <li>ID: ${emp.getId()}</li>
      <li>Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></li>
      <li>Github:  <a
      href="https://github.com/${emp.getGithub()}"
      target="_blank"
      rel="noopener noreferrer"
      >${emp.getGithub()}</a
    ></li>
    </ul>
  </div>
</div>
  `;
    })
    .join("");

  let internCards = team.interns.map((emp) => {
    return `
      <div class="container">
        <div class="top">
          <h2>${emp.getName()}</h2>
          <h4><i class="fa-solid fa-user-graduate"></i> ${emp.getRole()}</h4>
        </div>
        <div class="lower">
          <ul>
            <li>ID: ${emp.getId()}</li>
            <li>Email: <a href="mailto:name@mail.com">name@mail.com</a></li>
            <li>School: ${emp.getSchool()}</li>
          </ul>
        </div>
      </div>
      `;
  });

  const buildpage = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link rel="stylesheet" href="style.css" />
      <title>My Awesome Team</title>
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
  
      <section>
        ${managerCard + engineerCards + internCards}      
      </section>
    </body>
  </html>
  
    `;

  return buildpage;
};

module.exports = generateTeam;
