import React from "react"
import Counter from "../counter"
import { render, screen } from "@testing-library/react"
// import { screen, render } from '@testing-library/any-framework'
import "@testing-library/jest-dom/extend-expect"

test("header renders with correct text ", () => {
 render(<Counter />);
 expect(screen.getByTestId('header')).toHaveTextContent("My Counter")
  
})