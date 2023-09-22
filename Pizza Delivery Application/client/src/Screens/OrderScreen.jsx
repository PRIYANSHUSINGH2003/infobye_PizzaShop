import React, { useEffect } from "react";
import { getUserOrders } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import Loader from "../components/Loader";
import Error from "../components/Error";

const OrderScreen = () => {
    const orderState = useSelector((state) => state.getUserOrdersReducer);
    const { loading, error, orders } = orderState;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserOrders());
    }, [dispatch]);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Your Orders</h1>
            {loading && <Loader />}
            {error && <Error error="Something went wrong" />}
            {orders &&
                orders.map((order) => (
                    <Card key={order._id} className="mb-4">
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <h4>Items:</h4>
                                    {order.orderItems.map((item) => (
                                        <div key={item._id} className="mb-2">
                                            <span>{item.name}</span> [{item.varient}] *{" "}
                                            {item.quantity} = {item.price}
                                        </div>
                                    ))}
                                </Col>
                                <Col md={6}>
                                    <h4>Address:</h4>
                                    <p>
                                        <strong>Street:</strong> {order.shippingAddress.street}
                                    </p>
                                    <p>
                                        <strong>City:</strong> {order.shippingAddress.city}
                                    </p>
                                    <p>
                                        <strong>PinCode:</strong> {order.shippingAddress.pincode}
                                    </p>
                                    <p>
                                        <strong>Country:</strong> {order.shippingAddress.country}
                                    </p>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col md={6}>
                                    <h4>Order Info:</h4>
                                    <p>
                                        <strong>Order Amount:</strong> {order.orderAmount}
                                    </p>
                                    <p>
                                        <strong>Transaction ID:</strong> {order.transactionId}
                                    </p>
                                    <p>
                                        <strong>Order ID:</strong> {order._id}
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))}
        </div>
    );
};

export default OrderScreen;
