const Employee = require("../lib/Employee");

describe("Emploee Class", () => {
  test("Can create employee instance object", () => {
    let name = "John";
    let id = 255;
    let email = "myawesome@mail.com";

    let newEmployee = new Employee(name, id, email);

    expect(newEmployee.name).toBe(name);
    expect(newEmployee.id).toBe(id);
    expect(newEmployee.email).toBe(email);
  });

  test("getName returns newEmployee name", () => {
    let name = "John";
    let id = 255;
    let email = "myawesome@mail.com";

    let newEmployee = new Employee(name, id, email);

    expect(newEmployee.getName()).toBe(name);
  });

  test("getId returns newEmployee id", () => {
    let name = "John";
    let id = 255;
    let email = "myawesome@mail.com";

    let newEmployee = new Employee(name, id, email);

    expect(newEmployee.getId()).toBe(id);
  });

  test("getEmail returns newEmployee Email", () => {
    let name = "John";
    let id = 255;
    let email = "myawesome@mail.com";

    let newEmployee = new Employee(name, id, email);

    expect(newEmployee.getEmail()).toBe(email);
  });

  test("getRole returns newEmployee Role: Employee", () => {
    let name = "John";
    let id = 255;
    let email = "myawesome@mail.com";

    let newEmployee = new Employee(name, id, email);

    expect(newEmployee.getRole()).toBe("Employee");
  });
});
