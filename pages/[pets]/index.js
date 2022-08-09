
import React from "react";
import NavBar from "../../Components/navBar.js";
import Image from "next/image.js";
import PetButton from "../../Components/petButton"
import { withPageAuthRequired } from "@auth0/nextjs-auth0";



const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000"

export async function getServerSideProps(context){

  const id = context.params.pets
const response = await fetch(`${url}/pets?pet_id=${id}`)
  const data = await response.json()
 return {props:{pet:data.payload[0]}}
  }


export default withPageAuthRequired (function SchedulePage({pet}) {
 
  return (
    <main>
      <NavBar pet={pet} />
      <div className="m10"></div>
      <h2 className="ml10">{pet.name}</h2>
      {/* <Image
          className="home-image"
          src={require("../../public/mock_photo.jpg")}
          alt="Picture of cat and dog"
          layout="responsive"
        /> */}
        <div className="hero-banner">
          <Image
            src={require("/public/line_black.png")}
            alt="Picture of cat and dog"
          />
          </div>

      <div className="m10-1">
          <PetButton text="Change Pet Info" link={`${pet.pet_id}/updatePetDetails`} />
          <PetButton text="View Symptoms" link={`${pet.pet_id}/symptoms`}/>
          <PetButton text="Check Schedule" link={`${pet.pet_id}/schedule`}/>
          <PetButton text="View History" link={`${pet.pet_id}/history`}/>
          <PetButton text="Useful Links" link={`${pet.pet_id}/usefulLinks`}/>
      </div>
    </main>
  );
}
)



