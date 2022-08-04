import React from "react";
import Hamburger from "./hamburger.js";
import Image from "next/image.js";
import IndexPage from "../Components/head"
import Link from "next/link";

export default function PetNavBar({pet}) {
  return (
    <div className="navbar">
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