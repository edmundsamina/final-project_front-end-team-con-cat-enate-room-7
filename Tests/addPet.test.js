import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import AddPets from "../pages/AddPet";
import "@testing-library/jest-dom";
import "@jest/globals";
import { UserProvider } from "@auth0/nextjs-auth0";

describe("Update Pet Details page", () => {

it("checks that the update pet info input form renders correctly on the page", () => {
    render(
    <UserProvider>
    <AddPets/>
    </UserProvider>)
    expect(screen.getByPlaceholderText("Breed")).toBeInTheDocument();
})
it("checks that the update button isn't renderd", () => {
    render(
        <UserProvider>
        <AddPets/>
        </UserProvider>)
    expect(screen.queryByTestId("updateButton")).not.toBeInTheDocument();
})

it("checks that the update pet info input form renders correctly on the page", () => {
    render(
        <UserProvider>
        <AddPets/>
        </UserProvider>)
    let ageField = screen.getByPlaceholderText("Age")
    expect(ageField.value).toBe("");
})

it("checks that age field doesn't accept letters", async () => {
    const user = userEvent.setup()
    render(
        <UserProvider>
        <AddPets/>
        </UserProvider>)
    const ageField = screen.getByTestId("age")
    await user.type(ageField, "test")
    expect(ageField).toHaveValue("");
})
it("checks that age field  accepts numbers", async () => {
    const user = userEvent.setup()
    render(
        <UserProvider>
        <AddPets/>
        </UserProvider>)
    const ageField = screen.getByTestId("age")
    await user.type(ageField, "23")
    expect(ageField).toHaveValue("23");
})

it("checks that the update button renders when all fields are filled", async () => {
    const user = userEvent.setup()
    render(
        <UserProvider>
        <AddPets/>
        </UserProvider>)
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
    expect(ageField).toHaveValue("3");
    const weightField = screen.getByPlaceholderText("Weight")
    await user.type(weightField, "5.25")
    expect(weightField).toHaveValue("5.25");
    expect(await screen.findByTestId("updateButton")).toBeInTheDocument();
})

})