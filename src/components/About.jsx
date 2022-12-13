import React from "react";
import "./css/About.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutImg from "./assets/About.jpg";
import Material1 from "./assets/material1.png";
import Material2 from "./assets/material2.png";
import Material3 from "./assets/material3.png";
import Material4 from "./assets/material4.png";
import Material5 from "./assets/material5.png";
import Carousel from "react-bootstrap/Carousel";
import Customer1 from "./assets/customer1.jpg";
import Customer2 from "./assets/customer2.jpg";
import Customer3 from "./assets/customer3.jpg";

function About() {
  return (
    <div id="about">
      <Container>
        <div className="navigation mb-5">
          <Link to="/">Home</Link> / About
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 mt-5">
            <h2>ABOUT STÒIR</h2>
            <p>
              <b>
                psum voluptate et non. Est velit et ex laboriosam dolor est
                inven tore quo numquam. Labore voluptas
              </b>
            </p>
            <p>
              Ipsum voluptate et non. Est velit et ex laboriosam dolor est inven
              tore quo numquam. Labore voluptas nihil molestiae sint delectus
              sint sequi volup tatem. Quia id omnis aliquid suscipit* recusandae
              similique. Vero natus sed animi reiciendis. Ipsum voluptate et
              non. Est velit et ex laboriosam dolor est inventore quo nquam.
              Labore voluptas nihil molestiae sint delectus sint sequi
              voluptatem. Quia id omnis aliquid
            </p>
            <Link to="/FAQs/careers" id="see-careers-btn">
              SEE CAREERS
            </Link>
          </div>
          <div className="col-lg-6 mt-5">
            <img src={AboutImg} alt="about-img" width="100%" />
          </div>
        </div>
        <div className="row my-5">
          <div id="home-decor" className="col-lg-6">
            <h5>Home Decor</h5>
            <br />
            <h3>Testimonials</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, se do
              eiusm odtemporw incididunt ut labore et dolorea gna aliqua. Ut
              enim ad min imveniam, quis nostrudati.
            </p>
          </div>
          <Carousel id="customers" className="col-lg-6 py-5">
            <Carousel.Item>
              <div className="img-container">
                <img
                  className="d-block mb-3"
                  src={Customer1}
                  alt="First slide"
                />
              </div>
              <h3 className="mb-5">Bradley Kim</h3>
              <q>
                This is due to their excellent service, competitive pricing and
                customer support. It's throughly refresing to get such a
                personal touch. Duis aute lorem ipsum is simply free text irure
                dolor in reprehenderit in esse nulla pariatur.
              </q>
            </Carousel.Item>
            <Carousel.Item>
              <div className="img-container">
                <img
                  className="d-block mb-3"
                  src={Customer2}
                  alt="Second slide"
                />
              </div>
              <h3 className="mb-5">Jessica Brown</h3>
              <q>
                This is due to their excellent service, competitive pricing and
                customer support. It's throughly refresing to get such a
                personal touch. Duis aute lorem ipsum is simply free text irure
                dolor in reprehenderit in esse nulla pariatur.
              </q>
            </Carousel.Item>
            <Carousel.Item>
              <div className="img-container">
                <img
                  className="d-block mb-3"
                  src={Customer3}
                  alt="Third slide"
                />
              </div>
              <h3 className="mb-5">Caleb Hoffman</h3>
              <q>
                This is due to their excellent service, competitive pricing and
                customer support. It's throughly refresing to get such a
                personal touch. Duis aute lorem ipsum is simply free text irure
                dolor in reprehenderit in esse nulla pariatur.
              </q>
            </Carousel.Item>
          </Carousel>
        </div>
        <h2 className="text-center m-5">
          Made of high quality materials and by highest possible standards
        </h2>
        <div className="mb-5">
          <div className="row mb-5" id="materials">
            <div className="col-lg-2 col-md-2 ">
              <img
                src={Material1}
                alt="material"
                width="50%"
                className="mb-3"
              />
              <p>
                WATER
                <br />
                RESISTANCE
              </p>
            </div>
            <div className="col-lg-2 col-md-2 ">
              <img
                src={Material2}
                alt="material"
                width="50%"
                className="mb-3"
              />
              <p>
                ECO FRIENDLY
                <br />
                MATERIALS
              </p>
            </div>
            <div className="col-lg-2 col-md-2 ">
              <img
                src={Material3}
                alt="material"
                width="50%"
                className="mb-3"
              />
              <p>
                FROST
                <br />
                RESISTANT
              </p>
            </div>
            <div className="col-lg-2 col-md-2 ">
              <img
                src={Material4}
                alt="material"
                width="50%"
                className="mb-3"
              />
              <p>
                EASY
                <br />
                ASSEMBLING
              </p>
            </div>
            <div className="col-lg-2 col-md-2 ">
              <img
                src={Material5}
                alt="material"
                width="50%"
                className="mb-3"
              />
              <p>
                DURABLE
                <br />
                MATERIALS
              </p>
            </div>
            <div className="col-lg-2 col-md-2 ">
              <img
                src={Material1}
                alt="material"
                width="50%"
                className="mb-3"
              />
              <p>
                WATER
                <br />
                PROOF
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
