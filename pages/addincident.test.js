import { render, screen } from "@testing-library/react";
import AddIncident from "./addIncident.js";
import "@testing-library/jest-dom";
import "@jest/globals"

describe("Add Incident page", () => {
    render(<AddIncident/>)
it("checks that the add incident input form renders correctly on the page", () => {
expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
})
})