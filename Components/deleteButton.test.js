import { render, screen, fireEvent } from "@testing-library/react";
import DeleteButton from './deleteButton'
import "@testing-library/jest-dom";
import "@jest/globals"
import userEvent from '@testing-library/user-event';

describe("Delete Button", () => {
    render(<DeleteButton/>)
it("checks that the button renders correctly on the page", () => {
expect(screen.getByRole('button')).toBeInTheDocument();
})

it("checks that the button carries out a function when clicked", async () => {
    const event = jest.fn();
    const user = userEvent.setup();
    render(<DeleteButton onDelete={event}/>)
    screen.debug()
    const button = screen.getByRole('button')
    await user.click(button)
    expect(event).toHaveBeenCalled()
    })
})