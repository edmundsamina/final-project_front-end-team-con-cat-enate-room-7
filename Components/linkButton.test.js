import { render, screen, fireEvent } from "@testing-library/react";
import LinkButton from "./linkButton.js";
import "@testing-library/jest-dom";
import "@jest/globals"

describe("Link Button", () => {
    render(<LinkButton link="/"/>)
it("checks that the button renders correctly on the page", () => {
expect(screen.getByRole('button')).toBeInTheDocument();
})

it("checks that the button label renders correctly on the page", () => {
    const text = "text"
    render(<LinkButton text={text} link="/"/>)
    expect(screen.getByText("text")).toBeInTheDocument();
    })
})