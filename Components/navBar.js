import React from "react";
import Hamburger from "./hamburger.js";
import Image from "next/image.js";
import IndexPage from "../Components/head"
import Link from "next/link";
import BackButton from "./backButton.js";
import Head from "next/head.js";

export default function NavBar({pet}) {
  return (
    <div className="navbar">
      <Head>
        <title>Care-Full</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {/* <Image src={require("./../public/conCAT.png")} alt="Care-Full Logo" width={30} height={30} />
      <h2>are-Full</h2> */}
      <BackButton/>
      <Link href="/">
      <a>
        <div className="logo-box">
          <Image src={require("./../public/clear_logo.png")} alt="Care-Full Logo" />
        </div>
        </a>
      </Link>
      <Hamburger pet={pet}/>
    </div>
  );
}
