import React from "react";
import Hamburger from "./hamburger.js";
import Image from "next/image.js";

export default function NavBar() {
  return (
    <div className="navbar">
      <Image src="/../public/conCAT.png" alt="Care-Full Logo" width={30} height={30} />
      <h2>are-Full</h2>
      <Hamburger />
    </div>
  );
}
