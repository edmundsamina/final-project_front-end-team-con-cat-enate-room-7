import React, { useState,useEffect } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'
import NavBar from '../../../Components/navBar'
import LinkButton from '../../../Components/linkButton'
import { nanoid } from 'nanoid/non-secure'
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000"

export async function getServerSideProps(context){

  const id = context.params.pets
const response = await fetch(`${url}/pets?pet_id=${id}`)
  const data = await response.json()
 return {props:{pet:data.payload[0]}}
  }

export default withPageAuthRequired (function AddSymptom({pet}) {


    const [submission,setSubmission] = useState({
        user_id: pet.user_id,
        pet_id: pet.pet_id,
        incident_id: nanoid(10),
        symptoms: "",
        symptoms_id: nanoid(10),
        date: "",
        time: "",
        description: ""
    })

    // const [noEmptyFields, setNoEmptyFields] = useState(false)

    //  function handleChange(e){
    //     let value = (e.target.value).toString()
    //     setSubmission({ ...submission, [e.target.name]: value });
    //     let entries = Object.values(submission);
    //     for (let i = 0; i < entries.length; i++) {
    //       if (entries[i] === "" || entries[i] === undefined) {
    //         setNoEmptyFields(false)
    //         return
    //       } 
        
    //     }
    //     setNoEmptyFields(true)
    //  }

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
        const response = await fetch(`${url}/symptoms`, {
            method: "POST",
            body: JSON.stringify(submission),
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
            <FormControl className='form-style'>
            <FormLabel><h2>Add Symptom</h2></FormLabel>
                <Input placeholder='Symptom' name="symptoms" value={submission.symptoms} onChange={handleChange}/>
                <Input placeholder='Date' type="date" name="date" value={submission.date} onChange={handleChange}/>
                <Input placeholder='Time' type="time" name="time" value={submission.time} onChange={handleChange}/>
                <Input placeholder='Description' name="description" value={submission.description} onChange={handleChange}/>
            </FormControl>
            {!noEmptyFields && <p className='form-remind'>* Please fill all</p>}
            {noEmptyFields && <LinkButton text="Add" link={{pathname:`./`, query:{pets:`${pet.pet_id}`}}} onClick={handlePost}/>}
        </div>
    )
}
)