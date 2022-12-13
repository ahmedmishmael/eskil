import React from "react";
import "./css/Account.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div id="account" className="py-5">
      <Container>
        <h2 className="mb-5">MY ACCOUNT</h2>
        <form className="">
          <label>USERNAME OR EMAIL ADDRESS *</label>
          <input type="text" className="mb-3" />
          <label>PASSWORD *</label>
          <input type="text" />
          <p className="text-end">
            Don't have an account ?{" "}
            <Link to="/account/signup">
              <b>Sign up</b>
            </Link>
          </p>
          <button className="px-3 py-2">LOG IN</button>
        </form>
      </Container>
    </div>
  );
};

export default Account;
