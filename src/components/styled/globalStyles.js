import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"
import { theme } from "./theme"

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${theme.colors.bgColor};
  }
  ${normalize()}
`
