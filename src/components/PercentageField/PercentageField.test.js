import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PercentageField from "./PercentageField";
import { Form } from "react-final-form";

const renderPercentageField = (input) => {
  input.label = input.label || input.name;
  input.validators = input.validators || [];

  return render(
    <Form
      onSubmit={(values) => {}}
      validate={() => {}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <PercentageField
            name={input.name}
            label={input.label}
            validators={input.validators}
          />
        </form>
      )}
    />
  );
};

const changeText = (component, value) => {
  const input = component.container.getElementsByTagName("input")[0];
  fireEvent.change(input, { target: { value: value } });
  fireEvent.blur(input);
};

const assertHelperText = (component, name, text) => {
  const helperText = component.getByTestId(`${name}-helper-text`);
  expect(helperText.textContent).toEqual(text);
};

it("renders the percentage field", () => {
  const sut = renderPercentageField({ name: "x", label: "Some name" });

  sut.getByText(/Some name/);
  expect(sut).toMatchSnapshot();
});

it("renders error for negative values", () => {
  const input = { name: "x" };
  const sut = renderPercentageField(input);
  changeText(sut, "-1");

  assertHelperText(
    sut,
    input.name,
    "The field requires a percentage value between 0 and 100."
  );
});

it("renders error for values over 100", () => {
  const input = { name: "x" };
  const sut = renderPercentageField(input);
  changeText(sut, "101");

  assertHelperText(
    sut,
    input.name,
    "The field requires a percentage value between 0 and 100."
  );
});

it("renders error for non-numeric characters", () => {
  const input = { name: "x" };
  const sut = renderPercentageField(input);
  changeText(sut, "arnold");

  assertHelperText(
    sut,
    input.name,
    "The field requires a percentage value between 0 and 100."
  );
});

it("renders custom validator error message, if not valid", () => {
  const mustBeDifferentThan11 = (value) =>
    value === "11" ? "11 not allowed." : undefined;

  const input = { name: "x", validators: [mustBeDifferentThan11] };
  const sut = renderPercentageField(input);

  changeText(sut, "11");

  assertHelperText(sut, input.name, "11 not allowed.");
});
