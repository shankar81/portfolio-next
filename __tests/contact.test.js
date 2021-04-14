import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import Contact from "./../pages/contact";

describe("Contact Page Testing", () => {
  test("Empty Test", () => {});

  test("Verify Form", () => {
    const { getByText, getByPlaceholderText } = render(<Contact />);

    const nameInput = getByPlaceholderText("Enter Name");
    const numberInput = getByPlaceholderText("Enter Number");
    const emailInput = getByPlaceholderText("Enter Email");
    const messageInput = getByPlaceholderText("Enter Message");
    const submit = getByText("Send");

    expect(getByText("Contact Form")).not.toBeNull();
    expect(getByText("Address")).not.toBeNull();
    expect(nameInput).not.toBeNull();
    expect(numberInput).not.toBeNull();
    expect(emailInput).not.toBeNull();
    expect(messageInput).not.toBeNull();
    expect(submit).not.toBeNull();
  });

  test("Validate input lengths", () => {
    const { getByPlaceholderText } = render(<Contact />);

    const nameInput = getByPlaceholderText("Enter Name");
    const numberInput = getByPlaceholderText("Enter Number");
    const emailInput = getByPlaceholderText("Enter Email");

    userEvent.type(
      nameInput,
      "Shankar Uttam Sawant. Software Developer At Mumbai"
    );
    userEvent.type(numberInput, "1234567891234568");
    userEvent.type(
      emailInput,
      "validating_the_max_length_of_email_input_set_by_max_prop@gmail.com"
    );

    expect(nameInput.value.length).toBeLessThanOrEqual(50);
    expect(numberInput.value.length).toBeLessThanOrEqual(15);
    expect(emailInput.value.length).toBeLessThanOrEqual(50);
  });
});
