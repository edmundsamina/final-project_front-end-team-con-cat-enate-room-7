import React from 'react'
import DoneButton from './doneButton'
import DeleteButton from '../Components/deleteButton'

const ScheduleCard = ({onClick, onDelete, data}) => {
    return (
        <div className='schedulecard' data={data}>
            <DeleteButton onDelete={()=>onDelete(data)}/>
            <h2>{data.task}</h2>
            <p>Due: {data.date}</p>
            <br/>
            <DoneButton text="Done" onClick={()=>onClick(data)}/> 
        </div>
    )
}

export default ScheduleCard