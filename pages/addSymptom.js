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

const AddSymptom = () => {
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