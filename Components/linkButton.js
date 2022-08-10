import React from 'react'
import {Button} from '@chakra-ui/react'
import Link from 'next/link'

const LinkButton = ({text,link,onClick}) => {
    return (
        <div data-testid="updateButton" className='linkbutton'>
          <Link href={link}>
            <Button className="linkbutton" onClick={onClick}>{text} </Button>
          </Link>
        </div>
    )
}

export default LinkButton