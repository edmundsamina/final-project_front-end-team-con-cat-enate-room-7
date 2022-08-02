import React from "react";
import DoneButton from "./doneButton";
import DeleteButton from "../Components/deleteButton";

const ScheduleCard = ({ onClick, onDelete, data }) => {
	const dateString = data.date;
	const [year, month, day] = dateString.split("-" || "/");
	return (
		<div className="schedulecard" data={data}>
			<DeleteButton onDelete={() => onDelete(data)} />
			<h2>{data.task}</h2>
			<p>Due: {`${day}/${month}/${year}`}</p>
			<br />
			<DoneButton text="Done" onClick={() => onClick(data)} />
		</div>
	);
};

export default ScheduleCard;
