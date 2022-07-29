import React from 'react'
import DoneButton from './doneButton'
import DeleteButton from '../Components/deleteButton'

const ScheduleCard = ({onClick, title, date, id, onDelete}) => {
    return (
        <div className='schedulecard' id={id}>
            <DeleteButton onDelete={()=>onDelete(id)}/>
            <h2>{title}</h2>
            <p>Due: {date}</p>
            <br/>
            <DoneButton text="Done" onClick={()=>onClick(id)}/> 
        </div>
    )
}

export default ScheduleCard