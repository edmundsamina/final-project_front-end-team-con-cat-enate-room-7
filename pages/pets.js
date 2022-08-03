
import React from "react";
import NavBar from "../Components/navBar.js";
import Image from "next/image.js";
import PetButton from "../Components/petButton"
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired (function SchedulePage() {
 
  return (
    <main>
      <NavBar />
      <Image
          className="home-image"
          src={require("./../public/mock_photo.jpg")}
          alt="Picture of cat and dog"
          layout="responsive"
        />
      <div className="m10">
          <PetButton text="Change Pet Info" link=""/>
          <PetButton text="View Symptoms" link="/symptomRoutes"/>
          <PetButton text="Check Schedule" link="/schedule"/>
          <PetButton text="View History" link=""/>
          <PetButton text="Book Appointment" link=""/>
      </div>
    </main>
  );
}
)



