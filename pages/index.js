import AddButton from "../Components/addButton";
import PetNavBar from "../Components/petNavBar";
import styles from "../styles/Home.module.css";
import SymptomCard from "../Components/symptomCard";
import LinkButton from "../Components/linkButton";
import Image from "next/image";
import PetCard from "../Components/PetCard";
import { useEffect, useState } from "react";
import { useUser, useAuth0 } from "@auth0/nextjs-auth0";
import {useRouter} from "next/router";
import Link from "next/link";
import Loader from "../Components/loader";
import SignInOut from "../Components/signInOut.js";
import NoDataCard from "../Components/noDataCard";


const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";


export default function Home() {
  //Logic for login/logout with auth0
  const { user, error, isLoading } = useUser();
  const router = useRouter()
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
          <Image
            className="home-image"
            src={require("./../public/mock_photo.jpg")}
            alt="Picture of cat and dog"
            layout="responsive"
          />
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

  // if (data.length === 0) {
  //   return (
  //     <main>
  //     <PetNavBar pet={false}/>
  //     <div className={styles.container}>
  //       <Image
  //         className="home-image"
  //         src={require("./../public/mock_photo.jpg")}
  //         alt="Picture of cat and dog"
  //         layout="responsive"
  //       />
  //       <div className="m10-1 flex">
  //         <NoDataCard text="You haven't added any pets yet. Click the Add Button below to get started"/>
  //       </div>        
  //       <AddButton text="Add Pet" href="/addPet" />
  //     </div>
  //   </main>
  //   )
  // }