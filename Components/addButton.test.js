import { render, screen, fireEvent } from "@testing-library/react";
import AddButton from "./addButton.js";
import "@testing-library/jest-dom";
import "@jest/globals"

describe("Add Button", () => {
    render(<AddButton href="/"/>)
it("checks that the button renders correctly on the page", () => {
expect(screen.getByRole('button')).toBeInTheDocument();
})

it("checks that the button title is present", () => {
    const text = "text"
    render(<AddButton text={text} href="/"/>)
    expect(screen.getByTitle("Add an entry")).toBeInTheDocument();
    })
})