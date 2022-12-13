import React from "react";
import "./css/FAQs.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import FAQscontent from "./FAQscontent";
import Terms from "./Terms";
import Delivery from "./Delivery";
import Returns from "./Returns";
import Orders from "./Orders";
import Careers from "./Careers";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const FAQs = () => {
  return (
    <Container>
      <div className="navigation">
        <Link to="/">Home</Link>/FAQs
      </div>
      <div id="FAQs" className="py-5">
        <div className="row">
          <aside className="col-lg-3 mb-5">
            <h5>CUSTOMER SUPPORT</h5>
            <p>support@eskil.com</p>
            <Link to="/FAQs">
              <MdOutlineArrowForwardIos /> FAQs
            </Link>
            <Link to="/FAQs/terms-conditions">
              <MdOutlineArrowForwardIos /> Terms & Conditions
            </Link>
            <Link to="/FAQs/delivery-information">
              <MdOutlineArrowForwardIos /> Delivery Information
            </Link>
            <Link to="/FAQs/returns-refunds">
              <MdOutlineArrowForwardIos /> Returns & Refunds
            </Link>
            <Link to="/FAQs/order-tracking">
              <MdOutlineArrowForwardIos /> Order Tracking
            </Link>
            <Link to="/FAQs/careers">
              <MdOutlineArrowForwardIos /> Careers
            </Link>
          </aside>
          <main className="col-lg-9">
            <Routes>
              <Route path="/" element={<FAQscontent />} />
              <Route path="/terms-conditions" element={<Terms />} />
              <Route path="/delivery-information" element={<Delivery />} />
              <Route path="/returns-refunds" element={<Returns />} />
              <Route path="/order-tracking" element={<Orders />} />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </main>
        </div>
      </div>
    </Container>
  );
};

export default FAQs;
