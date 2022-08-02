import React from "react";
import DeleteButton from "../Components/deleteButton";

const CompletedTaskCard = ({ onDelete, data }) => {
	const dateString = data.date;
	const [year, month, day] = dateString.split("-" || "/");
	return (
		<div className="completedtaskcard">
			<DeleteButton onDelete={()=>onDelete(data)}/>
			<h2>{data.task}</h2>
			<p>Due: {`${day}/${month}/${year}`}</p>
			<br />
			
		</div>
	);
};

export default CompletedTaskCard;
