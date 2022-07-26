import React from "react";
import Hamburger from "./hamburger.js";
import Image from "next/image.js";

export default function NavBar() {
  return (
    <div>
      <Image src="/../public/conCAT.png" alt="Care-Full Logo" width={100} height={100} />
      <h2>are-Full</h2>
      <Hamburger />
    </div>
  );
}
