import React from 'react';
import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";


const BackButton = () => {
  const router = useRouter();
    return (
        <div className="backButton">
          <IconButton
            icon={<ChevronLeftIcon  boxSize={"3em"} />}
            onClick={() => router.back()}
            bgColor={"white"}
            zIndex="100"
          />
      </div>
    )
}

export default BackButton