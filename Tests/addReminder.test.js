import { render, screen } from "@testing-library/react";
import AddReminder from "../pages/addReminder.js";
import "@testing-library/jest-dom";
import "@jest/globals";

describe("Add Reminder page", () => {
	render(<AddReminder />);
	it("checks that the add reminder input form renders correctly on the page", () => {
		expect(screen.getByPlaceholderText("Reminder")).toBeInTheDocument();
	});
});
