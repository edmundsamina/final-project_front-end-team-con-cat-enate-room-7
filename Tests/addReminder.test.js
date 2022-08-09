import { render, screen } from "@testing-library/react";
import AddReminder from "../pages/[pets]/schedule/addReminder.js";
import "@testing-library/jest-dom";
import "@jest/globals";

describe("Add Reminder page", () => {
	const mockData = {
		user_id: "1",
		pet_id: "1234567890",
		name: "John",
		species: true,
		breed: "Tabby",
		age: "5",
		weight: "4.5"
	}

	render(<AddReminder pet={mockData}/>);
	it("checks that the add reminder input form renders correctly on the page", () => {
		expect(screen.getByPlaceholderText("Reminder")).toBeInTheDocument();
	});
});
