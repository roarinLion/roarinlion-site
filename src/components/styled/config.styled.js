import { darken } from "polished"
import { keyframes } from "styled-components"
//import { darken } from "polished"

/* this file has all the style defaults to modify this theme EXCEPT typography which is a globalStyle in this same folder */

/* same as styled-media-query*/
export const screens = {
    small: 450,
    medium: 768,
    large: 1170,
    huge: 1440,
}

/*theme colors*/
export const colors = {
    primary: "#fff",
    primaryDark: darken(0.5, "#663399"),
    secondary: "#1daeec",
    background: "#ffefd5",
    black: "#0a0a0a",
    greyDarkest: "#232323",
    greyDarker: "#363636",
    greyDark: "#4a4a4a",
    grey: "#7a7a7a",
    greyLight: "#b5b5b5",
    greyLighter: "#dbdbdb",
    greyLightest: "#f5f5f5",
    white: "#ffffff",
    red: "#ff3760",
    orange: "#ff460f",
    yellow: "#ffdc57",
    green: "#23d160",
    turquoise: "#01d1b2",
    cyan: "#209cee",
    blue: "#3273dc",
    purple: "#b86cff",
}

/*keyframe animations*/
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const slideDown = keyframes`
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(0);
  }
`

export const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100vh);
  }
`
