import { render, screen, fireEvent } from "@testing-library/react";
import DeleteButton from './deleteButton'
import "@testing-library/jest-dom";
import "@jest/globals"

describe("Delete Button", () => {
    render(<DeleteButton/>)
it("checks that the button renders correctly on the page", () => {
expect(screen.getByRole('button')).toBeInTheDocument();
})

it("checks that the button carries out a function when clicked", () => {
    const event = jest.fn();
    render(<DeleteButton prop={event}/>)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(event).toHaveBeenCalled()
    })
})