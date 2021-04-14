import * as React from "react";
import Skills from "../pages/skills";
import { render } from "@testing-library/react";

describe("Empty test", () => {
  test("No test", () => {});

  test("Verify Skills page", () => {
    const { getByText } = render(<Skills />);

    expect(getByText("Skills")).toBeTruthy();
  });
});
