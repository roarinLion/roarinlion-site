import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { useState } from "react"
import { Col, Container, Row } from "./styled/grid.styled"
import StyledIcon from "../components/styled/icon.styled"
import { RiMenu2Fill, RiQuestionnaireLine } from "react-icons/ri"
import StyledCard from "./styled/card.styled"
import StyledButton, { buttons } from "./styled/button.styled"

const Header = () => {
    // Define state
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Define function that will open the modal
    const handleOpen = () => {
        setIsModalOpen(true)
    }

    // Define function that will close the modal
    const handleClose = () => {
        setIsModalOpen(false)
    }
    return (
        <Container bg="primary">
            <Container maxWidth="1200px" p={3} bg={"bgColor"}>
                <Row>
                    <Col textAlign="left" width={[1 / 3]}>
                        <StyledIcon
                            onClick={handleOpen}
                            fontSize={[6, 6, 7]}
                            color="primary"
                            style={{
                                transition: "all 2s ease 1s",
                            }}
                        >
                            <RiMenu2Fill />
                        </StyledIcon>
                    </Col>
                    <Col textAlign="center" width={[1 / 3]}>
                        <StaticImage
                            alt="logo"
                            src="../assets/images/logo.png"
                        />
                    </Col>
                    <Col textAlign="right" width={[1 / 3]}>
                        <StyledIcon fontSize={[6, 6, 7]} color="info">
                            <RiQuestionnaireLine />
                        </StyledIcon>
                    </Col>
                </Row>
            </Container>
            {isModalOpen ? (
                <>
                    <Col width={[1]}>
                        <StyledCard
                            p={[2, 3, 4]}
                            bg="bgColorCard"
                            className="toggle-btn"
                            width="100%"
                            maxWidth="1122px"
                            style={{
                                position: "absolute",
                                top: "0px",
                            }}
                        >
                            open modal biatch!!!{" "}
                            <p onClick={handleClose}>(close modal biatch.)</p>
                        </StyledCard>
                    </Col>
                </>
            ) : null}
        </Container>
    )
}

export default Header
