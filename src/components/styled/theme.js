/* this file contains the theme modes, for style defaults look in ./config.styled.js */
import { colors } from "./config.styled"

export default {
    colors: {
        primary: "red",
        modes: {
            dark: {
                primary: colors.primaryDark,
            },
            light: {
                primary: colors.primary,
            },
        },
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}

// const theme = {

//     dark: {
//         textPrimary: colors.primaryDark,
//         background: "#090A0B",
//         navBackground: "#2A2D34",
//         cardBackground: "#2A2D34",
//         textSecondary: "#7d7d7d",
//         buttonPrimary: "#FAFAFA",
//         buttonGhost: "transparent",
//         cardBgPrimary: "#004e89",
//         buttonTxt: "#fff",
//         cardShadow: "-1px 3px 5px 0px rgba(21,21,21,0.86)",
//     },
// }

// export default theme
