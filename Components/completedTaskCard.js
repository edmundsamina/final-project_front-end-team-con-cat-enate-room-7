import React from "react";
import DeleteButton from "../Components/deleteButton";

const CompletedTaskCard = ({ title, date }) => {
	return (
		<div className="completedtaskcard">
			<DeleteButton />
			<h2>{title}</h2>
			<p>Due: {date}</p>
			<br />
			
		</div>
	);
};

export default CompletedTaskCard;
