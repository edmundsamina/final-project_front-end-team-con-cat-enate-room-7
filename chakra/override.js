import { extendTheme } from "@chakra-ui/react";

const overrides = {
  colors: {
    roots: {
       100: "#448FFF",
       50:"#B2D1FF",
       0:"#FFFFFF"
    },
  },
};
const theme = extendTheme(overrides);

export default theme;