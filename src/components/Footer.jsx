import React from "react";
import { Container } from "react-bootstrap";
import "./css/Footer.css";
import { Link } from "react-router-dom";
import Logo from "./assets/EskilLogo.png";
import AhmedIshmael from "./assets/Ahmed Ishmael.png";
import { BsPaypal } from "react-icons/bs";
import { SiAmazonpay } from "react-icons/si";
import { FaApplePay } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="mt-5">
      <Container>
        <div className="row my-5">
          <div className="col-lg-3 footer-col">
            <h5>COMPANY</h5>
            <Link to="/about" onClick={scrollTop}>
              <MdArrowForwardIos />
              What We Do
            </Link>
            <Link to="/about" onClick={scrollTop}>
              <MdArrowForwardIos />
              Available Services
            </Link>
            <Link to="/FAQs/careers" onClick={scrollTop}>
              <MdArrowForwardIos />
              Careers
            </Link>
            <Link to="/FAQs" onClick={scrollTop}>
              <MdArrowForwardIos />
              FAQs
            </Link>
          </div>
          <div className="col-lg-3 footer-col">
            <h5>CUSTOMER SERVICE</h5>
            <Link to="/contact" onClick={scrollTop}>
              <MdArrowForwardIos />
              Help & Contact us
            </Link>
            <Link to="/FAQs/returns-refunds" onClick={scrollTop}>
              <MdArrowForwardIos />
              Returns & Refunds
            </Link>
            <Link to="/FAQs/delivery-information" onClick={scrollTop}>
              <MdArrowForwardIos />
              Delivery Information
            </Link>
            <Link to="/FAQs/terms-conditions" onClick={scrollTop}>
              <MdArrowForwardIos />
              Terms & Conditions
            </Link>
          </div>
          <div className="col-lg-3 footer-col">
            <h5>SOCIAL MEDIA</h5>
            <a
              href="https://www.facebook.com/ahmedmishmael"
              target="_blank"
              rel="noreferrer"
            >
              <MdArrowForwardIos />
              Facebook
            </a>
            <a
              href="https://twitter.com/ahmedmishmael"
              target="_blank"
              rel="noreferrer"
            >
              <MdArrowForwardIos />
              Twitter
            </a>
            <a
              href="https://www.instagram.com/ahmedmishmael"
              target="_blank"
              rel="noreferrer"
            >
              <MdArrowForwardIos />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedmishmael"
              target="_blank"
              rel="noreferrer"
            >
              <MdArrowForwardIos />
              LinkedIn
            </a>
          </div>
          <div className="col-lg-3 footer-col">
            <h5>PROFILE</h5>
            <Link to="/account" onClick={scrollTop}>
              <MdArrowForwardIos />
              My Account
            </Link>
            <Link to="/checkout" onClick={scrollTop}>
              <MdArrowForwardIos />
              Checkout
            </Link>
            <Link to="/FAQs/order-tracking" onClick={scrollTop}>
              <MdArrowForwardIos />
              OrderTracking
            </Link>
            <Link to="/contact" onClick={scrollTop}>
              <MdArrowForwardIos />
              Help & Support
            </Link>
          </div>
        </div>
        <div id="footer" className="row">
          <div className="col-lg-6 col-md-6">
            <img src={Logo} alt="Logo" />
          </div>

          <div id="paygates" className="col-lg-6 col-md-6">
            <Link to="">
              <BsPaypal />
            </Link>
            <Link to="" className="ms-3">
              <SiAmazonpay />
            </Link>
            <Link to="" className="ms-3">
              <FaApplePay />
            </Link>
            <Link to="" className="ms-3">
              <FaCcMastercard />
            </Link>
          </div>
        </div>
        <div className="text-center mb-3">
          &copy; 2022 - All Rights Reserved.
          <br /> Powered By{" "}
          <a
            href="https://ahmedmishmael.github.io"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={AhmedIshmael}
              alt="Ahmed Ishmael"
              width="25px"
              height="25px"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
