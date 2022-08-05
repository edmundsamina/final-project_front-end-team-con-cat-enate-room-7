import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function PetCard({ image, name, petId }) {
  const router = useRouter();
  function handleClick(e) {
    const petDataId = e.target.getAttribute("data-petid");
    router.push(`/${petDataId}`);
  }

  return (
    <div
      title="View pet details "
      className="pet-card"
      data-petid={petId}
      onClick={handleClick}
    >
      <Image
        src={require(`./../public/${image}`)}
        alt="Care-Full Logo"
        data-petid={petId}
        onClick={handleClick}
      />
      <h2 data-petid={petId} onClick={handleClick}>
        {name}
      </h2>
    </div>
  );
}

export default PetCard;
