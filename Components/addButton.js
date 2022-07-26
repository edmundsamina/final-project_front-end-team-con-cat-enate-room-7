import React from 'react'
import {AddIcon} from '@chakra-ui/icons'
import {IconButton} from '@chakra-ui/react'

const AddButton = ({text}) => {
    return (
        <div className="addButton">
            <IconButton icon={<AddIcon color="roots.0"/>} borderRadius="50" bgColor={'roots.100'} zIndex="1" height="5vw" width="5vw"/>
            <h3 className="addText">{text}</h3>
        </div>
    )
}

export default AddButton