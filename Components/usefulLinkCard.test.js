import { render, screen, fireEvent } from "@testing-library/react";
import UsefulLinkCard from "./usefulLinkCard.js";
import "@testing-library/jest-dom";
import "@jest/globals"

describe("Tests for the Card Components in the Useful Links Page", () => {
    

it("checks that the image renders correctly on the page", () => {
    render(<UsefulLinkCard alt="Test Alt-Text" src={require("../public/mock_photo.jpg")}/>)
expect(screen.getByAltText("Test Alt-Text")).toBeInTheDocument();
})
it("checks that the title and text renders correctly on the page", () => {
    render(<UsefulLinkCard alt="Test Alt-Text" src={require("../public/mock_photo.jpg")} title="Test Title" text="Test Text"/>)
expect(screen.queryByText("Test Title")).toBeInTheDocument();
expect(screen.queryByText("Test Text")).toBeInTheDocument();
expect(screen.queryByText("Test Random")).not.toBeInTheDocument();

})
it("checks that the card is a link", () => {
    render(<UsefulLinkCard alt="Test Alt-Text" src={require("../public/mock_photo.jpg")} title="Test Title" text="Test Text" href="www.test.com"/>)
expect(screen.getByRole("link")).toHaveAttribute('href', "www.test.com")

})
})