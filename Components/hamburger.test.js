import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@jest/globals"
import Hamburger from "./hamburger.js";

describe("Hamburger", () => {
    render(<Hamburger/>)
it("checks that the hamburger menu renders correctly on the page", () => {
    expect(screen.getByTestId("hamburger")).toBeInTheDocument();
})

it("check that the hamburger menu displays correctly when clicked", () => {
   render(<Hamburger/>)
    const menu = screen.getByTestId("hamburger")
    fireEvent.click(menu)
    expect(screen.getByText("View Symptoms")).toBeInTheDocument();
})
})