import React from "react";
import NavBar from "../../../Components/navBar.js";
import AddButton from "../../../Components/addButton.js";
import Link from "next/link";
import SymptomCard from "../../../Components/symptomCard";
import { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Loader from "../../../Components/loader.js";
import InfoModal from "../../../Components/modal.js";
import NoDataCard from "../../../Components/noDataCard.js";

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000"

export async function getServerSideProps(context){

  const id = context.params.pets
  const response = await fetch(`${url}/pets?pet_id=${id}`)
  const data = await response.json()
     return {props:{pet:data.payload[0]}}
}

export default withPageAuthRequired (function SymptomPage({pet}) {
  // const array = [{"symptoms":"Dodgy foot","symptoms_id":"1234567890","date":"120722"},
  //                {"symptoms":"Red hand","symptoms_id":"122124112","date":"230722"},
  //                {"symptoms":"Small Head","symptoms_id":"12314410","date":"220822"}]

  const [data, setData] = useState();
  const [newData, setNewData] = useState();
  const [stateCount, setStateCount] = useState(0);

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      await delay(500)
      const response = await fetch(`${url}/symptoms/${pet.pet_id}`);
      const data = await response.json();
      setData(data.payload);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      await delay(500)
      const response = await fetch(`${url}/symptoms/${pet.pet_id}`);
      const data = await response.json();
      setData(data.payload);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [stateCount]);

  // useEffect(() => {
  //   function removeDuplicates() {
  //     if (data) {
  //       let unique = [...new Set(data.map((item) => item.symptoms))];
  //       console.log(unique)
  //       let uniqueNoNull = []
  //       for (let i = 0; i < unique.length; i++){
  //         if (unique[i]){
  //           uniqueNoNull.push(unique[i])
  //         }
  //       }
  //       setNewData(uniqueNoNull);
  //     }
  //   }
  //   removeDuplicates();
  // }, [data]);

  useEffect(() => {
    function removeDuplicates() {
      if(data){
        let uniqueSymptomsId = []
        let uniqueSymptoms = []
       for (let i=0; i < data.length; i++){
          if (data[i]  && uniqueSymptomsId.includes(data[i].symptoms_id)===false){
            uniqueSymptomsId.push(data[i].symptoms_id)
            uniqueSymptoms.push(data[i].symptoms)
          }
       }
       let unique = []
       for (let i = 0; i < uniqueSymptomsId.length; i++){
        unique.push({symptoms_id:uniqueSymptomsId[i],symptoms:uniqueSymptoms[i]})
       }
       setNewData(unique)
      }
    }
    removeDuplicates();
  }, [data]);

  async function onDelete(data) {
		await fetch(`${url}/symptoms/${data.symptoms_id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json)
			.then((data) => console.log(data))
			.then(() => {
				setStateCount((c) => c + 1);
			});
	}

  if (!data || !newData) {
    return <Loader/>;
  }
  
  if (newData.length === 0) {
    return (
      <main className="m10">
        <NavBar pet={pet}/>
          <InfoModal title="Symptoms Info" text="Here is the symptoms page, you can add any symptom your pet has displayed by pressing the Add Button (+) and filling out the form. Add more incidents of the same symptom by pressing 'Details' to keep track of how your pet is doing"/>
            <h2 className="text-center">Symtpoms</h2>
            <h2>{pet.name}</h2>
              <div>
                <NoDataCard text="You haven't added any symptoms yet. Press the Add Button below to get started"/>
              </div>
         <AddButton text="Add Symptom" href={{pathname:`symptoms/addSymptom`, query:{pets:`${pet.pet_id}`}}} />
       </main>
    )
  }

  return (
    <main className="m10">
      <NavBar pet={pet}/>
      <InfoModal title="Symptoms Info" text="Here is the symptoms page, you can add any symptom your pet has displayed by pressing the Add Button (+) and filling out the form. Add more incidents of the same symptom by pressing 'Details' to keep track of how your pet is doing"/>
      <h2 className="text-center">Symtpoms</h2>
      <h2>{pet.name}</h2>
      <div>
        {newData.map((item) => {
          return (
            <SymptomCard
              key={item.symptoms_id}
              name={item.symptoms}
              link={{pathname:`symptoms/${item.symptoms_id}`, query:{pets:`${pet.pet_id}`}}}
              data={item}
              onDelete={onDelete}
            />
          );
        })}
      </div>

      <AddButton text="Add Symptom" href={{pathname:`symptoms/addSymptom`, query:{pets:`${pet.pet_id}`}}} />
    </main>
  );
}
)
