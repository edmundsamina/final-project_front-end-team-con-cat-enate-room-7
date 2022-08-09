import React from 'react';
import NavBar from '../../Components/navBar';
import CompletedTaskCard from '../../Components/completedTaskCard';
import { useEffect, useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Loader from '../../Components/loader';
import InfoModal from '../../Components/modal';
import NoDataCard from '../../Components/noDataCard';

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
			let newArray = data.payload.filter((object) => object.completed === true)
			setData(newArray);
		};

		fetchData()
			.catch(console.error);
	}, []);

    useEffect(() => {
		
		const fetchData = async () => {
			const response = await fetch(`${url}/reminders?pet_id=${pet.pet_id}`);
			const data = await response.json();
			let newArray = data.payload.filter((object) => object.completed === true)
			setData(newArray);
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
			.then((data))
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
		<div className="m10"> 
		<InfoModal title="Reminder History- Info" text="Welcome to the History Page. Here you will find a list of all the reminders you have completed. There isn't much to do on this page, it is only here to provide an organised record for any vet appointments you may have." />
				<h2 className="text-center">Reminder History</h2>
				<h2>{pet.name}</h2>
				{!data[0] && <NoDataCard text="You haven't completed anything in the Check Schedule page yet. Once you have pressed Done on some of your reminders you will see them here." />}
				{data.map((filteredData) => (
						<CompletedTaskCard
							key={filteredData.reminder_id}
							data={filteredData}
							onDelete={onDelete}
						/>
                        ))}
        </div> 
		</div>      
        </main>
    )
}
)

	// if (data.length === 0) {
	// 	return (
	// 		<main>
	// 		<NavBar pet={pet}/>  
	// 		<div className="m10"> 
	// 		<div className="history-card">
	// 		<InfoModal title="Reminder History- Info" text="Welcome to the History Page. Here is a record of all the reminders you have completed in order for you keep a track of things easier. There isn't much to do on this page, it is only here to help keep things easier for any vet appointments you may have." />
	// 				<h2 className="text-center">Reminder History</h2>
	// 				<h2>{pet.name}</h2>
	// 				<NoDataCard text="You haven't completed anything in the Check Schedule page yet. Once you have pressed Done on some of your reminders you will see them here" />
	// 		</div>       
	// 		</div>
	// 		</main>
	// 	)
	// }