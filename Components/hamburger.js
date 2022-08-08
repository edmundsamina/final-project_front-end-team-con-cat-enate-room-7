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
  <a>
    <MenuItem>Home</MenuItem>
    </a>
  </Link>
  <Link href={`/${pet.pet_id}/updatePetDetails`}>
  <a>
    <MenuItem>Change Pet Info</MenuItem>
    </a>
  </Link>
  <Link href= {`/${pet.pet_id}/symptoms`}>
  <a>
    <MenuItem>View Symptoms</MenuItem>
    </a>
  </Link>
  <Link href= {`/${pet.pet_id}/schedule`}>
  <a>
    <MenuItem>Check Schedule</MenuItem>
    </a>
  </Link>
  <Link href= {`/${pet.pet_id}/history`}>
  <a>
    <MenuItem>View History</MenuItem>
    </a>
  </Link>
  <Link href= {`/${pet.pet_id}/usefulLinks`}>
  <a>
    <MenuItem>Useful Links</MenuItem>
    </a>
  </Link>
  <Link href= "/api/auth/logout">
  <a>
    <MenuItem>Sign Out</MenuItem>
    </a>
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
  <a>
  <MenuItem>Sign Out</MenuItem>
  </a>
</Link>
  </MenuList>
</Menu>
</div>
  )
}
}
export default Hamburger;
