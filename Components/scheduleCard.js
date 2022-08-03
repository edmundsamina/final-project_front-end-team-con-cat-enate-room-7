import React from "react";
import DoneButton from "./doneButton";
import DeleteButton from "../Components/deleteButton";

const ScheduleCard = ({ onClick, onDelete, data }) => {
	const dateString = data.date;
	const [year, month, day] = dateString.split("-" || "/");
	return (
		<div className="schedulecard" data={data}>
		   <DeleteButton onDelete={() => onDelete(data)} />
		   <div>
			<h2>{data.task}</h2>
		   </div>
		   <div>
			<p>Due: {`${day}/${month}/${year}`}</p>
			<DoneButton text="Done" onClick={() => onClick(data)} />
		   </div>
		</div>
	);
};

export default ScheduleCard;
