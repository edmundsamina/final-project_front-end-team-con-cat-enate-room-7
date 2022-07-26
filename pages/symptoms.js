import React from 'react'
import NavBar from "../Components/navBar.js";
import AddButton from '../Components/addButton.js';
import Link from 'next/link';

const SymptomPage = () => {
    return (
        <main>
            <NavBar/>
            <AddButton text="Add Symptom" href="/addSymptom"/>
        </main>
    )
}

export default SymptomPage