import React from 'react'
import {AddIcon} from '@chakra-ui/icons'
import {IconButton} from '@chakra-ui/react'

const AddButton = ({text}) => {
    return (
        <span>
            <IconButton icon={<AddIcon />} borderRadius="50" bgColor={'roots.mainColour'}/>
            <h3>{text}</h3>
        </span>
    )
}

export default AddButton