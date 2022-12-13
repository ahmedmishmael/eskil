import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/Account.css";

const Signup = () => {
  return (
    <div id="signup" className="py-5">
      <Container>
        <h2 className="text-center">SIGN UP</h2>
        <form>
          <label htmlFor="">USERNAME *</label>
          <input
            type="text"
            placeholder="Choose a unique username"
            className="mb-3"
          />
          <label htmlFor="">EMAIL ADDRESS *</label>
          <input
            type="text"
            placeholder="Your email address"
            className="mb-3"
          />

          <label htmlFor="">PASSWORD *</label>
          <input type="text" placeholder="Your password" className="mb-3" />
          <p className="text-end">
            Already have an account ?
            <Link to="/account">
              <b>Log in</b>
            </Link>
          </p>
          <button className="px-3 py-2">Sign Up</button>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
