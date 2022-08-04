import React from "react";
import LinkButton from '../../../../Components/linkButton'
import SymptomDetailsCard from '../../../../Components/symptomDetailsCard'
import NavBar from "../../../../Components/navBar.js";
import { useUser } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";



const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";


export const getStaticPaths = async () => {
  const petId = "1234567890" //To be handed in as a prop
  const res = await fetch(`${url}/symptoms/${petId}`);
  const data = await res.json();
  function removeNulls(data){
    let newArray = [];
    for(let i = 0; i<data.length; i++){
      let valuesArray = Object.values(data[i]);
      if (!valuesArray.includes(null) && !valuesArray.includes(undefined)){
        newArray.push(data[i])
      }
    }
    return newArray
  }
  let validData = removeNulls(data.payload)
  const paths = validData.map(symptoms => {
      return {
  params: { id: symptoms.symptoms_id.toString() }
}
})

return {
  paths,
  fallback: false
}
}

export const getStaticProps = async (context) => {
  const symptomsId = context.params.id;
  const petId = "1234567890" //To be handed in as a prop
  const res = await fetch(`${url}/symptoms/${petId}?symptoms_id=${symptomsId}`);
  const data = await res.json();
  return {
    props: {incidents: data.payload}
  }
}


export default withPageAuthRequired (function Details({incidents}) {
  const { user, error, isLoading } = useUser();
  console.log(user.sub)
  return (
		<main>
			<NavBar />
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
				<LinkButton text="Add incident" link="/addIncident" />
			</div>
		</main>
	);
}
)
