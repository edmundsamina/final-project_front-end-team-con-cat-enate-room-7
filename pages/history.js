import React from 'react';
import NavBar from '../Components/navBar';
import CompletedTaskCard from '../Components/completedTaskCard';
import { useEffect, useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";

export default withPageAuthRequired (function HistoryPage() {
    const [stateCount, setStateCount] = useState(0);
	const [data, setData] = useState();

	// const delay = ms => new Promise(
	// 	resolve => setTimeout(resolve, ms)
	//   );
	useEffect(() => {
		
		const fetchData = async () => {
			// await delay()
			const response = await fetch(`${url}/reminders`);
			const data = await response.json();
			setData(data.payload);
		};

		fetchData()
			.catch(console.error);
	}, []);

    useEffect(() => {
		
		const fetchData = async () => {
			const response = await fetch(`${url}/reminders`);
			const data = await response.json();
			setData(data.payload);
		};

		fetchData()
			.catch(console.error);
	}, [stateCount]);

    async function onDelete(data) {
		await fetch(`${url}/reminders/${data.reminder_id}`, {
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

    if (!data) {
		return <p>is loading</p>;
	}

    return (
        <main>
        <NavBar />     
        <div className="history-card">
				<h2 className="text-center">Reminder History</h2>
				{data
					.filter((object) => object.completed === true)
					.map((filteredData) => (
						<CompletedTaskCard
							key={filteredData.reminder_id}
							data={filteredData}
							onDelete={onDelete}
						/>
                        ))}
        </div>       
        </main>
    )
}
)