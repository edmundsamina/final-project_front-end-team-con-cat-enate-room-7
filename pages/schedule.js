import React from "react";
import NavBar from "../Components/navBar.js";
import AddButton from "../Components/addButton.js";
import ScheduleCard from "../Components/scheduleCard";
import CompletedTaskCard from "../Components/completedTaskCard.js";
import { useEffect, useState } from "react";

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";

const SchedulePage = () => {
	const [stateCount, setStateCount] = useState(0);
	const [data, setData] = useState();
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const response = await fetch(`${url}/reminders`);
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
			const response = await fetch(`${url}/reminders`);
			const data = await response.json();
			setData(data.payload);
		};

		// call the function
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, [stateCount]);

	if (!data) {
		return <p>is loading</p>;
	}

	async function onClick(id) {
    console.log(id);
		await fetch(`${url}/reminders/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ completed: true }),
		})
			.then((res) => res.json)
			.then((data) => console.log(data))
			.then(() => {
				setStateCount((c) => c + 1);
			});
	}

	return (
		<main>
			<NavBar />
			<div className="m10">
				<h2 className="text-center">Check Schedule</h2>
				{data
					.filter((object) => object.completed === false)
					.map((filteredData) => (
						<ScheduleCard
            id = {filteredData.reminder_id}
							title={filteredData.task}
							date={filteredData.date}
							onClick={onClick}
						/>
					))}
			</div>
			<div className="m10">
				<h2 className="text-center">Completed Tasks</h2>
				{data
					.filter((object) => object.completed === true)
					.map((filteredData) => (
						<CompletedTaskCard
							title={filteredData.task}
							date={filteredData.date}
						/>
					))}
			</div>

			<AddButton text="Add Reminder" href="/addReminder" />
		</main>
	);
};

export default SchedulePage;
