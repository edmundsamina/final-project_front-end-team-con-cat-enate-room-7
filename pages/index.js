import AddButton from "../Components/addButton";
import NavBar from "../Components/navBar";
import styles from "../styles/Home.module.css";
import SymptomCard from "../Components/symptomCard";
import LinkButton from "../Components/linkButton";
import Image from "next/image";
import PetCard from "../Components/PetCard";
import { useEffect, useState } from "react";
import { useUser, useAuth0 } from "@auth0/nextjs-auth0";
import Router from "next/router";
import Link from "next/link";
import Loader from "../Components/loader";


const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";

export default function Home() {
  //Logic for login/logout with auth0
  const { user, error, isLoading } = useUser();

  const [data, setData] = useState();
  const [userID, setUserID] = useState("");
  
  const delay = ms => new Promise(
		resolve => setTimeout(resolve, ms)
	  );
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
      await delay(500)
      if (userID){
        const response = await fetch(`${url}/pets/${userID}`);
        const data = await response.json();
        setData(data.payload);
      }
		};

		// call the function
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, [userID]);

  useEffect(() => {
		function getId(user) {
			if (user) {
				let string = user.sub;
				let splitarray = string.split("|");
				console.log(splitarray);
				setUserID(splitarray[1]);
			}
		}
		getId(user);
	}, [user]);


	if (!data) {
		return <Loader/>;
	}

  if (user) {
    console.log(user.sub);
    return (
      <main>
        <NavBar pet={false}/>
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
              return <PetCard key={index} name={item.name} image={images} petId={item.pet_id} />;
            })}
          </div>
          
          <AddButton text="Add Pet" href="/addPet" />
        </div>
      </main>
    );
  }
  if (!user) {
    return Router.push("/api/auth/login");
  }
}
