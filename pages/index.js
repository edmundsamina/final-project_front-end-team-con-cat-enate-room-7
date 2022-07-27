import AddButton from '../Components/addButton'
import NavBar from '../Components/navBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <AddButton text="Add"/>
    </div>
  )
}
