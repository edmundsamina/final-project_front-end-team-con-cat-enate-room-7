import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import UpdatePetDetails from "../pages/[pets]/updatePetDetails";
import "@testing-library/jest-dom";
import "@jest/globals";

describe("Update Pet Details page", () => {
    const mockData = {
		user_id: "1",
		pet_id: "1234567890",
		name: "John",
		species: true,
		breed: "Tabby",
		age: 5,
		weight: 4.5
	}

    
it("checks that the update pet info input form renders correctly on the page", () => {
    render(<UpdatePetDetails pet={mockData}/>)
    expect(screen.getByPlaceholderText("Breed")).toBeInTheDocument();
})
it("checks that the update button is rendered", () => {
    render(<UpdatePetDetails pet={mockData}/>)
    expect(screen.queryByTestId("updateButton")).toBeInTheDocument();
})
it("checks that the update button is dissappears when a field is cleared", async () => {
    const user = userEvent.setup()
    render(<UpdatePetDetails pet={mockData}/>)
    const ageField = screen.getByTestId("age")
    await user.clear(ageField)
    expect(screen.queryByTestId("updateButton")).not.toBeInTheDocument();
})

it("checks that the update pet info input form renders correctly on the page", () => {
    render(<UpdatePetDetails pet={mockData}/>)
    let ageField = screen.getByPlaceholderText("Age")
    expect(ageField.value).toBe("5");
})

it("checks that age field doesn't accept letters", async () => {
    const user = userEvent.setup()
    render(<UpdatePetDetails pet={mockData}/>)
    const ageField = screen.getByTestId("age")
    await user.clear(ageField)
    await user.type(ageField, "test")
    expect(ageField).toHaveValue("");
})
it("checks that age field  accepts numbers", async () => {
    const user = userEvent.setup()
    render(<UpdatePetDetails pet={mockData}/>)
    const ageField = screen.getByTestId("age")
    await user.clear(ageField)
    await user.type(ageField, "23")
    expect(ageField).toHaveValue("23");
})

it("checks that the update button renders when all fields are filled", async () => {
    const user = userEvent.setup()
    render(<UpdatePetDetails pet={mockData}/>)
    const nameField = screen.getByPlaceholderText("Name")
    await user.clear(nameField)
    await user.type(nameField, "Spot")
    expect(nameField).toHaveValue("Spot");
    const breedField = screen.getByPlaceholderText("Breed")
    await user.clear(breedField)
    await user.type(breedField, "Dalmatian")
    expect(breedField).toHaveValue("Dalmatian");
    await userEvent.selectOptions(screen.getByTestId('Species'), ['Dog'])
    expect(screen.getByRole('option', {name: 'Dog'}).selected).toBe(true)
    const ageField = screen.getByTestId("age")
    await user.clear(ageField)
    await user.type(ageField, "3")
    expect(ageField).toHaveValue("3");
    const weightField = screen.getByPlaceholderText("Weight")
    await user.clear(weightField)
    await user.type(weightField, "5")
    expect(weightField).toHaveValue("5");
    expect(await screen.findByTestId("updateButton")).toBeInTheDocument();
})

})