import React from "react";
import LinkButton from '../../../../Components/linkButton'
import SymptomDetailsCard from '../../../../Components/symptomDetailsCard'
import NavBar from "../../../../Components/navBar.js";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";



const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000"

export async function getServerSideProps(context){
	console.log(context.params)
  const pet_id = context.params.pets
  const symptoms_id = context.params.id
const response = await fetch(`${url}/symptoms/${pet_id}?symptoms_id=${symptoms_id}`)
  const data = await response.json()
 return {props:{incidents:data.payload}}
  }


export default withPageAuthRequired (function Details({incidents}) {

  return (
		<main>
			<NavBar pet={incidents[0]}/>
			<div className="m10">
				<h2 className="text-center">{incidents[0].symptoms}</h2>
				{incidents.map((card) => {
					return (
						<SymptomDetailsCard
							key={card.incident_id}
							date={card.date}
							time={card.time}
							description={card.description}
						/>
					);
          
				}
        )}		
				<LinkButton text="Add incident" link={{pathname:`${incidents[0].symptoms_id}/addIncident`, query:{pets:`${incidents[0].pet_id}`,}}} />
			</div>
		</main>
	);
}
)