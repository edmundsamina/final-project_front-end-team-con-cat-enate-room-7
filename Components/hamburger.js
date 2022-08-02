import React from 'react'
import {HamburgerIcon} from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
  } from '@chakra-ui/react'
import Link from 'next/link'
import styles from '../styles/Burger.module.css'

const Hamburger = () => {
    return (
      <div data-testid="hamburger" className='fixright'>
        <Menu>
  <MenuButton as={Button} rightIcon={<HamburgerIcon />} className={styles.menubutton}/>
  <MenuList className={styles.menu}>
  <Link href= "/pets">
    <MenuItem>Home</MenuItem>
  </Link>
  <Link href= "/404">
    <MenuItem>Change Pet Info</MenuItem>
  </Link>
  <Link href= "/symptoms">
    <MenuItem>View Symptoms</MenuItem>
  </Link>
  <Link href= "/schedule">
    <MenuItem>Check Schedule</MenuItem>
  </Link>
  <Link href= "/history">
    <MenuItem>View History</MenuItem>
  </Link>
  <Link href= "/404">
    <MenuItem>Book Appointment</MenuItem>
  </Link>
  <Link href= "/">
    <MenuItem>Sign Out</MenuItem>
  </Link>
  </MenuList>
</Menu>
</div>
    )
}

export default Hamburger
