export const styles = {
  global: (props: { colorMode: string; }) => ({ 
    "html,body,#root": {
      bg: props.colorMode === "dark" ? "lifted.gray.600" : "lifted.gray.50",
      bgColor: props.colorMode === "dark" ? "lifted.gray.600" : "lifted.gray.50",
      color: props.colorMode === "dark" ? "white" : "black",
      height: "100%",
    },
  }),
  components: (props: { colorMode: string; }) => ({
    Box: {
      baseStyle: {
        _before: {
          bg: props.colorMode === "dark" ? "lifted.gray.600" : "white",
        },
      },
    },
  }),
};
