import React from "react";

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";

export const getStaticPaths = async () => {
  const res = await fetch(`${url}/symptoms`);
  console.log(res)
  const data = await res.json();
console.log(data);
  const paths = data.payload.map(symptoms => {
      return {
  params: { id: symptoms.symptoms_id.toString() }
}
})

return {
  paths,
  fallback: false
}
}

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch(`${url}/symptoms/` + id);
//   const data = await res.json();

//   return {
//     props: {incidents: data}
//   }
// }


const Details = () => {
  return (
    <div>
      <h1>Details</h1>
    </div>
  );
}

export default Details;
