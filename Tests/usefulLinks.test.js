import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import UsefulLinks from "../pages/[pets]/usefulLinks.js";
import "@testing-library/jest-dom";
import "@jest/globals";

describe("Update Pet Details page", () => {

    it("checks that the page renders cat links when the pet is a cat", () => {
        const mockData = {
            user_id: "1",
            pet_id: "1234567890",
            name: "John",
            species: true,
            breed: "Tabby",
            age: 5,
            weight: 4.5
        }

        render(
        <UsefulLinks pet={mockData}/>)
        expect(screen.queryByText("Find a Cat Sitter")).toBeInTheDocument();
        expect(screen.queryByText("Dog Health Advice")).not.toBeInTheDocument();
    })
    
    it("checks that the page renders dog links when the pet is a dog", () => {
        const mockData = {
            user_id: "1",
            pet_id: "1234567890",
            name: "Carl",
            species: false,
            breed: "Collie",
            age: 5,
            weight: 9
        }

        render(
        <UsefulLinks pet={mockData}/>)
        expect(screen.queryByText("Find a Cat Sitter")).not.toBeInTheDocument();
        expect(screen.queryByText("Dog Health Advice")).toBeInTheDocument();
    })

})