
import React from "react";
import NavBar from "../Components/navBar.js";
import Image from "next/image.js";
import PetButton from "../Components/petButton"

const SchedulePage = () => {
 
  return (
    <main>
      <NavBar />
      <Image src={require("./../public/conCAT.png")} alt="Care-Full image" width={30} height={30} />
      <div className="m10">
          <PetButton text="Change Pet Info" link=""/>
      </div>
    </main>
  );
};

export default SchedulePage;

