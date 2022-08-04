import React from 'react';
import Link from "next/link";
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const BackButton = () => {
    return (
        <div className="backButton">
        <Link href="./">
          <IconButton
            icon={<ChevronLeftIcon color="roots.50" height="15vw"
            width="15vw" />}
            bgColor={"white"}
            zIndex="100"
          />
        </Link>
      </div>
    )
}

export default BackButton