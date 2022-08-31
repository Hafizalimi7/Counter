import React from "react"
import Counter from "../counter"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"


test("counter initally start with text 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = screen.getByTestId('counterId')

  expect(counterEl).toHaveTextContent(0)
})

test("add button renders with + sign", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = screen.getByTestId("add-btn")

  expect(addBtn.textContent).toBe("+")
})

test("minus button renders with - sign", () => {
  const { getByTestId } = render(<Counter />);
  const minusBtn = screen.getByTestId("minus-btn")

  expect(minusBtn.textContent).toBe("-")
})