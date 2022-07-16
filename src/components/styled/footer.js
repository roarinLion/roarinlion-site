import React from "react"
import { Container } from "./grid.styled"

const Footer = () => {
    return (
        <Container bg="primary">
            <Container maxWidth="1200px">
                <footer>
                    © {new Date().getFullYear()}, Built by
                    {` `}
                    <a href="https://www.gatsbyjs.com">roarinLion</a>
                </footer>
            </Container>
        </Container>
    )
}

export default Footer
