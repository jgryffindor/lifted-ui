import { mode } from "@chakra-ui/theme-tools";

export const Box = {
  baseStyle: (props: Record<string, any>) => ({
    bg: mode("lifted.gray.700","lifted.gray.100")(props),
  }),
};
