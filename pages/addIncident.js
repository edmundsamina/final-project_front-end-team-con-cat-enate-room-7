import React, { useState } from "react";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
} from "@chakra-ui/react";
import NavBar from "../Components/navBar";
import LinkButton from "../Components/linkButton";
import { nanoid } from "nanoid/non-secure";

const url = process.env.NEXT_PUBLIC_DB_URL;
const AddIncident = () => {
	const user_id = "1234567890";
	const pet_id = "1234567890"; // These ids need to be handed in as state/context
    const symptoms_id = "1234567890"
    const symptoms = "Holding symptom";

	const [newIncident, setNewIncident] = useState({
		user_id: user_id,
		pet_id: pet_id,
		incident_id: nanoid(10),
		symptoms: symptoms,
		symptoms_id: symptoms_id,
		date: "",
		time: "",
		description: "",
	});

	const [noEmptyFields, setNoEmptyFields] = useState(false);

	function handleChange(e) {
		let value = e.target.value.toString();
		setNewIncident({ ...newIncident, [e.target.name]: value });
		let entries = Object.values(newIncident);
		for (let i = 0; i < entries.length; i++) {
			if (entries[i] === "" || entries[i] === undefined) {
				setNoEmptyFields(false);
				return;
			}
		}
		setNoEmptyFields(true);
	}

	async function handlePost() {
		const response = await fetch(`${url}/symptoms`, {
			method: "POST",
			body: JSON.stringify(newIncident),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = response.json();
		console.log(data.rows);
	}

	return (
		<div>
			<NavBar />
			<FormControl>
				<FormLabel>{symptoms}</FormLabel>
                

				<Input
					placeholder="Date"
					type="date"
					name="date"
					value={newIncident.date}
					onChange={handleChange}
				/>
				<Input
					placeholder="Time"
					type="time"
					name="time"
					value={newIncident.time}
					onChange={handleChange}
				/>
				<Input
					placeholder="Description"
					name="description"
					value={newIncident.description}
					onChange={handleChange}
				/>
			</FormControl>
			{noEmptyFields && (
				<LinkButton text="Submit" link="/symptoms" onClick={handlePost} />
			)}
		</div>
	);
};

export default AddIncident;
