import React from "react";
import NavBar from "../../Components/navBar.js";
import AddButton from "../../Components/addButton.js";
import Link from "next/link";
import SymptomCard from "../../Components/symptomCard";
import { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Loader from "../../Components/loader.js";

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";

export default withPageAuthRequired (function SymptomPage() {
  // const array = [{"symptoms":"Dodgy foot","symptoms_id":"1234567890","date":"120722"},
  //                {"symptoms":"Red hand","symptoms_id":"122124112","date":"230722"},
  //                {"symptoms":"Small Head","symptoms_id":"12314410","date":"220822"}]

  const [data, setData] = useState();
  const [newData, setNewData] = useState();

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      await delay(500)
      const response = await fetch(`${url}/symptoms`);
      const data = await response.json();
      setData(data.payload);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

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
		await fetch(`${url}/reminders/${data.symptoms_id}`, {
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

  return (
    <main>
      <NavBar />

      <div className="m10">
        {newData.map((item) => {
          return (
            <SymptomCard
              key={item.symptoms_id}
              name={item.symptoms}
              link={"/symptoms/" + item.symptoms_id}
              data={item}
              onDelete={onDelete}
            />
          );
        })}
      </div>

      <AddButton text="Add Symptom" href="/addSymptom" />
    </main>
  );
}
)
