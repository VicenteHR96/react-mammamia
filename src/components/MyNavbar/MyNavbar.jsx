import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { PizzaContext } from "../../contexts/PizzaContext";

const MyNavbar = () => {
  const navigate = useNavigate();
  const { total } = useContext(PizzaContext);

  const verCarrito = (e) => {
    navigate("/carrito");
  };

  return (
    <div className="myNavbar">
      <Navbar bg="danger" data-bs-theme="dark">
        <Container className="cont-navbar">
          <div>
            <NavLink to="/">🍕 Pizzería Mamma Mía!</NavLink>
          </div>
          <div className="cont-cart">
            <Nav className="me-auto cont-total">
              <Button variant="danger" onClick={(e) => verCarrito(e)}>
                <FontAwesomeIcon icon={faCartShopping} />
              </Button>
              <Button variant="danger" onClick={(e) => verCarrito(e)}>
                ${total}
              </Button>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
