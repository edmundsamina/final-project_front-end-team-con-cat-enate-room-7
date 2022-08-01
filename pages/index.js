import AddButton from "../Components/addButton";
import NavBar from "../Components/navBar";
import styles from "../styles/Home.module.css";
import SymptomCard from "../Components/symptomCard";
import LinkButton from "../Components/linkButton";
import Image from "next/image";
import PetCard from "../Components/PetCard";

export default function Home() {
  function onClick() {
    console.log("I am here!");
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
        <PetCard name="Fluffy" image="pet-card-cat.png" />
      </div>
    </main>
  );
}
