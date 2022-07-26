import { extendTheme } from "@chakra-ui/react";

const overrides = {
  colors: {
    roots: {
       " mainColor": "#448FFF",
       "secondColor":"#B2D1FF",
    },
  },
};
const theme = extendTheme(overrides);

export default theme;