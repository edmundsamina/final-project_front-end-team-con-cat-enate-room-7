import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/Burger.module.css";



const Hamburger = ({pet}) => {

  if(pet){
    return (
      <div data-testid="hamburger">
        <Menu>
  <MenuButton as={Button} rightIcon={<HamburgerIcon />} className={styles.menubutton}/>
  <MenuList className={styles.menu}>
  <Link href= "/">
    <MenuItem>Home</MenuItem>
  </Link>
  <Link href={`/${pet.pet_id}/updatePetDetails`}>
    <MenuItem>Change Pet Info</MenuItem>
  </Link>
  <Link href= {`/${pet.pet_id}/symptoms`}>
    <MenuItem>View Symptoms</MenuItem>
  </Link>
  <Link href= {`/${pet.pet_id}/schedule`}>
    <MenuItem>Check Schedule</MenuItem>
  </Link>
  <Link href= {`/${pet.pet_id}/history`}>
    <MenuItem>View History</MenuItem>
  </Link>
  <Link href= {`/${pet.pet_id}/usefulLinks`}>
    <MenuItem>Useful Links</MenuItem>
  </Link>
  <Link href= "/api/auth/logout">
    <MenuItem>Sign Out</MenuItem>
  </Link>
  </MenuList>
</Menu>
</div>
    )
}
else{
  return (
    <div data-testid="hamburger" className='fixright'>
    <Menu>
    <MenuButton as={Button} rightIcon={<HamburgerIcon />} className={styles.menubutton}/>
    <MenuList className={styles.menu}>
  <Link href= "/api/auth/logout">
  <MenuItem>Sign Out</MenuItem>
</Link>
  </MenuList>
</Menu>
</div>
  )
}
}
export default Hamburger;
