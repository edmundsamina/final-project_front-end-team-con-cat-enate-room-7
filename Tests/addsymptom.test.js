import { render, screen } from "@testing-library/react";
import AddSymptom from "../pages/addSymptom.js";
import "@testing-library/jest-dom";
import "@jest/globals"

describe("Add Symptom page", () => {
    render(<AddSymptom/>)
it("checks that the add symptom input form renders correctly on the page", () => {
expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
})
})