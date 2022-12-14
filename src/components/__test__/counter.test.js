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

test("adding and then subtracting leads to the correct number on counterCan", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = screen.getByTestId("add-btn")
  const minusBtn = screen.getByTestId("minus-btn");
  const counterEl = screen.getByTestId("counterId")

  expect(counterEl.textContent).toBe("0")

  fireEvent.click(addBtn);

  expect(counterEl.textContent).toBe("1")

  fireEvent.click(minusBtn);
  
  expect(counterEl.textContent).toBe("0")

})

test("clicking add button twice counter should be 2", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = screen.getByTestId("add-btn")
  const counterEl = screen.getByTestId("counterId")

  fireEvent.click(addBtn);

  expect(counterEl.textContent).toBe("1")

  fireEvent.click(addBtn);

  expect(counterEl.textContent).toBe("2")
})

test("clicking minus button twice counter should be -2", () => {
  const { getByTestId } = render(<Counter />);
  const minusBtn = screen.getByTestId("minus-btn")
  const counterEl = screen.getByTestId("counterId")

  fireEvent.click(minusBtn);

  expect(counterEl.textContent).toBe("-1")

  fireEvent.click(minusBtn);

  expect(counterEl.textContent).toBe("-2")
})

test("if counter is === 0 it should appear in black", () => {
  const { getByTestId } = render(<Counter />);
  const minusBtn = screen.getByTestId("minus-btn")
  const counterEl = screen.getByTestId("counterId")

  expect(counterEl.className).toBe("black")
})

test("if counter is bellow 0 it should appear in red", () => {
  const { getByTestId } = render(<Counter />);
  const minusBtn = screen.getByTestId("minus-btn")
  const counterEl = screen.getByTestId("counterId")
  
  expect(counterEl.className).toBe("black")

  fireEvent.click(minusBtn)

  expect(counterEl.className).toBe("red")
})

test("if counter is above 0 it should appear in green", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = screen.getByTestId("add-btn")
  const counterEl = screen.getByTestId("counterId")
  
  expect(counterEl.className).toBe("black")

  fireEvent.click(addBtn)

  expect(counterEl.className).toBe("green")
})
