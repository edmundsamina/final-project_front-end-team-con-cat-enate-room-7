import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "./navBar.js";
import "@testing-library/jest-dom";
import "@jest/globals"

describe("Navbar", () => {
    render(<NavBar/>)
it("checks that the navbar renders correctly on the page", () => {
expect(screen.getByAltText("Care-Full Logo")).toBeInTheDocument();
})
})