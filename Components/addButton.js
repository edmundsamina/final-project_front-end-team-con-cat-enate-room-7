import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import Link from "next/link";

const AddButton = ({ href }) => {
  return (
    <div className="addButton">
      <Link href={href}>
        <IconButton
          icon={<AddIcon color="roots.0" w={8} h={8} />}
          isRound="true"
          bgColor={"roots.100"}
          zIndex="1"
          height="15vw"
          width="15vw"
          title="Add an entry"
        />
      </Link>
    </div>
  );
};

export default AddButton;
