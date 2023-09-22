import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { loginUser } from "../actions/userAction";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            window.location.href = "/";
        }
    }, []);

    const loginHandler = () => {
        const user = { email, password };
        dispatch(loginUser(user));
    };

    return (
        <Container className="login-container">
            <Row className="justify-content-center">
                <Col xs={12} sm={8} md={6} lg={4}>
                    <Form className="login-form">
                        <h1 className="text-center">Login</h1>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="button"
                            className="login-button"
                            onClick={loginHandler}
                        >
                            Login
                        </Button>

                        <div className="text-center mt-3">
                            <a href="/forgot-password">Forgot Password?</a>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
