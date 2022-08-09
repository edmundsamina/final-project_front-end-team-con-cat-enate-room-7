import { render, screen, fireEvent } from "@testing-library/react";
import SymptomDetailsCard from "./symptomDetailsCard.js"
import "@testing-library/jest-dom";
import "@jest/globals"

describe("Tests for the Card Components in the Useful Links Page", () => {
    

    it("checks that the card renders correctly on the page", () => {
        render(<SymptomDetailsCard />)
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Time")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    })
    it("checks that the card takes the props correctly", () => {
        render(<SymptomDetailsCard date="Test Date" time="Test Time" description="Test Description"/>)
    expect(screen.getByText("Test Date")).toBeInTheDocument();
    expect(screen.getByText("Test Time")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    })

})