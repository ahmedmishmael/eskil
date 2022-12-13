import React, { Fragment, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./css/NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "./assets/EskilLogo.png";
import { BsPerson } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import { Row, Col } from "react-bootstrap";
import CartLogo from "./assets/cart.png";
import { useEffect } from "react";

const NavBar = (props) => {
  const wishlist = props.wishlist;
  const shoppingCart = props.shoppingCart;
  const total = props.total;
  const remove = props.remove;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isCartEmpty, setIsCartEmpty] = useState(false);

  useEffect(() => {
    shoppingCart.length === 0 ? setIsCartEmpty(true) : setIsCartEmpty(false);
  }, [shoppingCart]);

  return (
    <Fragment>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-between">
          {isCartEmpty && <img src={CartLogo} alt="Empty Cart Logo" />}
          <div>
            {shoppingCart.map((product) => (
              <Row
                key={product.id}
                style={{ borderBottom: "1px solid silver" }}
                className="py-2"
              >
                <Col xs={4}>
                  <img
                    src={product.url}
                    alt={product.name}
                    width="100%"
                    height="100%"
                  />
                </Col>
                <Col xs={7}>
                  <p>
                    <b> Name:</b> {product.name}
                  </p>
                  <p>
                    <b>Count:</b> {product.count}
                  </p>
                  <p>
                    <b>Price:</b> ${product.price}
                  </p>
                </Col>
                <Col
                  xs={1}
                  className="d-flex flex-column justify-content-center align-items-center"
                  onClick={() => {
                    remove(product);
                  }}
                >
                  <MdDelete
                    style={{ fontSize: "x-large", cursor: "pointer" }}
                  />
                </Col>
              </Row>
            ))}
          </div>
          <div>
            <div>
              <span className="d-flex justify-content-between">
                <p>Total</p>
                <p>${total()}</p>
              </span>
              <span className="d-flex flex-column justify-content-center align-items-center">
                <Link to="/cart">
                  <button
                    className="py-2 px-3 mb-3"
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    <BsBag /> VIEW SHOPPING CART
                  </button>
                </Link>
                <Link to="/checkout">
                  <p style={{ cursor: "pointer" }}>GO TO CHECKOUT</p>
                </Link>
              </span>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Navbar expand="lg" className="mb-5">
        <Container>
          <Link to="/" className="me-2">
            <img src={Logo} alt="ESKIL Logo" width="120px" height="60px" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="nav-left" className="me-auto">
              <Link to="" className="me-3">
                HOME
              </Link>
              <Link to="/about" className="me-3">
                ABOUT
              </Link>
              <Link to="/portfolio" className="me-3">
                PORTFOLIO
              </Link>
              <Link to="/shop" className="me-3">
                SHOP
              </Link>
              <Link to="/contact">CONTACT</Link>
            </Nav>
            <Nav className="ms-auto">
              <Link to="/account" className="me-3">
                <BsPerson style={{ fontSize: "larger" }} /> Account
              </Link>
              <Link to="/wishlist" className="me-3 position-relative">
                <Badge
                  pill
                  bg="dark"
                  style={{ fontSize: "xx-small" }}
                  className="position-absolute top-0 start-0 translate-middle"
                >
                  {wishlist.length}
                </Badge>
                <BsHeart /> Wishlist
              </Link>
              <Link onClick={handleShow} className="position-relative">
                <Badge
                  pill
                  bg="dark"
                  style={{ fontSize: "xx-small" }}
                  className="position-absolute top-0 start-0 translate-middle"
                >
                  {shoppingCart.length}
                </Badge>
                <BsBag /> Cart ${total()}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
