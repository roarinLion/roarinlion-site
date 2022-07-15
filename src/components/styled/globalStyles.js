import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
  }
  ${normalize()}
`
