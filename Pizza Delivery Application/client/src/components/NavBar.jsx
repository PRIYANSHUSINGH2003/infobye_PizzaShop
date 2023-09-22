import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {loginUser} from "../actions/userAction";

function NavBar() {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartReducer);
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand>
                    <Image src="image/logo.png" alt="logo" style={{ height: "50px" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                    {currentUser ? (
                            <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                                <LinkContainer to="/orders">
                                    <NavDropdown.Item>Orders</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={()=> {dispatch(loginUser())}}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <>
                                <LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/register">
                                    <Nav.Link>Register</Nav.Link>
                                </LinkContainer>
                            </>
                        )}
                        <LinkContainer to="/cart">
                            <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;