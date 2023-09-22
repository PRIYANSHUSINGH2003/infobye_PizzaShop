import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "../components/Checkout";
import "./CartScreen.css"; // Import your custom CSS file

const CartScreen = () => {
    const cartState = useSelector((state) => state.cartReducer);
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

    return (
        <Container>
            <Row>
                <Col md={8} xs={12}>
                    <h1>My Cart</h1>
                    {cartItems.map((item) => (
                        <div key={item._id} className="cart-item">
                            <Row>
                                <Col md={4} xs={12} className="cart-item-image">
                                    <img
                                        alt={item.name}
                                        src={item.image}
                                        className="cart-item-image"
                                    />
                                </Col>
                                <Col md={8} xs={12} className="cart-item-details">
                                    <h5>
                                        {item.name} [{item.varient}]
                                    </h5>
                                    <div className="cart-item-price">
                                        Price: {item.quantity} X {item.prices[0][item.varient]} ={" "}
                                        {item.price}
                                    </div>
                                    <div className="cart-item-quantity">
                                        Quantity:{" "}
                                        <FaMinusCircle
                                            className="text-danger"
                                            onClick={() => {
                                                dispatch(addToCart(item, item.quantity - 1, item.varient));
                                            }}
                                        />
                                        <span className="cart-item-quantity-number">{item.quantity}</span>
                                        <FaPlusCircle
                                            className="text-success"
                                            onClick={() => {
                                                dispatch(addToCart(item, item.quantity + 1, item.varient));
                                            }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <div className="cart-item-actions">
                                <FaTrash
                                    className="text-danger"
                                    onClick={() => {
                                        dispatch(deleteFromCart(item));
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </Col>
                <Col md={4} xs={12}>
                    <div className="payment-info">
                        <h1>Payment Info</h1>
                        <div className="sub-total">
                            <h4>Sub Total</h4>
                            <h4>RS: {subTotal} /-</h4>
                        </div>
                        <Checkout subTotal={subTotal} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CartScreen;
