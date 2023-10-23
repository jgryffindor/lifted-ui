export const styles = {
  global: (props: { colorMode: string; }) => ({ 
    "html,body,#root": {
      bg: props.colorMode === "dark" ? "gray.800" : "lifted.gray.50",
      bgColor: props.colorMode === "dark" ? "gray.800" : "lifted.gray.50",
      color: props.colorMode === "dark" ? "white" : "black",
      height: "100%",
    },
  }),
};
