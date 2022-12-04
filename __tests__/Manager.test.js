const Manager = require("../lib/Manager");

describe("Emploee Class", () => {
  let name = "John";
  let id = 255;
  let email = "myawesome@mail.com";
  let officeNumber = 12475;

  let newManager = new Manager(name, id, email, officeNumber);

  test("Can create Manager instance object", () => {
    expect(newManager.name).toBe(name);
    expect(newManager.id).toBe(id);
    expect(newManager.email).toBe(email);
    expect(newManager.officeNumber).toBe(officeNumber);
  });

  test("getName returns newManager name", () => {
    expect(newManager.getName()).toBe(name);
  });

  test("getId returns newManager id", () => {
    expect(newManager.getId()).toBe(id);
  });

  test("getEmail returns newManager Email", () => {
    expect(newManager.getEmail()).toBe(email);
  });

  test("getOfficeNumber returns newManager officeNumber username", () => {
    expect(newManager.getOfficeNumber()).toBe(officeNumber);
  });

  test("getRole returns newManager Role: Manager", () => {
    expect(newManager.getRole()).toBe("Manager");
  });
});
