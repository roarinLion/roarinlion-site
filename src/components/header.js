import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Col, Container, Row } from "./styled/grid.styled"
import StyledIcon from "../components/styled/icon.styled"
import { RiMenu2Fill, RiQuestionnaireLine } from "react-icons/ri"

const Header = () => (
    <Container bg="primary">
        <Container maxWidth="1200px" p={3} bg={"bgColor"}>
            <Row>
                <Col textAlign="left" width={[1 / 3]}>
                    <StyledIcon fontSize={[6, 6, 7]} color="primary">
                        <RiMenu2Fill />
                    </StyledIcon>
                </Col>
                <Col textAlign="center" width={[1 / 3]}>
                    <StaticImage src="../assets/images/logo.png" />
                </Col>
                <Col textAlign="right" width={[1 / 3]}>
                    <StyledIcon fontSize={[6, 6, 7]} color="info">
                        <RiQuestionnaireLine />
                    </StyledIcon>
                </Col>
            </Row>
        </Container>
    </Container>
)

export default Header
