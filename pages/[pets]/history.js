import React from 'react';
import NavBar from '../../Components/navBar';
import CompletedTaskCard from '../../Components/completedTaskCard';
import { useEffect, useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Loader from '../../Components/loader';

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000"


export async function getServerSideProps(context){
    const id = context.params.pets
  const response = await fetch(`${url}/pets?pet_id=${id}`)
    const data = await response.json()
   return {props:{pet:data.payload[0]}}
    }

  

export default withPageAuthRequired (function HistoryPage({pet}) {
    const [stateCount, setStateCount] = useState(0);
	const [data, setData] = useState();

	// const delay = ms => new Promise(
	// 	resolve => setTimeout(resolve, ms)
	//   );
	useEffect(() => {
		
		const fetchData = async () => {
			// await delay()
			const response = await fetch(`${url}/reminders?pet_id=${pet.pet_id}`);
			const data = await response.json();
			setData(data.payload);
		};

		fetchData()
			.catch(console.error);
	}, []);

    useEffect(() => {
		
		const fetchData = async () => {
			const response = await fetch(`${url}/reminders?pet_id=${pet.pet_id}`);
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
		return <Loader/>;
	}

    return (
        <main>
        <NavBar pet={pet}/>     
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