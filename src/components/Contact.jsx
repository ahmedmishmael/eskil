import React from "react";
import "./css/Contact.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Container>
      <div className="navigation">
        <Link to="/">Home</Link> / Contact
      </div>
      <div id="contact" className="pb-5">
        <h2 className="text-center mb-5">CONTACT US</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5839.408073442204!2d-81.219954!3d42.963441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef24ff5ea0121%3A0xa83d31167b636d38!2zMjAwIEFkZWxhaWRlIFN0IFMsIExvbmRvbiwgT04gTjVaIDNMMdiMINmD2YbYr9in!5e0!3m2!1sar!2sus!4v1666195496494!5m2!1sar!2sus"
          width="80%"
          height="450"
          loading="lazy"
          title="address"
          className="mb-5"
        ></iframe>
        <p>
          We are always keen to hear from people that would like to add a new
          perspectives to our team.
        </p>
        <h5>GET IN TOUCH</h5>
        <p>
          Got any questions? We look forward to answering all your requests.
        </p>
        <p>
          Monday – Friday: 08.00 – 17.00 <br />
          Saturday: 09.00 – 16.30
        </p>
        <h5>E-MAIL:</h5>
        <p>
          Orders: salesorder@qodestoir.com
          <br />
          General inquiries: customerservice@qodestoir.com
          <br />
          Service/claims: service@qodestoir.com
          <br />
        </p>
        <h5>PHONE:</h5>
        <p>+355 0992 8855</p>
      </div>
    </Container>
  );
};

export default Contact;
