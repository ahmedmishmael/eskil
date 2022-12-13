import React from "react";
import "./css/FAQs.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Careers = () => {
  return (
    <div id="careers">
      <h2>CAREERS</h2>
      <p>
        Please send your CV with a description of your qualifications and
        competencies to <u>jobs@eskil.com</u>. Please mark it “job application
        for – the area you are applying for“. We are looking forward to hearing
        from you.
      </p>
      <p>We look forward to receiving your application.</p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam non
        umy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
        ea.
      </p>
      <h5>Available positions</h5>
      <ul>
        <li>
          <MdOutlineArrowForwardIos /> Regional Sales Manager
        </li>
        <li>
          <MdOutlineArrowForwardIos /> Digital Marketing Intern
        </li>
        <li>
          <MdOutlineArrowForwardIos /> UX Specialist & Web Editor
        </li>
        <li>
          <MdOutlineArrowForwardIos /> PR & Communication Manager
        </li>
        <li>
          <MdOutlineArrowForwardIos /> Production worker
        </li>
        <li>
          <MdOutlineArrowForwardIos /> Sales Support
        </li>
      </ul>
    </div>
  );
};

export default Careers;
