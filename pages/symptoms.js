import React from 'react'
import NavBar from "../Components/navBar.js";
import AddButton from '../Components/addButton.js';
import Link from 'next/link';
import SymptomCard from "../Components/symptomCard"

const SymptomPage = () => {
    return (
        <main>
            <NavBar/>
             <div className='m10'>
                <SymptomCard name="Symptom Name"/>
             </div>
            <AddButton text="Add Symptom" href="/addSymptom"/>
        </main>
    )
}

export default SymptomPage