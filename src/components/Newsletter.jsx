import React from "react";
import "./css/Newsletter.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <Container id="newsletter" className="py-5">
      <h5 className="my-5">
        Subscribe to our newsletter and receive the latest <br />
        product news, stories, invitations to exclusive design
        <br /> events and much, much more.
      </h5>
      <form>
        <input
          id="sub-mail"
          type="email"
          placeholder="Enter your email"
          required
        />
        <label className="px-3" htmlFor="sub-mail">
          SUBSCRIBE
        </label>
      </form>
      <h5 className="policy-txt my-5">
        BY SUBSCRIBING, YOU ACCEPT OUR{" "}
        <Link to="/FAQs/terms-conditions">PRIVACY POLCY</Link>
      </h5>
    </Container>
  );
};

export default Newsletter;
