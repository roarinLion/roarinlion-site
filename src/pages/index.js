import * as React from "react"
import Layout from "../components/layout"
import Seo from "../hooks/seo"
import { Container } from "../components/styled/grid.styled"
import { Title } from "../components/styled/typography"
import StyledCard from "../components/card.styled"

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <Container>
            <Title>Used Cars</Title>
            <StyledCard mt="4" bg="red" color="primary" width={[1]}>
                testttt
            </StyledCard>
        </Container>
    </Layout>
)

export default IndexPage
