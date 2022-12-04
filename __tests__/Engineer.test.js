const Engineer = require("../lib/Engineer");

describe("Emploee Class", () => {
  let name = "John";
  let id = 255;
  let email = "myawesome@mail.com";
  let github = "myusername";

  let newEngineer = new Engineer(name, id, email, github);

  test("Can create Engineer instance object", () => {
    expect(newEngineer.name).toBe(name);
    expect(newEngineer.id).toBe(id);
    expect(newEngineer.email).toBe(email);
    expect(newEngineer.github).toBe(github);
  });

  test("getName returns newEngineer name", () => {
    expect(newEngineer.getName()).toBe(name);
  });

  test("getId returns newEngineer id", () => {
    expect(newEngineer.getId()).toBe(id);
  });

  test("getEmail returns newEngineer Email", () => {
    expect(newEngineer.getEmail()).toBe(email);
  });

  test("getGithub returns newEngineer github username", () => {
    expect(newEngineer.getGithub()).toBe(github);
  });

  test("getRole returns newEngineer Role: Engineer", () => {
    expect(newEngineer.getRole()).toBe("Engineer");
  });
});
