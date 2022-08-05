import React from "react";
import Hamburger from "./hamburger.js";
import Image from "next/image.js";
import IndexPage from "../Components/head"
import Link from "next/link";
import InfoModal from "./modal.js";

export default function PetNavBar({pet}) {
  return (
    <div className="navbar">
    <InfoModal title="Pet Page- Info" text="Welcome to your Pet Page, here you can start adding your pets that you would like to tack using this app. To begin press the Add Button at the bottom of the screen and fill in some information about your pet. You will be re-directed back to this page and will see a card with your pet's name on it. Press that card to continue."/>
      <IndexPage text="Care-Full"/>
      {/* <Image src={require("./../public/conCAT.png")} alt="Care-Full Logo" width={30} height={30} />
      <h2>are-Full</h2> */}
      <Link href="/">
        <div className="logo-box">
          <Image src={require("./../public/clear_logo.png")} alt="Care-Full Logo" />
        </div>
      </Link>
      <Hamburger pet={pet}/>
    </div>
  );
}