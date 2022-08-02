import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import UpdatePetDetails from "../pages/updatePetDetails";
import "@testing-library/jest-dom";
import "@jest/globals";

describe("Update Pet Details page", () => {
    
it("checks that the update pet info input form renders correctly on the page", () => {
    render(<UpdatePetDetails/>)
    expect(screen.getByPlaceholderText("Breed")).toBeInTheDocument();
})
it("checks that the update button isn't renderd", () => {
    render(<UpdatePetDetails/>)
    expect(screen.queryByTestId("updateButton")).not.toBeInTheDocument();
})

it("checks that the update pet info input form renders correctly on the page", () => {
    render(<UpdatePetDetails/>)
    let ageField = screen.getByPlaceholderText("Age")
    console.log(ageField.value)
    expect(ageField.value).toBe("");
})

it("checks that age field doesn't accept letters", async () => {
    const user = userEvent.setup()
    render(<UpdatePetDetails/>)
    const ageField = screen.getByTestId("age")
    await user.type(ageField, "test")
    expect(ageField).toHaveValue(null);
})
it("checks that age field  accepts numbers", async () => {
    const user = userEvent.setup()
    render(<UpdatePetDetails/>)
    const ageField = screen.getByTestId("age")
    await user.type(ageField, "23")
    expect(ageField).toHaveValue(23);
})

it("checks that the update button renders when all fields are filled", async () => {
    const user = userEvent.setup()
    render(<UpdatePetDetails/>)
    const nameField = screen.getByPlaceholderText("Name")
    await user.type(nameField, "Spot")
    expect(nameField).toHaveValue("Spot");
    const breedField = screen.getByPlaceholderText("Breed")
    await user.type(breedField, "Dalmatian")
    expect(breedField).toHaveValue("Dalmatian");
    await userEvent.selectOptions(screen.getByTestId('Species'), ['Dog'])
    expect(screen.getByRole('option', {name: 'Dog'}).selected).toBe(true)
    const ageField = screen.getByTestId("age")
    await user.type(ageField, "3")
    expect(ageField).toHaveValue(3);
    const weightField = screen.getByPlaceholderText("Weight")
    await user.type(weightField, "5")
    expect(weightField).toHaveValue(5);
    expect(await screen.findByTestId("updateButton")).toBeInTheDocument();
})

})