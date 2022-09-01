import React from "react"
import Counter from "../counter"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"


test("counter initally start with text 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = screen.getByTestId('counterId')

  expect(counterEl.textContent).toBe("0")
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

test("clicks on add button to increment counter by 1", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = screen.getByTestId("add-btn")
  const counterEl = screen.getByTestId('counterId')

  expect(counterEl.textContent).toBe("0")

  fireEvent.click(addBtn);

  expect(counterEl.textContent).toBe("1")

})

test("clicks on minus button to decrement by 1", () => {
  const { getByTestId } = render(<Counter />);
  const minusBtn = screen.getByTestId("minus-btn");
  const counterEl = screen.getByTestId("counterId")

  expect(counterEl.textContent).toBe("0")

  fireEvent.click(minusBtn)

  expect(counterEl.textContent).toBe("-1")
})