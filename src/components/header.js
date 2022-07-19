import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { useState } from "react"
import { Col, Container, Row } from "./styled/grid.styled"
import StyledIcon from "../components/styled/icon.styled"
import { MdMenuOpen, MdHelpOutline } from "react-icons/md"

import StyledCard from "./styled/card.styled"
import { Link } from "gatsby"

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
            <Container maxWidth="1200px" py={3} px={2} bg={"bgColor"}>
                <Row>
                    <Col textAlign="left" pt={1} width={[1 / 3]}>
                        <StyledIcon
                            onClick={handleOpen}
                            fontSize={[6, 6, 7]}
                            color="text"
                            px="3"
                            bg="bgColorCard"
                        >
                            <MdMenuOpen />
                        </StyledIcon>
                    </Col>
                    <Col textAlign="center" width={[1 / 3]}>
                        <Link to="/">
                            <StaticImage
                                alt="logo"
                                src="../assets/images/logo.png"
                                maxWidth="200px"
                            />
                        </Link>
                    </Col>
                    <Col textAlign="right" pt={1} width={[1 / 3]}>
                        <StyledIcon
                            onClick={handleOpen}
                            fontSize={[6, 6, 7]}
                            color="text"
                            px="3"
                            bg="bgColorCard"
                        >
                            <MdHelpOutline />
                        </StyledIcon>
                    </Col>
                </Row>
            </Container>
            {isModalOpen ? (
                <>
                    <Col width={[1]}>
                        <StyledCard
                            p={[2, 3, 4]}
                            color="text"
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
                            <Link to="/inventory-list-page">Inventory</Link>
                        </StyledCard>
                    </Col>
                </>
            ) : null}
        </Container>
    )
}

export default Header
