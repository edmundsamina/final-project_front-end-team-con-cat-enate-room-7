import { render, screen, fireEvent } from "@testing-library/react";
import DoneButton from "./doneButton.js";
import "@testing-library/jest-dom";
import "@jest/globals"
import userEvent from '@testing-library/user-event';

describe("Done Button", () => {
    render(<DoneButton/>)
it("checks that the button renders correctly on the page", () => {
expect(screen.getByRole('button')).toBeInTheDocument();
})

it("checks that the button carries out a function when clicked", async () => {
    const event = jest.fn();
    const user = userEvent.setup();
    render(<DoneButton onClick={event}/>)
    const button = screen.getByRole('button')
    await user.click(button)
    expect(event).toHaveBeenCalled()
    })
})