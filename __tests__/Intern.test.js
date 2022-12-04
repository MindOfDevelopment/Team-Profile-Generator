const Intern = require("../lib/Intern");

describe("Emploee Class", () => {
  let name = "John";
  let id = 255;
  let email = "myawesome@mail.com";
  let school = "Awesome college";

  let newIntern = new Intern(name, id, email, school);

  test("Can create Intern instance object", () => {
    expect(newIntern.name).toBe(name);
    expect(newIntern.id).toBe(id);
    expect(newIntern.email).toBe(email);
    expect(newIntern.school).toBe(school);
  });

  test("getName returns newIntern name", () => {
    expect(newIntern.getName()).toBe(name);
  });

  test("getId returns newIntern id", () => {
    expect(newIntern.getId()).toBe(id);
  });

  test("getEmail returns newIntern Email", () => {
    expect(newIntern.getEmail()).toBe(email);
  });

  test("getSchool returns newIntern school name", () => {
    expect(newIntern.getSchool()).toBe(school);
  });

  test("getRole returns newIntern Role: Intern", () => {
    expect(newIntern.getRole()).toBe("Intern");
  });
});
