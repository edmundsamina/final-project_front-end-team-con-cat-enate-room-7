import React from 'react'
import LinkButton from '../Components/linkButton'
import DeleteButton from '../Components/deleteButton'

const ScheduleCard = () => {
    return (
        <div className='schedulecard'>
            <DeleteButton />
            <h2>Flea Treatment</h2>
            <p>Due: 2022/08/12</p>
            <br/>
            <LinkButton text="Update" link="/symptomDetails"/> 
        </div>
    )
}

export default ScheduleCard