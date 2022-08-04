import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import NavBar from "../../../../Components/navBar";
import LinkButton from "../../../../Components/linkButton";
import { nanoid } from "nanoid/non-secure";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const url = process.env.NEXT_PUBLIC_DB_URL;
export default withPageAuthRequired(function AddIncident() {
  const user_id = "1234567890";
  const pet_id = "1234567890"; // These ids need to be handed in as state/context
  const symptoms_id = "1234567890";
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


	// const [noEmptyFields, setNoEmptyFields] = useState(false);

	// function handleChange(e) {
	// 	let value = e.target.value.toString();
	// 	setNewIncident({ ...newIncident, [e.target.name]: value });
	// 	let entries = Object.values(newIncident);
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
            let entries = Object.values(newIncident);
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
      }, [newIncident]);

	  function handleChange(e){
        let value = (e.target.value)
		setNewIncident({ ...newIncident, [e.target.name]: value });
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
			<FormControl className='form-style'>
				<FormLabel><h2>{symptoms}</h2></FormLabel>
                

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
			{!noEmptyFields && <p className='form-remind'>* Please fill all</p>}
			{noEmptyFields && (
				<LinkButton text="Submit" link="/symptoms" onClick={handlePost} />
			)}
		</div>
	);
});



