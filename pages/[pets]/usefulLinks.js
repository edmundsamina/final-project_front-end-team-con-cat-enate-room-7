import React from 'react';
import NavBar from '../../Components/navBar.js';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000"

export async function getServerSideProps(context){

  const id = context.params.pets
const response = await fetch(`${url}/pets?pet_id=${id}`)
  const data = await response.json()
 return {props:{pet:data.payload[0]}}
  }

export default withPageAuthRequired (function UsefulLinks({pet}) {
  return (
        <main className='links-page'>
            <NavBar pet={pet}/>
        </main>
    )
}
)