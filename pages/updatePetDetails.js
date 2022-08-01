import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select
  } from '@chakra-ui/react'
import NavBar from '../Components/navBar'
import LinkButton from '../Components/linkButton'
import { nanoid } from 'nanoid/non-secure'

const url = process.env.NEXT_PUBLIC_DB_URL
const UpdatePetDetails = () => {

    const user_id = "3"
    const pet_id ="5"

    const [submission,setSubmission] = useState({
        user_id: user_id,
        pet_id: pet_id,
        name: "",
        species: true,
        breed: "",
        age: 0,
        weight: 0
    })

    const [noEmptyFields, setNoEmptyFields] = useState(false)

     function handleChange(e){
        let value = (e.target.value).toString()
        setSubmission({ ...submission, [e.target.name]: value });
        let entries = Object.values(submission);
        for (let i = 0; i < entries.length; i++) {
          if (entries[i] === "" || entries[i] === undefined) {
            setNoEmptyFields(false)
            return
          } 
        
        }
        setNoEmptyFields(true)
     }

    async function handlePost(){
        const response = await fetch(`${url}/pets/${pet_id}`, {
            method: "PUT",
            body: JSON.stringify(submission),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        const data = response.json()
        console.log(data.rows)
    }

    function selectChange(e) {
		setSubmission({ ...submission, species: e.target.value });
	}

    return (
        <div>
            <NavBar />

            <FormControl className='form-style'>
            <FormLabel><h2>Pet Details</h2></FormLabel>
                <Input placeholder='Name' name="name" value={submission.name} onChange={handleChange}/>
                <Input placeholder='Breed' name="breed" value={submission.breed} onChange={handleChange}/>

				<Select onChange={selectChange} placeholder="Species" variant='flushed' borderColor='var(--main-color)' borderBottom="2px">
					<option value={true}>Cat</option>
					<option value={false}>Dog</option>
				</Select>

                <Input placeholder='Age' name="age" value={submission.age} onChange={handleChange}/>
                <Input placeholder='Weight' name="weight" value={submission.weight} onChange={handleChange}/>
            </FormControl>
            {noEmptyFields && <LinkButton text="Update" link="/pets" onClick={handlePost}/>}
        </div>
    )
}

export default UpdatePetDetails