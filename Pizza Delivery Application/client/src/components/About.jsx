import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import './About.css';

const chefs = [
    {
        name: "Chef John",
        specialty: "Italian Cuisine",
        imageSrc: "image/chef1.jpg",
    },
    {
        name: "Chef Roki",
        specialty: "Mediterranean Dishes",
        imageSrc: "image/chef2.jpg",
    },
    {
        name: "Chef Alex",
        specialty: "Gourmet Pizzas",
        imageSrc: "image/chef3.jpg",
    },
    {
        name: "Chef Remo",
        specialty: "Vegetarian Delights",
        imageSrc: "image/chef4.jpg",
    },
];

const About = () => {
    return (
        <Container className="about-container">
            <h1 className="about-title">Who We Are</h1>
            <h5 className="about-subtitle">Introducing "PizzaZoom" - Your Ultimate Pizza Delivery Experience</h5>

            <p className="about-description">
                Hungry for the perfect slice? Look no further than PizzaZoom, the
                next-level pizza delivery application that takes your pizza cravings to
                new heights! Whether you're a die-hard pizza enthusiast or simply
                seeking a quick, delicious meal, PizzaZoom has you covered.
            </p>

            <h3 className="about-section-title">Why Choose PizzaZoom?</h3>
            <ul className="about-list small-text">
                <li>
                    Easy Ordering: With PizzaZoom, ordering your favorite pizza is a
                    breeze. Simply browse our extensive menu, customize your order to
                    perfection, and get ready to indulge in mouthwatering goodness. We
                    make ordering pizza as simple as a few taps on your phone.
                </li>
            </ul>

            <h5 className="about-subtitle">Download PizzaZoom Today and Satisfy Your Pizza Cravings!</h5>
            <p className="about-description">
                Whether you're dining solo, having a family pizza night, or planning a
                pizza party with friends, PizzaZoom is your go-to pizza delivery app.
                Join the pizza revolution, experience the ultimate in convenience and
                taste, and discover why PizzaZoom is the preferred choice for pizza
                lovers everywhere. Don't wait – download the app now and prepare to
                embark on a delectable journey of pizza perfection!
            </p>

            <h1 className="about-title">Our Speciality: Your Ultimate Pizza Delivery Experience</h1>
            <Row>
                <Col md={6}>
                    <p className="about-description">
                        Indulge in a world of culinary delight with Our Speciality, your
                        go-to pizza delivery application that redefines the art of
                        savoring pizza. We take pride in crafting the perfect pizza
                        experience, one delicious slice at a time.
                    </p>
                    <ul className="about-list">
                        <li className="m-3">
                            🍕 Handcrafted Perfection: Our team of skilled pizza artisans
                            meticulously handcrafts each pizza, using only the freshest and
                            finest ingredients. From the dough that's made from scratch to
                            the rich, savory sauces and premium toppings, every pizza is a
                            work of culinary art.
                        </li>
                        <li className="m-3">
                            📱 Seamless Ordering: With Our Speciality, ordering your favorite
                            pizza is a breeze. Our user-friendly app allows you to customize
                            your pizza to perfection, choosing from a wide range of crusts,
                            sauces, and toppings. Whether you're craving a classic
                            Margherita or a gourmet specialty pie, we've got you covered.
                        </li>
                        <li className="m-3">
                            🤝 Community-Focused:
                            We take pride in being a part of your community. Our Speciality 
                            actively participates in local events and supports charitable initiatives 
                            to give back to the neighborhoods we serve.
                        </li>
                    </ul>
                </Col>
                <Col md={6}>
                    <Image src="image/pizza-image.jpg" alt="Delicious Pizza" className="pizza-image" fluid />
                </Col>
            </Row>

            <h1 className="about-title">Our Chef</h1>
            <Row>
                {chefs.map((chef, index) => (
                    <Col md={3} key={index}>
                        <Card className="chef-card">
                            <Card.Img
                                variant="top"
                                src={chef.imageSrc}
                                alt={`Chef ${chef.name}`}
                                className="chef-image"
                            />
                            <Card.Body>
                                <Card.Title>{chef.name}</Card.Title>
                                <Card.Text>{chef.specialty}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default About;
