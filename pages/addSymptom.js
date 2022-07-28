import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'
import NavBar from '../Components/navBar'
import LinkButton from '../Components/linkButton'

const url = process.env.NEXT_PUBLIC_DB_URL
const AddSymptom = () => {

    async function handlePost(body){
        const response = await fetch(`${url}/symptoms`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        const data = response.json()
        console.log(data.rows)
    }

    return (
        <div>
            <NavBar />
            <FormControl>
            <FormLabel>Add Symptom</FormLabel>
                <Input placeholder='Symptom' />
                <Input placeholder='Date' />
                <Input placeholder='Time' />
                <Input placeholder='Description' />
            </FormControl>
            <LinkButton text="Add" link="/symptoms"/>
        </div>
    )
}

export default AddSymptom