export const styles = {
  global: (props: { colorMode: string; }) => ({ 
    "html,body,#root": {
      bg: props.colorMode === "Dark" ? "lifted.gray.600" : "lifted.gray.50",
      bgColor: props.colorMode === "Dark" ? "lifted.gray.600" : "lifted.gray.50",
      color: props.colorMode === "Dark" ? "white" : "black",
      height: "100%",
    },
  }),
  components: (props: { colorMode: string; }) => ({
    Box: {
      baseStyle: {
        bg: props.colorMode === "Dark" ? "lifted.gray.600" : "white",
      },
    },
  }),
};
