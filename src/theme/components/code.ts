import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const baseStyle = defineStyle({
  bg: "lifted.gray.100",
  // color: vars.color.reference,
  _dark: {
    bg: "lifted.gray.600",
    // color: vars.color.dark,
  }, 
})

export const codeTheme = defineStyleConfig({
  baseStyle,
})