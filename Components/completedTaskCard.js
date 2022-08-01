import React from "react";
import DeleteButton from "../Components/deleteButton";

const CompletedTaskCard = ({ onDelete, data }) => {
	return (
		<div className="completedtaskcard">
			<DeleteButton onDelete={()=>onDelete(data)}/>
			<h2>{data.task}</h2>
			<p>Due: {data.date}</p>
			<br />
			
		</div>
	);
};

export default CompletedTaskCard;
