import React from "react"
import Counter from "../counter"
import { render, screen } from "@testing-library/react"
// import { screen, render } from '@testing-library/any-framework'
import "@testing-library/jest-dom/extend-expect"

test("header renders with correct text ", () => {
 render(<Counter />);
 expect(screen.getByTestId('titleId')).toHaveTextContent("Counter")
  
})

test("counter initally start with text 0", () => {
  render(<Counter />);
  expect(screen.getByTestId('counterId')).toHaveTextContent(0)
})