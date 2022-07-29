import React from 'react'
import DoneButton from './doneButton'
import DeleteButton from '../Components/deleteButton'

const ScheduleCard = ({onClick, title, date}) => {
    return (
        <div className='schedulecard'>
            <DeleteButton />
            <h2>{title}</h2>
            <p>Due: {date}</p>
            <br/>
            <DoneButton text="Done" onClick={onClick}/> 
        </div>
    )
}

export default ScheduleCard