
import React from "react";
import NavBar from "../Components/navBar.js";
import LinkButton from '../Components/linkButton'
import SymptomDetailsCard from '../Components/symptomDetailsCard'


const SymptomDetailsPage = () => {
 
  return (
    <main>
      <NavBar />
      <div className="m10">
         <h2 className="text-center">Symptom Name</h2>
         <SymptomDetailsCard/>
      </div>
      <LinkButton text="Update" link="/symptomDetails"/> 
    </main>
  );
};

export default SymptomDetailsPage;

