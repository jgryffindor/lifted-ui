import { mode } from "@chakra-ui/theme-tools";
import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { Component } from "react";

// export const Code = {
//   defaultProps: (props: Record<string, any>) => ({
//     colorScheme: mode("lifted.gray.700","lifted.gray.100")(props),
//   }),
// };

export const Code: ComponentStyleConfig = {
  baseStyle: (props: Record<string, any>) => ({
    bg: mode("lifted.gray.700","lifted.gray.100")(props),
  }),
};