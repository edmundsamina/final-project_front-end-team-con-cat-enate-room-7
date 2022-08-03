import React, { useState } from "react";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Select,
	Checkbox,
} from "@chakra-ui/react";
import NavBar from "../Components/navBar";
import LinkButton from "../Components/linkButton";
import { nanoid } from "nanoid/non-secure";

/*
user_id - handed in as state
pet_id - same
reminder_id - nanoid
task - string
date - string (functionality needed here to account for data types)
completed - boolean
repeated - boolean
frequency - number
*/

const url = process.env.NEXT_PUBLIC_DB_URL;
const AddReminder = () => {
	const user_id = "1234567890";
	const pet_id = "1234567890"; // These ids need to be handed in as state/context

	// const [checkbox, setCheckbox] = useState(false);

	const [submission, setSubmission] = useState({
		user_id: user_id,
		pet_id: pet_id,
		reminder_id: nanoid(10),
		task: "",
		date: "",
		completed: false,
		repeated: false,
		frequency: Number,
	});

	//Needs to be refactored
  // Conditional render happens without noEmptyFields check
	const [noEmptyFields, setNoEmptyFields] = useState(false);

	function handleChange(e) {
		console.log(submission.date)
		let value = e.target.value.toString();
		setSubmission({ ...submission, [e.target.name]: value });
		let entries = Object.values(submission);
		for (let i = 0; i < entries.length; i++) {
			if (entries[i] === "" || entries[i] === undefined) {
				setNoEmptyFields(false);
				return;
			}
		}
		setNoEmptyFields(true);
	}

	async function handlePost() {
		const response = await fetch(`${url}/reminders`, {
			method: "POST",
			body: JSON.stringify(submission),
			headers: {
				"Content-Type": "application/json",
			},
		});
		// const data = response.json();
		// console.log(data.rows);
	}

	function selectChange(e) {
		setSubmission({ ...submission, frequency: e.target.value });
	}

	return (
		<div>
			<NavBar />
			<FormControl>
				<FormLabel>Add Reminder</FormLabel>
				<Input
					placeholder="Reminder"
					name="task"
					value={submission.task}
					onChange={handleChange}
				/>
				<Input
					placeholder="Date"
					type="date"
					name="date"
					value={submission.date}
					onChange={handleChange}
				/>
				<Checkbox
					value={submission.repeated}
					isChecked={submission.repeated === true}
					onChange={(e) =>
						setSubmission({ ...submission, repeated: !submission.repeated })
					}
				>
					Repeated
				</Checkbox>
        {submission.repeated === true &&
				<Select onChange={selectChange} placeholder="Select frequency">
					<option value={1}>Daily</option>
					<option value={7}>Weekly</option>
					<option value={30}>Monthly</option>
					<option value={365}>Anually</option>
				</Select>
        }
			</FormControl>
			{submission.task && submission.date && (
				<LinkButton text="Add" link="/schedule" onClick={handlePost} />
			)}
		</div>
	);
};

export default AddReminder;
