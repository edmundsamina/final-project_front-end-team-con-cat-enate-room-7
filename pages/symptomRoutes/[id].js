import React from "react";

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";

export const getStaticPaths = async () => {
  const res = await fetch(`${url}/symptoms`);
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
  const id = context.params.id;
  const res = await fetch(`${url}/symptoms/` + id);
  const data = await res.json();

  return {
    props: {incidents: data}
  }
}


const Details = () => {
  return (
    <div>
      <h1>Details</h1>
    </div>
  );
}

export default Details;
