import AddButton from "../Components/addButton";
import PetNavBar from "../Components/petNavBar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import PetCard from "../Components/PetCard";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Loader from "../Components/loader";
import SignInOut from "../Components/signInOut.js";
import NoDataCard from "../Components/noDataCard";


const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";


export default function Home() {
  //Logic for login/logout with auth0
  const { user } = useUser();
  const [data, setData] = useState();
  const [userID, setUserID] = useState("");
  
  //delay prevents inital fetch executing too fast upon client request
  const delay = ms => new Promise(
		resolve => setTimeout(resolve, ms)
	  );

  //uses delay before fetching backend data with autheticated userId
	useEffect(() => {
		const fetchData = async () => {
      await delay(500)
      if (userID){
        const response = await fetch(`${url}/pets/${userID}`);
        const data = await response.json();
        setData(data.payload);
      }
		};
		fetchData().catch(console.error);
	}, [userID]);

  //gets userId and turns to a string for backend use
  useEffect(() => {
		function getId(user) {
			if (user) {
				let string = user.sub;
				let splitarray = string.split("|");
				setUserID(splitarray[1]);
			}
		}
		getId(user);
	}, [user]);


  if (!user) {
    return(
      <main>
        <SignInOut/>
      </main>
    ) 
  }
	if (!data) {
		return <Loader/>;
	}

  if (user) {
    return (
      <main>
        <PetNavBar pet={false}/>
        <div className={styles.container}>
        <div className="mt4"></div>
          <div className="hero-banner">
          <Image
            src={require("/public/line_black.png")}
            alt="Picture of cat and dog"
          />
          </div>
          <div className="banner-text">
          <p>Helping owners care for their pets</p>
          <h3>since 2022</h3>
          </div>

          <div className="m10-1 flex">
            {!data[0] && <NoDataCard text="You haven't added any pets yet. Click the Add Button below to get started"/>}
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
  
}