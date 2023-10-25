import { mode } from "@chakra-ui/theme-tools";

export const Code = {
  defaultProps: {
    variant: "solid",
  },
  variants: {
    solid: (props: Record<string, any>) => ({
      bg: mode("lifted.gray.700","lifted.gray.100")(props),
    }),
  }
};
