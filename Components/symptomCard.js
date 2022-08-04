import React from "react";
import DeleteButton from "../Components/deleteButton";
import LinkButton from "../Components/linkButton";

const SymptomCard = ({ onDelete, name, link, data }) => {
  return (
    <div className="symptomcard">
      <DeleteButton onDelete={()=>onDelete(data)}/>
      <h2>{name}</h2>
      <LinkButton text="Details" link={link} />
    </div>
  );
};

export default SymptomCard;
