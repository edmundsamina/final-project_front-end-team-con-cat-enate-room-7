import React, { useState, useEffect } from "react";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Select,
	Checkbox,
} from "@chakra-ui/react";
import NavBar from "../../../Components/navBar";
import LinkButton from "../../../Components/linkButton";
import { nanoid } from "nanoid/non-secure";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

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

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";

export async function getServerSideProps(context){

	const id = context.params.pets
  const response = await fetch(`${url}/pets?pet_id=${id}`)
	const data = await response.json()
   return {props:{pet:data.payload[0]}}
	}

export default withPageAuthRequired (function AddReminder({pet}) {

	// const [checkbox, setCheckbox] = useState(false);

	const [submission, setSubmission] = useState({
		user_id: pet.user_id,
		pet_id: pet.pet_id,
		reminder_id: nanoid(10),
		task: "",
		date: "",
		completed: false,
		repeated: false,
		frequency: Number,
	});

	//Needs to be refactored
  // Conditional render happens without noEmptyFields check
	// const [noEmptyFields, setNoEmptyFields] = useState(false);

	// function handleChange(e) {
	// 	console.log(submission.date)
	// 	let value = e.target.value.toString();
	// 	setSubmission({ ...submission, [e.target.name]: value });
	// 	let entries = Object.values(submission);
	// 	for (let i = 0; i < entries.length; i++) {
	// 		if (entries[i] === "" || entries[i] === undefined) {
	// 			setNoEmptyFields(false);
	// 			return;
	// 		}
	// 	}
	// 	setNoEmptyFields(true);
	// }

	const [noEmptyFields, setNoEmptyFields] = useState(false)

    useEffect(() => {
        const checkFields = async () => {
            let entries = Object.values(submission);
            for (let i = 0; i < entries.length; i++) {
              if (entries[i] === "" || entries[i] === undefined || entries[i] === null) {
                setNoEmptyFields(false)
                return
              } 
            
            }
            setNoEmptyFields(true)
        };
    
        // call the function
        checkFields()
          // make sure to catch any error
          .catch(console.error);
      }, [submission]);

     function handleChange(e){
        let value = (e.target.value)
        setSubmission({ ...submission, [e.target.name]: value });
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
			<FormControl className='form-style'>
				<FormLabel><h2>Add Reminder</h2></FormLabel>
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
					size='lg' colorScheme='twitter' className="mt1"
				>
					Repeated
				</Checkbox>
        {submission.repeated === true &&
				<Select onChange={selectChange} placeholder="Select frequency" variant='flushed' borderColor='var(--main-color)' borderBottom="2px">
					<option value={1}>Daily</option>
					<option value={7}>Weekly</option>
					<option value={30}>Monthly</option>
					<option value={365}>Anually</option>
				</Select>
        }
			</FormControl>
			{!noEmptyFields && <p className='form-remind'>* Please fill all</p>}
			{submission.task && submission.date && (
				<LinkButton text="Add" link={{pathname:`./`, query:{pets:`${pet.pet_id}`}}} onClick={handlePost} />
			)}
		</div>
	);
}
)