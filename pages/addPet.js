import React, { useState, useEffect } from 'react'
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
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser, useAuth0 } from "@auth0/nextjs-auth0";

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";
export default withPageAuthRequired (function AddPets() {

    const { user, error, isLoading } = useUser();

    const [userID, setUserID] = useState("");

    function getId(user) {
        if (user) {
            let string = user.sub;
            let splitarray = string.split("|");
            return(splitarray[1]);
        }
    }

    const [submission,setSubmission] = useState({
        user_id: getId(user),
        pet_id: nanoid(10),
        name: "",
        species: true,
        breed: "",
        age: "",
        weight: ""
    })

    function isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }

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
        // let value = (e.target.value)
        // setSubmission({ ...submission, [e.target.name]: value });
        setSubmission((v)=> (e.target.validity.valid ? { ...submission, [e.target.name]: e.target.value  }: v));
     }

    async function handlePost(){
        const response = await fetch(`${url}/pets`, {
            method: "POST",
            body: JSON.stringify(submission),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        const data = response.json()
    }

    function selectChange(e) {

		setSubmission((v)=> (e.target.validity.valid ? { ...submission, species: e.target.value  }: v));
	}

    useEffect(() => {
		async function getId(user) {
			if (user) {
				let string = user.sub;
				let splitarray = string.split("|");
				setUserID(splitarray[1]);
			}
		}
		getId(user);
	}, [user]);

    return (
        <main>
            <NavBar />
            <FormControl className='form-style'>
            <FormLabel><h2>Pet Details</h2></FormLabel>
                <Input placeholder='Name' name="name" type="text" value={submission.name} pattern="^[a-zA-Z ]*$" onChange={handleChange} maxLength="16"/>
                <Input placeholder='Breed' name="breed" value={submission.breed} pattern="^[a-zA-Z ]*$" onChange={handleChange} maxLength="50"/>

				<Select data-testid="Species" onChange={selectChange} placeholder="Species" variant='flushed' borderColor='var(--main-color)' borderBottom="2px">
					<option value={true}>Cat</option>
					<option value={false}>Dog</option>
				</Select>

                <Input data-testid="age"  placeholder='Age' name="age" value={submission.age} pattern="[0-9]*" onChange={handleChange} maxLength="2"/>
                <Input placeholder='Weight' name="weight" value={submission.weight} pattern="[0-9.]*" onChange={handleChange}  maxLength="5"/>
                <div className='formtext'>kg</div>
            </FormControl>
            {!noEmptyFields && <p className='form-remind'>* Please fill all</p>}
            {noEmptyFields && <LinkButton text="Add" link="/" onClick={handlePost}/>}
        </main>
    )
}
)
