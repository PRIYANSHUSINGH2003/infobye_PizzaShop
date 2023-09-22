import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.css"; // Import your custom CSS for styling

const Loader = () => {
    return (
        <div className="loader-container">
            <Spinner animation="border" variant="info" />
        </div>
    );
};

export default Loader;
