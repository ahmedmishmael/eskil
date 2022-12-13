import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import "./css/Productdetails.css";

const Productdetails = (props) => {
  const params = useParams();
  const product = props.products.filter(
    (product) => `${product.category}-${product.id}` === params.id
  )[0];
  return (
    <Container>
      <div className="navigation mb-5">
        <Link to="/">Home</Link> / Product Details
      </div>
      <Row className=" px-5">
        <Col lg={6}>
          <img src={product.url2} alt={product.name} width="100%" />
        </Col>
        <Col lg={6} className="ps-5 d-flex flex-column justify-content-around">
          <h3>Name: {product.name}</h3>
          <h3>Price: ${product.price}</h3>
          <h3>{product.count} IN CART</h3>
          <h3>SKU: {product.sku}</h3>
          <h3>Category: {product.category}</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Productdetails;
