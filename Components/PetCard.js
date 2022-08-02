import React from "react";
import Image from "next/image";

function PetCard({ image, name }) {
  return (
    <div className="pet-card">
      <Image src={require(`./../public/${image}`)} alt="Care-Full Logo" />
      <h2>{name}</h2>
    </div>
  );
}

export default PetCard;
