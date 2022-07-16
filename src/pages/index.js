import * as React from "react"
import Layout from "../components/layout"
import Seo from "../hooks/seo"
import { Headline, Title } from "../components/styled/typography"
import StyledCard from "../components/styled/card.styled"
import { Col } from "../components/styled/grid.styled"

const IndexPage = () => (
    <>
        <Seo title="Home" />
        <Layout>
            <Title>some title...</Title>
            <Col p="3">
                <StyledCard
                    borderRadius={8}
                    my="5"
                    p="3"
                    mt="4"
                    bg="orange"
                    width={[1 / 3]}
                >
                    <Headline> a card with a headline </Headline>
                </StyledCard>
            </Col>
        </Layout>
    </>
)

export default IndexPage
