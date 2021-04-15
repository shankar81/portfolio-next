import { validateEmail, validatePhone } from "./../utils/helper";

describe("ValidateEmail", () => {
  test("Empty test", () => {});

  test("Passing empty input, it should fail", () => {
    const result = validateEmail("");

    expect(result).toBeFalsy();
  });

  test("Passes valid email, it should pass", () => {
    const result = validateEmail("example@gmail.com");

    expect(result).toBeTruthy();
  });

  test("Without @ sign, it should fail", () => {
    const result = validateEmail("examplegmail.com");

    expect(result).toBeFalsy();
  });

  test("Without .com, it should fail", () => {
    const result = validateEmail("example@gmail");

    expect(result).toBeFalsy();
  });

  test("Valid email with numbers, it should pass", () => {
    const result = validateEmail("example.test123@gmail.com");

    expect(result).toBeTruthy();
  });
});

describe("ValidatePhone", () => {
  test("Empty test", () => {});

  test("Invalid phone, Passing emtpy input", () => {
    const result = validatePhone("");

    expect(result).toBeFalsy();
  });

  test("Invalid phone, Passing small length phone number", () => {
    const result = validatePhone("123456");

    expect(result).toBeFalsy();
  });

  test("Valid phone, Passing 10 length phone number", () => {
    const result = validatePhone("1234567898");

    expect(result).toBeTruthy();
  });

  test("Invalid phone, Passing character other than number", () => {
    const result = validatePhone("12345678!@s98");

    expect(result).toBeFalsy();
  });
});
