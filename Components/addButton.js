import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import Link from "next/link";

const AddButton = ({ text, href }) => {
  return (
    <div className="addButton">
      <Link href={href}>
        <IconButton
          icon={<AddIcon color="roots.0" />}
          borderRadius="50"
          bgColor={"roots.100"}
          zIndex="1"
          height="5vw"
          width="5vw"
        />
      </Link>
      <h3 className="addText">{text}</h3>
    </div>
  );
};

export default AddButton;

