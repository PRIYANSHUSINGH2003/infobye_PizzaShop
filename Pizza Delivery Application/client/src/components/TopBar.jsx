import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";
import './TopBar.css';

const TopBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="topbar">
                <Container fluid>
                    <div className="topbar-content">
                        <div className="delivery-info">
                            <MdLocalOffer className="offer-icon" />
                            <span className="offer-text">
                                Free Home Delivery on Orders Above ₹500
                            </span>
                        </div>
                    </div>
                    <Nav className="ms-auto navbarNav">
                        <LinkContainer to="/" activeClassName="">
                            <Nav.Link className="navLink">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about" activeClassName="">
                            <Nav.Link className="navLink">About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact" activeClassName="">
                            <Nav.Link className="navLink">Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/policy" activeClassName="">
                            <Nav.Link className="navLink">Terms and policy</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default TopBar;