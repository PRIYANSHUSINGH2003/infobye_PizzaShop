import React, { useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";
import Pizzaslist from "../components/Admin/Pizzaslist";
import Userlist from "../components/Admin/Userlist";
import EditPizza from "./../components/Admin/EditPizza";

const AdminScreen = ({ history }) => {
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;

    useEffect(() => {
        if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
            window.location.href = "/";
        }
    }, [currentUser]);

    return (
        <Container>
            <Row>
                <Col md={12} lg={3} className="sidebar">
                    <ButtonGroup vertical>
                        <Button onClick={() => history.push("/admin/userlist")}>
                            All Users
                        </Button>
                        <Button onClick={() => history.push("/admin/pizzalist")}>
                            All Pizzas
                        </Button>
                        <Button onClick={() => history.push("/admin/addnewpizza")}>
                            Add New Pizza
                        </Button>
                        <Button onClick={() => history.push("/admin/orderlist")}>
                            All Orders
                        </Button>
                    </ButtonGroup>
                </Col>
                <Col md={12} lg={9} className="content">
                    <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
                    <Routes>
                        <Route path="/admin" component={Userlist} exact />
                        <Route path="/admin/userlist" component={Userlist} exact />
                        <Route path="/admin/editpizza/:pizzaId" component={EditPizza} exact />
                        <Route path="/admin/pizzalist" component={Pizzaslist} exact />
                        <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
                        <Route path="/admin/orderlist" component={OrderList} exact />
                    </Routes>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminScreen;
