import React, { useState, useEffect } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select
  } from '@chakra-ui/react'
import NavBar from '../../Components/navBar'
import LinkButton from '../../Components/linkButton'
import { nanoid } from 'nanoid/non-secure'
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000"


export async function getServerSideProps(context){
    const id = context.params.pets
  const response = await fetch(`${url}/pets?pet_id=${id}`)
    const data = await response.json()
   return {props:{pet:data.payload[0]}}
    }


export default withPageAuthRequired (function UpdatePetDetails({pet}) {


    const [submission,setSubmission] = useState({
        user_id: pet.user_id,
        pet_id: pet.pet_id,
        name: pet.name,
        species: pet.species,
        breed: pet.breed,
        age: pet.age,
        weight: pet.weight
    })

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

    async function handlePost(){
        console.log(pet.pet_id)
        const response = await fetch(`${url}/pets/${pet.pet_id}`, {
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

				<Select data-testid="Species" onChange={selectChange} placeholder="Species" variant='flushed' borderColor='var(--main-color)' borderBottom="2px">
					<option value={true}>Cat</option>
					<option value={false}>Dog</option>
				</Select>

                <Input data-testid="age" type="number" placeholder='Age' name="age" value={submission.age} onChange={handleChange} min={0}/>
                <Input type = "number" placeholder='Weight' name="weight" value={submission.weight} onChange={handleChange} min={0}/>
                <div className='formtext'>kg</div>
            </FormControl>
            {!noEmptyFields && <p className='form-remind'>* Please fill all</p>}
            {noEmptyFields && <LinkButton  text="Update" link={`/${pet.pet_id}`} onClick={handlePost}/>}
        </div>
    )
}
)