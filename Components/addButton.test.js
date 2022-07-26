import { render, screen, fireEvent } from "@testing-library/react";
import AddButton from "./addButton.js";
import "@testing-library/jest-dom";
import "@jest/globals"

describe("Add Button", () => {
    render(<AddButton/>)
it("checks that the button renders correctly on the page", () => {
expect(screen.getByRole('button')).toBeInTheDocument();
})

it("checks that the button label renders correctly on the page", () => {
    const text = "text"
    render(<AddButton text={text}/>)
    expect(screen.getByText("text")).toBeInTheDocument();
    })
})