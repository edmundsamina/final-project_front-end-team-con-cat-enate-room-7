import { render, screen } from "@testing-library/react";
import NavBar from "./navBar.js";
import "@testing-library/jest-dom";
import "@jest/globals"

describe("Navbar", () => {
it("checks that the navbar renders correctly on the page", () => {
render(<NavBar/>);
expect(screen.getByText("are-Full")).toBeInTheDocument();
})
})