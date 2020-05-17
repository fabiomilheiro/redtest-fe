import React from "react";
import { fireEvent, render, act, wait } from "@testing-library/react";
import App from "./App";
import calculationTypes from "./services/calculationTypes";
import axios from "axios";

jest.mock("axios");

const enterPercentageValue = (app, name, value) => {
  const input = app.getByTestId(name);
  fireEvent.change(input, { target: { value } });
  fireEvent.blur(input);
};

const selectCalculationType = (app, value) => {
  const input = app.getByTestId(`calculationType-${value}`);

  fireEvent.select(input);
  fireEvent.click(input);
};

const assertTableRows = (app, expectedResults) => {
  const rows = app
    .getByTestId("results")
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const expectedResult = expectedResults[i];
    const calculationType = row.getElementsByClassName(
      "cell-calculation-type"
    )[0];
    const a = row.getElementsByClassName("cell-a")[0];
    const b = row.getElementsByClassName("cell-b")[0];
    const value = row.getElementsByClassName("cell-value")[0];

    expect(calculationType.textContent).toBe(expectedResult.calculationType);
    expect(a.textContent).toBe(expectedResult.a);
    expect(b.textContent).toBe(expectedResult.b);
    expect(value.textContent).toBe(expectedResult.value);
  }
};

const submitRequest = (app) => {
  const button = app.getByTestId("calculateButton");
  fireEvent.click(button);
};

it("renders the form component", () => {
  const { getByText } = render(<App />);
  const formIntro = getByText(/Please insert two probabilities/i);
  expect(formIntro).toBeInTheDocument();
});

it("renders the table component", () => {
  const { getByText } = render(<App />);
  const noResultsYet = getByText(/No results yet/i);
  expect(noResultsYet).toBeInTheDocument();
});

it("render the result of a calculation in the table", async () => {
  await act(async () => {
    axios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { value: 0.05 } });
    });

    const app = render(<App />);
    const combinedCalculation = calculationTypes.get().combined;
    enterPercentageValue(app, "a", "10");
    enterPercentageValue(app, "b", "50");
    selectCalculationType(app, combinedCalculation.value);
    submitRequest(app);

    await wait();

    assertTableRows(app, [
      {
        calculationType: combinedCalculation.name,
        a: "10",
        b: "50",
        value: "5",
      },
    ]);
  });
});
