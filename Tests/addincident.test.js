import { render, screen } from "@testing-library/react";
import AddIncident from "../pages/[pets]/symptoms/[id]/addIncident.js";
import "@testing-library/jest-dom";
import "@jest/globals";
import { UserProvider } from '@auth0/nextjs-auth0';

// jest.mock('@auth0/nextjs-auth0', () => ({ UserProvider: ({ children }) => '<div>{children}</div>' }));

describe("Add Incident page", () => {
    const mockData = {
		user_id: "1",
    pet_id: "1234567890",
    incident_id: "ouchy",
    symptoms: "Tummy Ache",
    symptoms_id: "owie",
    date: "14-07-2022",
    time: "12:00",
    description: "Tummy is growling and looks green"
	}
    render(<AddIncident incidents={mockData}/>)
it("checks that the add incident input form renders correctly on the page", () => {
expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
})
})