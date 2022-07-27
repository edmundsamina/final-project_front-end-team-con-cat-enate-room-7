import React from 'react'
import {CloseIcon} from '@chakra-ui/icons'
import {IconButton} from '@chakra-ui/react'

const DeleteButton = ({prop}) => {
    return (
        <div className="rightleft">
            <IconButton icon={<CloseIcon color="roots.0"/>} size='xs' isRound='true' bgColor={'roots.100'} zIndex="1" onClick={prop}/>
        </div>
    )
}

export default DeleteButton