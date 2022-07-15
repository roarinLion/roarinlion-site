import React, { useState } from "react"
import merge from "lodash.merge"
import get from "lodash.get"
// the full theme object
import baseTheme from "./styled/theme"
import Header from "./header"
import { ThemeProvider } from "styled-components"
import { Typography } from "./styled/typography"

// options for different color modes
const modes = [
    "light",
    "dark",
    // more than two modes can follow...
]

// merge the color mode with the base theme
// to create a new theme object
const getTheme = mode =>
    merge({}, baseTheme, {
        colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
    })

const Layout = ({ children }) => {
    const [mode, setMode] = useState(modes[0])
    const theme = getTheme(mode)

    return (
        <>
            <ThemeProvider theme={theme}>
                <Typography />
                <Header siteTitle="Newport Morors" />

                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
            </ThemeProvider>
        </>
    )
}

export default Layout
