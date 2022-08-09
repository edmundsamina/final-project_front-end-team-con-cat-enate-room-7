import { render, screen, fireEvent } from "@testing-library/react";
import SymptomCard from "./symptomCard.js"
import "@testing-library/jest-dom";
import "@jest/globals"

describe("Tests for the Card Components in the Useful Links Page", () => {
    

    it("checks that the card renders correctly on the page", () => {
        render(<SymptomCard name="Test" link="/"/>)
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
    
    })
    

})