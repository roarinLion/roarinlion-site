import * as React from "react"
import Seo from "../hooks/seo"
import { Headline } from "../components/styled/typography"
import StyledCard from "../components/styled/card.styled"
import { Col } from "../components/styled/grid.styled"
import StyledButton from "../components/styled/button.styled"

const IndexPage = () => (
    <>
        <Seo title="Home" />
        <Col p="3">
            <StyledCard bg="bgColorCard" borderRadius={8} my="5" p="3" mt="4">
                <Headline color="text"> a card with a headline </Headline>
                <br />
                <StyledButton p={[2, 3, 3]} primary>
                    Primary
                </StyledButton>
                <br />
                <StyledButton p={[2, 3, 3]} secondary>
                    Secondary
                </StyledButton>
                <br />
                <StyledButton p={[2, 3, 3]} info>
                    Info
                </StyledButton>
                <br />
                <StyledButton p={[2, 3, 3]} success>
                    Success
                </StyledButton>
                <br />
                <StyledButton p={[2, 3, 3]} warning>
                    Warning
                </StyledButton>
                <br />
                <StyledButton p={[2, 3, 3]} danger>
                    Danger
                </StyledButton>
            </StyledCard>
        </Col>
    </>
)

export default IndexPage
