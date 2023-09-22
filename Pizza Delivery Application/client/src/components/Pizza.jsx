import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import "./Pizza.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

function Pizza({ pizza }) {
    const [varient, setVarient] = useState('small');
    const [Quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(pizza, Quantity, varient));
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{ width: "100%" }} className="pizza-card">
                <Card.Img variant="top" src={pizza.image} alt={pizza.name} style={{ cursor: "pointer" }} onClick={handleShow} />
                <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Row className="align-items-center">
                        <Col md={6} xs={6}>
                            <h6>Variants</h6>
                            <select value={varient} onChange={e => setVarient(e.target.value)} className="form-select">
                                {pizza.varients.map((varient) => (
                                    <option key={varient}>{varient}</option>
                                ))}
                            </select>
                        </Col>
                        <Col md={6} xs={6}>
                            <h6>Quantity</h6>
                            <select value={Quantity} onChange={e => setQuantity(e.target.value)} className="form-select">
                                {[...Array(10).keys()].map((v, i) => (
                                    <option key={i} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                        </Col>
                    </Row>
                    <Card.Text className="pizza-description">{pizza.description}</Card.Text>

                    <Row className="align-items-center">
                        <Col md={6} xs={6}>
                            <div className="pizza-price">Price: Rs {pizza.prices[0][varient] * Quantity}</div>
                        </Col>
                        <Col md={6} xs={6}>
                            <Button variant="primary" onClick={addToCartHandler}>Add to Cart</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img variant="top" src={pizza.image} style={{ height: "250px" }} />
                    <div className="mt-3">
                        <h5>Description:</h5>
                        <p>{pizza.description}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addToCartHandler}>Add to Cart</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Pizza;
