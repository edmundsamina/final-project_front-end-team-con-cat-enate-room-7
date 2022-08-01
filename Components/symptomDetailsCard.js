import React from 'react'

const SymptomDetailsCard = ({date,time,description}) => {
    return (
        <div className='detailsCard'>
            <h4>Date</h4>
            <p>{date}</p>
            <br/>
            <h4>Time</h4>
            <p>{time}</p>
            <br/>
            <h4>Description</h4>
            <p>{description}</p>
        </div>
    )
}

export default SymptomDetailsCard
