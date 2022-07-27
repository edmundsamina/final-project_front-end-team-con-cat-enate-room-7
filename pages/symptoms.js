import React from 'react'
import NavBar from "../Components/navBar.js";
import AddButton from '../Components/addButton.js';
import Link from 'next/link';
import SymptomCard from "../Components/symptomCard"
import { useEffect,useState } from 'react';


const SymptomPage = () => {
    const array = [{"symptoms":"Dodgy foot","symptoms_id":"1234567890","date":"120722"},
                   {"symptoms":"Red hand","symptoms_id":"122124112","date":"230722"},
                   {"symptoms":"Small Head","symptoms_id":"12314410","date":"220822"}]
    
     const [data, setData] = useState()

     useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
          const response = await fetch('https://care-full.herokuapp.com/symptoms/');
          const data = await response.json();
          setData(data.payload);
        }

        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
      }, [])

    if(!data){return <p>is loading</p>};

    return (
        <main>
            <NavBar/>
             <div className='m10'>

                {data.map((item) => { return (
                    <SymptomCard name={item.symptoms}/>
                )})}

             </div>
            <AddButton text="Add Symptom" href="/addSymptom"/>

            
        </main>
    )
}

export default SymptomPage