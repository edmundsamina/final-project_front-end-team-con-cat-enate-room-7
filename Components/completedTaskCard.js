import React from "react";
import DeleteButton from "../Components/deleteButton";

const CompletedTaskCard = ({ title, date, id, onDelete }) => {
	return (
		<div className="completedtaskcard" id={id}>
			<DeleteButton onDelete={()=>onDelete(id)}/>
			<h2>{title}</h2>
			<p>Due: {date}</p>
			<br />
			
		</div>
	);
};

export default CompletedTaskCard;
