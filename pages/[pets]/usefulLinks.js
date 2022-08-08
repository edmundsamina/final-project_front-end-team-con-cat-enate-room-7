import React from 'react';
import NavBar from '../../Components/navBar.js';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import UsefulLinkCard from '../../Components/usefulLinkCard.js';
import catUsefulLinks from '../../libs/catUsefulLinks.js';

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000"

export async function getServerSideProps(context){

  const id = context.params.pets
const response = await fetch(`${url}/pets?pet_id=${id}`)
  const data = await response.json()
 return {props:{pet:data.payload[0]}}
  }

export default withPageAuthRequired (function UsefulLinks({pet},catUsefulLinks) {
  console.log(catUsefulLinks)
  return (
        <main className='links-page'>
            <NavBar pet={pet}/>
            <div>
            {catUsefulLinks.map((link) => {
              return (
            <UsefulLinkCard key={link.title} href={link.link} title={link.title} src={link.image} alt='' text={link.text}/>
            );
        })}
            </div>
        </main>
    )
}
)