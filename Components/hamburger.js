import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Switch } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/Burger.module.css";
import { useState } from "react";



const Hamburger = ({pet}) => {

  const [colourBlind, setColourBlind] = useState(false)

  function changeColour(e){
    if (colourBlind === false){
      var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    r.style.setProperty('--main-color', '#122746');
    r.style.setProperty('--second-color', '#8ea3c6');
    setColourBlind(true)
    } else{
      var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    r.style.setProperty('--main-color', '#448FFF');
    r.style.setProperty('--second-color', '#B2D1FF');
    setColourBlind(false)
    }
  }


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
  <MenuDivider />
  <div className="colour-toggle">
    <label>Colourblind Mode</label>
    <Switch onChange={changeColour} value={colourBlind}></Switch>
  </div>
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
    <div className="colour-toggle">
    <label>Colourblind Mode</label>
    <Switch onChange={changeColour} value={colourBlind}></Switch>
  </div>
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
