import React from "react";
import "./css/Home.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SmChair from "./assets/SMChair.jpg";
import EskilMP4 from "./assets/EskilMP4.mp4";
import SmStar from "./assets/smStar.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Brand1 from "./assets/brand1.png";
import Brand2 from "./assets/brand2.png";
import Brand3 from "./assets/brand3.png";
import Brand4 from "./assets/brand4.png";
import Brand5 from "./assets/brand5.png";
import Brand6 from "./assets/brand6.png";
import Team1 from "./assets/team1.jpg";
import Team2 from "./assets/team2.jpg";
import Team3 from "./assets/team3.jpg";
import Team4 from "./assets/team4.jpg";
import { BsTwitter } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import Blog1 from "./assets/blog1.jpg";
import Blog2 from "./assets/blog2.jpg";
import Blog3 from "./assets/blog3.jpg";
import Blog4 from "./assets/blog4.jpg";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Container>
        <div id="home-header" className="row pb-5">
          <div className="col-lg-3 pb-5">
            <h2>FURNITURE & DÉCOR</h2>
            <p>
              Made from premium non-stretch Japanese denim for a
              vintage-inspired look, the 90's Cheeky Jean has an easy straight
              leg.
            </p>
            <Link to="/about" className="learn-more-btn p-2">
              Learn More
            </Link>
            <div className="home-header-links d-flex flex-column pt-3">
              <Link to="">
                <MdOutlineArrowForwardIos /> CHAIR
              </Link>
              <Link to="">
                <MdOutlineArrowForwardIos /> HOME DECOR
              </Link>
              <Link to="">
                <MdOutlineArrowForwardIos /> TABLES
              </Link>
              <Link to="">
                <MdOutlineArrowForwardIos /> LIGHTING
              </Link>
            </div>
          </div>
          <div className="col-lg-6 d-flex pb-5">
            <div id="caption-container">
              <div id="header-video-caption">
                <p>10% discount for registered users</p>
              </div>
              <div className="pt-3">
                <img src={SmStar} alt="star" />
              </div>
            </div>
            <video
              src={EskilMP4}
              alt="Eskil mp4"
              width="92%"
              loop
              muted
              autoPlay
              playsInline
            />
          </div>
          <div className="col-lg-3">
            <img src={SmChair} alt="chair" width="100%" />
            <p>
              The perfect place for every contemporary furniture store and
              manufacture. This is Eskil
            </p>
          </div>
        </div>

        <div id="home-brands" className="py-5">
          <div className="row">
            <div className="col-lg-2 col-md-2">
              <img src={Brand1} alt="brand" width="100%" />
            </div>
            <div className="col-lg-2 col-md-2">
              <img src={Brand2} alt="brand" width="100%" />
            </div>
            <div className="col-lg-2 col-md-2">
              <img src={Brand3} alt="brand" width="100%" />
            </div>
            <div className="col-lg-2 col-md-2">
              <img src={Brand4} alt="brand" width="100%" />
            </div>
            <div className="col-lg-2 col-md-2">
              <img src={Brand5} alt="brand" width="100%" />
            </div>
            <div className="col-lg-2 col-md-2">
              <img src={Brand6} alt="brand" width="100%" />
            </div>
          </div>
        </div>

        <div id="team" className="py-5">
          <div className="row">
            <div className="col-lg-12 mb-5 d-flex flex-column align-items-center">
              <p>OUR CREATIVE FORCE</p>
              <h2>Meet our team</h2>
              <div className="line"></div>
            </div>
            <div className="col-lg-3 col-md-3">
              <img src={Team1} alt="team" width="100%" />
              <h5>Nicolette Ritonni</h5>
              <p>FINE CERAMICS</p>
              <div className="team-socialmedia pt-3">
                <Link to="">
                  <BsTwitter />
                </Link>
                <Link to="">
                  <ImInstagram />
                </Link>
                <Link to="">
                  <BsLinkedin />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <img src={Team2} alt="team" width="100%" />
              <h5>Nicolas Waldau</h5>
              <p>ARCHITECT</p>
              <div className="team-socialmedia pt-3">
                <Link to="">
                  <BsTwitter />
                </Link>
                <Link to="">
                  <ImInstagram />
                </Link>
                <Link to="">
                  <BsLinkedin />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <img src={Team3} alt="team" width="100%" />
              <h5>Juliette Massé</h5>
              <p>STORE MANAGER</p>
              <div className="team-socialmedia pt-3">
                <Link to="">
                  <BsTwitter />
                </Link>
                <Link to="">
                  <ImInstagram />
                </Link>
                <Link to="">
                  <BsLinkedin />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <img src={Team4} alt="team" width="100%" />
              <h5>Yeung Ngai</h5>
              <p>DESIGNER</p>
              <div className="team-socialmedia pt-3">
                <Link to="">
                  <BsTwitter />
                </Link>
                <Link to="">
                  <ImInstagram />
                </Link>
                <Link to="">
                  <BsLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="blog" className="py-5">
          <div className="row">
            <div className="col-lg-12 mb-5 d-flex flex-column align-items-center">
              <p>OUR BLOG</p>
              <h2>LATEST NEWS</h2>
              <div className="line"></div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="blog-img-container">
                <img src={Blog1} alt="blog" width="100%" />
              </div>
              <p>ADMIN SEPTEMBER 9, 2021</p>
              <h5>
                ESKIL IS PROUD TO STOCK ALL BRANDS AT ONE SITE, EVERY THING
                TOGETHER
              </h5>
              <p>
                Take all negative words out of your mental dictionary and focus
                on the solutions… <b>Read more</b>
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="blog-img-container">
                <img src={Blog2} alt="blog" width="100%" />
              </div>

              <p>ADMIN DECEMBER 4, 2021</p>
              <h5>
                HOW TO ACHIEVE NATURAL SHADES IN YOUR SWEET HOME, EASY PRETTY
                TIPS
              </h5>
              <p>
                The main compont of a healthy environment for self esteem is
                that it needs…<b>Read more</b>
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="blog-img-container">
                <img src={Blog3} alt="blog" width="100%" />
              </div>

              <p>ADMIN DECEMBER 9, 2021</p>
              <h5>
                TIPS AND TRICKS: HOW TO ACHIEVE NATURAL SHADES IN YOUR SWEET
                HOME
              </h5>
              <p>
                Never ever think of giving up. Winners never quit and quitters
                never win. Take…<b>Read more</b>
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="blog-img-container">
                <img src={Blog4} alt="blog" width="100%" />
              </div>

              <p>ADMIN MAY 9, 2022</p>
              <h5>
                HANDMADE PIECES THAT TOOK TIME TO MAKE RETRO-NEW ARTISTIC DESIGN
              </h5>
              <p>
                We all intend to plan ahead, but too often let the day-to-day
                minutia get…<b>Read more</b>
              </p>
            </div>
          </div>
        </div>
        <Newsletter />
      </Container>
    </div>
  );
};

export default Home;
