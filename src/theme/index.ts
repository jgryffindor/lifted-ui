import { extendTheme } from "@chakra-ui/react"
import { Textarea, Tabs, Table, Button, Heading, Text, Input } from ".."
import { colors, fonts, styles } from "./foundation"
export { ChakraProvider as ThemeProvider } from "@chakra-ui/react"

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors,
  components: { 
    Button, 
    Heading, 
    Input, 
    Table: {
      baseStyle: {
        th: {
          borderColor: "lifted.gray.200", 
        },
        td: {
          borderColor: "lifted.gray.200",
        },
      },
    },
    Tabs, 
    Text, 
    Textarea 
  },
  fonts,
  styles,
})
