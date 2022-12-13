import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/Checkout.css";

const Checkout = (props) => {
  const shoppingCart = props.shoppingCart;
  const total = props.total;
  const [haveCoupon, setHaveCoupon] = useState(false);
  const toggleCouponStatus = () => {
    setHaveCoupon(!haveCoupon);
  };
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  useEffect(() => {
    shoppingCart.length === 0 ? setIsCartEmpty(true) : setIsCartEmpty(false);
  }, [shoppingCart]);

  return (
    <Container id="checkout">
      <div className="navigation mb-5">
        <Link to="/">Home</Link> / Checkout
      </div>
      <h1 className="mb-5 text-center">CHECK OUT</h1>
      <div
        style={{ backgroundColor: "#CCCCCC", borderRadius: "5px" }}
        className="pt-3 pb-2 px-3 mb-5"
      >
        <p>
          Have a coupon?{" "}
          <u style={{ cursor: "pointer" }} onClick={toggleCouponStatus}>
            Click here to enter your code
          </u>
        </p>
      </div>
      {haveCoupon === false ? (
        ""
      ) : (
        <div>
          <p>If you have a coupon code, please apply it below.</p>
          <input
            type="text"
            placeholder="Coupon code"
            style={{ width: "100%" }}
            className="px-3"
          />
          <button
            style={{ backgroundColor: "black", color: "white" }}
            className="mt-3 p-2"
          >
            APPLY COUPON
          </button>
        </div>
      )}
      <h3 className="my-5">Billing details</h3>
      <div className="row" id="checkout-form">
        <div className="col-lg-6">
          <p>First name *</p>
          <input type="text" className="px-3 mb-3" />
        </div>
        <div className="col-lg-6">
          <p>Last name *</p>
          <input type="text" className="px-3 mb-3" />
        </div>
        <div className="col-lg-6">
          <p>Company name (Optional)</p>
          <input type="text" className="px-3 mb-3" />
        </div>
        <div className="col-lg-6">
          <p>Country / Region *</p>
          <input type="text" className="px-3 mb-3" />
        </div>
        <div className="col-lg-6">
          <p>Street address</p>
          <input type="text" className="px-3 mb-3" />
        </div>
        <div className="col-lg-6">
          {" "}
          <p>Apartment</p>
          <input type="text" className="px-3 mb-3" />
        </div>
        <div className="col-lg-6">
          {" "}
          <p>Postcode / ZIP *</p>
          <input type="text" className="px-3 mb-3" />
        </div>
        <div className="col-lg-6">
          {" "}
          <p>Town / City *</p>
          <input type="text" className="px-3 mb-3" />
        </div>
        <div className="col-lg-6">
          {" "}
          <p>Phone *</p>
          <input type="text" className="px-3 mb-3" />
        </div>
        <div className="col-lg-6">
          {" "}
          <p>Email address *</p>
          <input type="text" className="px-3 mb-3" />
        </div>
      </div>
      <h3 className="my-5">Your order</h3>
      <div className="order py-3 ">
        <p>PRODUCT</p>
        <p>SUBTOTAL</p>
      </div>
      {isCartEmpty && (
        <h5 className="text-center py-3" style={{ color: "darkred" }}>
          No products added to the shopping cart!
        </h5>
      )}
      {shoppingCart.map((project) => (
        <div key={project.id} className="order py-3">
          <p>{project.name}</p>
          <p>${project.price}</p>
        </div>
      ))}
      <div className="order py-3">
        <p>SHIPPING</p>
        <div>
          <input
            type="radio"
            id="flat-rate"
            name="shipping"
            value="Flat rate"
          />
          <label htmlFor="flat-rate">Flat rate</label>
          <br />
          <input
            type="radio"
            id="free-shipping"
            name="shipping"
            value="Free shipping"
          />
          <label htmlFor="free-shipping">Free shipping</label>
          <br />
          <input
            type="radio"
            id="local-pickup"
            name="shipping"
            value="Local pickup
            "
          />
          <label htmlFor="local-pickup">Local pickup</label>
        </div>
      </div>
      <div className="order py-3">
        <p>TOTAL</p>
        <p>${total()}</p>
      </div>
      <div className="order py-3">
        <span>
          <input
            type="radio"
            id="bank"
            name="payment"
            value="DIRECT BANK TRANSFER"
          />
          <label htmlFor="local-pickup">DIRECT BANK TRANSFER</label>
        </span>
      </div>
      <div className="order  py-3">
        <span>
          <input
            type="radio"
            id="check"
            name="payment"
            value="CHECK PAYMENTS"
          />
          <label htmlFor="check">CHECK PAYMENTS</label>
        </span>
      </div>
      <div className="order  py-3">
        <span>
          <input
            type="radio"
            id="cash"
            name="payment"
            value="CASH ON DELIVERY
          "
          />
          <label htmlFor="cash">CASH ON DELIVERY</label>
        </span>
      </div>
      <p className="py-3">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our privacy policy.
      </p>
      <button
        style={{ backgroundColor: "black", color: "white" }}
        className="py-2 px-3"
      >
        PLACE ORDER
      </button>
    </Container>
  );
};

export default Checkout;
