import React from "react";
import NavBar from "../Components/navBar.js";
import Image from "next/image.js";
import PetButton from "../Components/petButton"
import Loading from "../Components/loading.js";

const SchedulePage = () => {
 
  return (
    <main>
      <NavBar />
      <Image src={require("./../public/mock_photo.jpg")} alt="Care-Full image" />
      <div className="m10">
          <PetButton text="Change Pet Info" link=""/>
          <Loading />
      </div>
    </main>
  );
};

export default SchedulePage;
