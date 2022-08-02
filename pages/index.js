import AddButton from "../Components/addButton";
import NavBar from "../Components/navBar";
import styles from "../styles/Home.module.css";
import SymptomCard from "../Components/symptomCard";
import LinkButton from "../Components/linkButton";
import Image from "next/image";
import PetCard from "../Components/PetCard";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";

export default function Home() {
  //Logic for login/logout with auth0
  //   const { user, error, isLoading } = useUser();
  //   if (user) {
  //     return (
  //       <>
  //         <h1>Welcome {user.name}!</h1>
  //         <a href="/api/auth/logout">Logout</a>
  //       </>
  //     )
  //   }
  //   return <a href="/api/auth/login">Login</a>;

  const [data, setData] = useState();
  const user_id = "1234567890"; //To be passed in as a prop/context
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const response = await fetch(`${url}/pets`);
      const data = await response.json();
      setData(data.payload);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  if (!data) {
    return <p>is loading</p>;
  }

  return (
    <main>
      <NavBar />
      <div className={styles.container}>
        <Image
          className="home-image"
          src={require("./../public/mock_photo.jpg")}
          alt="Picture of cat and dog"
          layout="responsive"
        />
        <div className="m10 flex">
          {data.map((item, index) => {
            let images = "";
            if (item.species == true) {
              images = "pet-card-cat.png";
            } else {
              images = "pet-card-dog.png";
            }
            return <PetCard key={index} name={item.name} image={images} />;
          })}
        </div>
        <AddButton text="Add Pet" href="/petDetails" />
      </div>
    </main>
  );
}
