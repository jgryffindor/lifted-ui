import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props: Record<string, any>) => ({ 
    "html,body,#root": {
      bg: mode("lifted.gray.800","lifted.gray.100")(props),
      bgColor: mode("lifted.gray.800","lifted.gray.100")(props),
      color: mode("white","black")(props),
      height: "100%",
    },
  }),
  components: (props: Record<string, any>) => ({
    Box: {
      defaultProps: {
        bg: mode("lifted.gray.700","white")(props),
      },
    },
  }),
};
