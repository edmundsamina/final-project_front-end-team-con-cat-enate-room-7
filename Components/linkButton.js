import React from 'react'
import {Button} from '@chakra-ui/react'
import Link from 'next/link'

const LinkButton = ({text,link}) => {
    return (
        <div>
          <Link href={link}>
            <Button bgColor={'roots.100'} className="linkbutton">{text}</Button>
          </Link>
        </div>
    )
}

export default LinkButton