import AddButton from '../Components/addButton'
import NavBar from '../Components/navBar'
import styles from '../styles/Home.module.css'
import SymptomCard from '../Components/symptomCard'
import LinkButton from '../Components/linkButton'

export default function Home() {

  function onClick (){
    console.log("I am here!")
  }
  return (
    <div className={styles.container}>
      <NavBar />
    </div>
  )
}
