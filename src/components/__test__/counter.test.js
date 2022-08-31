import React from "react"
import Counter from "../counter"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("header renders with correct text ", () => {
 const { getByTestId }= render(<Counter />);
 const titleEl = screen.getByTestId("titleId")

 expect(titleEl).toHaveTextContent("Counter")
  
})

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