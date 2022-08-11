import React from "react";
import { Button } from "@chakra-ui/react";


const DoneButton = ({ text, onClick }) => {
	return (
		<div className="linkbutton">
			
				<Button className="doneButton" onClick={onClick}>
					{text}
				</Button>
			
		</div>
	);
};

export default DoneButton;
