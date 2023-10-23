import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props: Record<string, any>) => ({ 
    "html,body,#root": {
      bg: mode("lifted.gray.600","lifted.gray.50")(props),
      bgColor: mode("lifted.gray.600","lifted.gray.50")(props),
      color: mode("white","black")(props),
      height: "100%",
    },
  }),
  components: (props: Record<string, any>) => ({
    Box: {
      baseStyle: {
        bg: mode("lifted.gray.600","white")(props),
      },
    },
  }),
};
