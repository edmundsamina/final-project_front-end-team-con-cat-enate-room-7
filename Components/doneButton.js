import React from "react";
import { Button } from "@chakra-ui/react";


const DoneButton = ({ text, onClick }) => {
	return (
		<div className="linkbutton">
			
				<Button bgColor={"roots.100"} className="linkbutton" onClick={onClick}>
					{text}
				</Button>
			
		</div>
	);
};

export default DoneButton;
