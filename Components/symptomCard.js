import React from 'react'
import DeleteButton from '../Components/deleteButton'
import LinkButton from '../Components/linkButton'

const SymptomCard = ({name,link}) => {
    return (
        <div className='symptomcard'>
          <DeleteButton />
            <h2>{name}</h2>
            <LinkButton text="Details" link="/symptomDetails"/> 
        </div>
    )
}

export default SymptomCard