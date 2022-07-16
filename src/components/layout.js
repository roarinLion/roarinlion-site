import React, { useState } from "react"
import merge from "lodash.merge"
import get from "lodash.get"
// the full theme object
import { theme } from "./styled/theme"
import Header from "./header"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styled/globalStyles"
import { Container } from "./styled/grid.styled"
import Footer from "./styled/footer"

// options for different color modes
const modes = [
    "light",
    "dark",
    "blue",
    // TODO: we can add more modes for the main demo theme.
]

// merge the color mode with the base theme
// to create a new theme object

const getTheme = mode =>
    merge(theme, {
        colors: get(theme.colors.modes, mode, theme.colors),
    })

const Layout = ({ children }) => {
    const [mode, setMode] = useState(modes[0])
    const theme = getTheme(mode)

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container bg="bgColor">
                    <Container maxWidth="1200px" minHeight="100vh">
                        <GlobalStyles />
                        <Header />
                        <button
                            className="pt-3"
                            onClick={() => setMode("light")}
                        >
                            {mode === "light" ? (
                                <> Light mode!!</>
                            ) : (
                                <> click me...</>
                            )}
                        </button>
                        <button
                            className="pt-3"
                            onClick={() => setMode("dark")}
                        >
                            {mode === "dark" ? (
                                <> Dark mode!!</>
                            ) : (
                                <> click me...</>
                            )}
                        </button>
                        <button
                            className="pt-3"
                            onClick={() => setMode("blue")}
                        >
                            {mode === "blue" ? (
                                <> Blue mode!!</>
                            ) : (
                                <> click me...</>
                            )}
                        </button>
                        <main>{children}</main>
                    </Container>
                </Container>
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default Layout
