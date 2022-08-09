import { render, screen } from "@testing-library/react";
import AddSymptom from "../pages/[pets]/symptoms/addSymptom.js";
import "@testing-library/jest-dom";
import "@jest/globals";


describe("Add Symptom page", () => {
    const mockData = {
		user_id: "1",
		pet_id: "1234567890",
		name: "John",
		species: true,
		breed: "Tabby",
		age: "5",
		weight: "4.5"
	}

    render(<AddSymptom pet={mockData}/>)
it("checks that the add symptom input form renders correctly on the page", () => {
expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
})
})