import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
    return (
        <>
            <Container style={{ marginTop: "50px" }}>
                <h1>Terms and Policy</h1>
                <Row>
                    <Col md={10}>
                        <h6>Privacy Policy</h6>
                        <p>
                            Our Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or use our services. We prioritize your privacy and ensure that your data is handled securely. We may collect information such as your name, contact details, and browsing behavior, and we use this data to improve your experience and provide personalized services. Rest assured, we never share your information with third parties without your consent. Your privacy is of utmost importance to us.
                        </p>

                        <h6>Refund Policy</h6>
                        <p>
                            Our Refund Policy covers how we handle refunds for products or services you purchase from us. We strive to provide high-quality products and services, but if you're not satisfied with your purchase, we offer a straightforward refund process. You can request a refund within [X] days of your purchase, and our team will review your request promptly. We may refund your payment partially or in full, depending on the circumstances. Please refer to our Refund Policy for specific details and eligibility criteria
                        </p>

                        <h6>Terms and Conditions</h6>
                        <p>
                            Our Terms and Conditions establish the legal agreement between you and our company when you use our website or services. These terms outline your rights and responsibilities as a user, as well as our obligations and limitations as a service provider. It covers important aspects such as intellectual property rights, content usage, user conduct, and dispute resolution. By using our services, you agree to abide by these terms and conditions, so we encourage you to read them thoroughly to understand the rules and expectations that apply.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Policy;
