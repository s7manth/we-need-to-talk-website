import { extendTheme, defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const dividerStyle = defineStyle({
  borderWidth: "2px",
  borderStyle: "dashed",
  borderColor: "orange.500",
  borderRadius: "2px",
});

export const dividerTheme = defineStyleConfig({
  variants: { dividerStyle },
});

const headingStyle = defineStyle({
  fontFamily: "Merriweather",
  fontWeight: "bold",
});

export const headingTheme = defineStyleConfig({
  variants: { headingStyle },
});

const theme = extendTheme({
  styles: {
    global: (props: never) => ({
      body: {
        bg: mode("#f4f0e8", "#f4f0e8")(props),
      },
    }),
  },
  components: {
    Divider: dividerTheme,
    Heading: headingTheme,
  },
  colors: {
    lightsteelblue: {
      50: "#DBE8F3",
      100: "#D3E2F0",
      500: "#9EB7CD",
      600: "#859EB3",
    },
    lightmossgreen: {
      50: "#E8F3DB",
      100: "#E2F0D3",
      500: "#9EB385",
      600: "#8A9D74",
    },
    wisteria: {
      50: "#E6DBF3",
      100: "#E0D3F0",
      500: "#C1A6E0",
      600: "#9A85B3",
    },
    pastelpink: {
      50: "#F3DBDC",
      100: "#F0D3D4",
      500: "#E0A6A8",
      600: "#CD9EA0",
    },
  },
});

export default theme;
