export const styles = {
  global: (props: { colorMode: string; }) => ({ 
    "html,body,#root": {
      bgColor: props.colorMode === "dark" ? "lifted.gray.800" : "lifted.gray.50",
      color: props.colorMode === "dark" ? "white" : "black",
      height: "100%",
    },
  }),
};
