import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@jest/globals"
import Hamburger from "./hamburger.js";
import userEvent from '@testing-library/user-event';

describe("Hamburger", () => {
    const mockData = {
		user_id: "1",
		pet_id: "1234567890",
		name: "John",
		species: true,
		breed: "Tabby",
		age: "5",
		weight: "4.5"
	}

    render(<Hamburger pet={mockData}/>)
it("checks that the hamburger menu renders correctly on the page", () => {
    expect(screen.getByTestId("hamburger")).toBeInTheDocument();
})

it("check that the hamburger menu displays correctly when clicked", async () => {
   const user = userEvent.setup()
    render(<Hamburger pet={mockData}/>)
    const menu = screen.getByTestId("hamburger")
    await user.click(menu)
    expect(await screen.findByText("View Symptoms")).toBeInTheDocument();
})
})