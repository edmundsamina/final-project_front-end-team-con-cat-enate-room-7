import React from 'react'
import DoneButton from './doneButton'
import DeleteButton from '../Components/deleteButton'

const ScheduleCard = ({onClick, title, date, id}) => {
    return (
        <div className='schedulecard' id={id}>
            <DeleteButton />
            <h2>{title}</h2>
            <p>Due: {date}</p>
            <br/>
            <DoneButton text="Done" onClick={()=>onClick(id)}/> 
        </div>
    )
}

export default ScheduleCard