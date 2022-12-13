import React from "react";
import "./css/Header.css";
import Star from "./assets/smStar.png";
import { Container } from "react-bootstrap";
import { AiOutlineFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineInstagram } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <header className="py-2">
      <Container id="header">
        <div id="header-txt">
          <img src={Star} alt="star" /> 10% discount for registered users
        </div>
        <div className="d-flex align-items-center">
          <a
            href="https://www.facebook.com/ahmedmishmael"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineFacebook />
          </a>
          <a
            href="https://twitter.com/ahmedmishmael"
            target="_blank"
            className="ms-2"
            rel="noreferrer"
          >
            <TfiTwitter />
          </a>
          <a
            href="https://www.instagram.com/ahmedmishmael"
            target="_blank"
            className="ms-2"
            rel="noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <Dropdown className="ms-2">
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              English
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">French</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Greek</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Italian</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </header>
  );
};

export default Header;
