import React from "react";

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
  console.log(data.payload)
  return {
    props: {incidents: data.payload}
  }
}


const Details = ({incidents}) => {
  return (
    <div>
      <h1>Details</h1>
      {incidents.map((card)=>{
        return (<div key={card.incident_id}>
          <h2>{card.description}</h2>
          <h3>{card.date}</h3>
          <h3>{card.time}</h3>
        </div>)
      })}
    </div>
  );
}

export default Details;
