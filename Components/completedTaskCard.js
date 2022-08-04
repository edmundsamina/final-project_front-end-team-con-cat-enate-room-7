import React from "react";
import DeleteButton from "../Components/deleteButton";

const CompletedTaskCard = ({ onDelete, data }) => {
	const dateString = data.date;
	const [year, month, day] = dateString.split("-" || "/");
	return (
		<div className="completedtaskcard">
			<DeleteButton onDelete={()=>onDelete(data)}/>
			<div>
			<h2>{data.task}</h2>
			</div>
			<div>
			<p>Due: {`${day}/${month}/${year}`}</p>
			</div>
			
			
		</div>
	);
};

export default CompletedTaskCard;
