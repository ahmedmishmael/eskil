import React from "react";
import "./css/Portfolio.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";

const Portfolio = (props) => {
  const projects = props.projects;

  return (
    <div id="portfolio">
      <Container>
        <div className="navigation">
          <Link to="/">Home</Link> / Portfolio
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center mb-5">PROJECT CASES</h2>
          </div>
          {projects.map((project) => {
            return (
              <div className="col-lg-4 mb-4" key={project.id}>
                <div className="project-img-wrapper">
                  <img src={project.url} alt="project" width="100%" />
                  <div className="layer ps-3 pb-3">
                    <p>{project.title}</p>
                    <h5>{project.name}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Newsletter />
      </Container>
    </div>
  );
};

export default Portfolio;
