import React from "react";
import Hamburger from "./hamburger.js";
import Image from "next/image.js";
import IndexPage from "../Components/head"

export default function NavBar() {
  return (
    <div className="navbar">
      <IndexPage text="Care-Full"/>
      <Image src="/../public/conCAT.png" alt="Care-Full Logo" width={30} height={30} />
      <h2>are-Full</h2>
      <Hamburger />
    </div>
  );
}
