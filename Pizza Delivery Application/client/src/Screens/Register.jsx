import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userAction";
import Loader from "../components/Loader";
import Success from "../components/Sucess";
import Error from "../components/Error";
import "./Register.css";

const Register = () => {
    const registerState = useSelector((state) => state.registerUserReducer);
    const { error, success, loading } = registerState;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();

    const registerHandler = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
        } else {
            const user = { name, email, password, confirmPassword };
            dispatch(registerUser(user));
        }
    };

    return (
        <Container className="container1">
            <h1>Registration</h1>
            {loading && <Loader />}
            {success && <Success variant="success" success={"User Registered Successfully"}></Success>}
            {error && <Error variant="danger" error={"Something went wrong. Please try again."}></Error>}
            <Form>
                <Form.Group className="form-group1">
                    <Form.Label className="form-label1">Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="form-group1">
                    <Form.Label className="form-label1">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="form-group1">
                    <Form.Label className="form-label1">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="form-group1">
                    <Form.Label className="form-label1">Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="button" className="btn-primary1" onClick={registerHandler}>
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default Register;
