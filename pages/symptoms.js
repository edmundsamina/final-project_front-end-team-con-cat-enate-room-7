import React from "react";
import NavBar from "../Components/navBar.js";
import AddButton from "../Components/addButton.js";
import Link from "next/link";
import SymptomCard from "../Components/symptomCard";
import { useEffect, useState } from "react";

const url = process.env.DB_URL ?? "http://localhost:3000";

const SymptomPage = () => {
	// const array = [{"symptoms":"Dodgy foot","symptoms_id":"1234567890","date":"120722"},
	//                {"symptoms":"Red hand","symptoms_id":"122124112","date":"230722"},
	//                {"symptoms":"Small Head","symptoms_id":"12314410","date":"220822"}]

	const [data, setData] = useState();
	const [newData, setNewData] = useState();
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const response = await fetch(`${url}/symptoms`);
			const data = await response.json();
			setData(data.payload);
		};

		// call the function
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, []);

	useEffect(() => {
		function removeDuplicates() {
			if (data) {
				let unique = [...new Set(data.map((item) => item.symptoms))];
				setNewData(unique);
			}
		}
		removeDuplicates();
	}, [data]);

	if (!data || !newData) {
		return <p>is loading</p>;
	}

	return (
		<main>
			<NavBar />
			<div className="m10">
				{newData.map((item, index) => {
					return <SymptomCard key={index} name={item} />;
				})}
			</div>
			<AddButton text="Add Symptom" href="/addSymptom" />
		</main>
	);
};

export default SymptomPage;
