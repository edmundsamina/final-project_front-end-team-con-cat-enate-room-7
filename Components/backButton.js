import React from 'react';
import Link from "next/link";
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";


const BackButton = () => {
  const router = useRouter();
    return (
        <div className="backButton">
          <IconButton
            icon={<ChevronLeftIcon color="roots.50" height="15vw"
            width="15vw" />}
            onClick={() => router.back()}
            bgColor={"white"}
            zIndex="100"
          />
      </div>
    )
}

export default BackButton