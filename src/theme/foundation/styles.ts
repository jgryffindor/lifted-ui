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
};

export const modeBg = (props: Record<string, any>) => mode("lifted.gray.800","lifted.gray.100")(props);

