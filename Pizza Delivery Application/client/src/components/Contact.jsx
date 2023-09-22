import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import './Contact.css';

const Contact = () => {
    return (
        <>
            <Container style={{ marginTop: "50px" }}>
                <Row>
                    <Col md={6}>
                        <h1>PSR Pizza Shop</h1>
                        <p>
                            Welcome to PSR Pizza Shop, your destination for delicious pizzas
                            and more. We're here to serve you with the best in the world of
                            pizzas, made with love and quality ingredients.
                        </p>

                        <Table striped bordered hover className="text-center">
                            <thead>
                                <tr>
                                    <th className="bg-warning text-center" colSpan={3}>
                                        --- Contact Details ---
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <FiPhoneCall />
                                    </td>
                                    <td>Phone</td>
                                    <td>123-456-789</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ImMobile />
                                    </td>
                                    <td>Mobile</td>
                                    <td>987-654-3210</td>
                                </tr>
                                <tr>
                                    <td>
                                        <AiOutlineMail />
                                    </td>
                                    <td>Email</td>
                                    <td>info@psrpizzashop.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        <Image
                            src="image/pizza-shop.jpg"
                            alt="Pizza Shop"
                            className="contact-image"
                            fluid
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contact;
