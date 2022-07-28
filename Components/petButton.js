import React from 'react'
import {Button} from '@chakra-ui/react'
import Link from 'next/link'

const PetButton = ({text,link}) => {
    return (
        <div className='petbutton'>
          <Link href={link}>
            <Button bgColor={'roots.100'}>{text}</Button>
          </Link>
        </div>
    )
}

export default PetButton