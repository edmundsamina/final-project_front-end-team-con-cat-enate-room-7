import React from 'react'
import {HamburgerIcon} from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import Link from 'next/link'

const Hamburger = () => {
    return (
        <Menu>
  <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
    Actions
  </MenuButton>
  <MenuList>
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
  <Link href= "/404">
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
    )
}

export default Hamburger