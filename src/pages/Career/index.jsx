import React from "react";
import "./career.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import transition from "../../pageTransition";
import Header from "../../components/Header";

import Footer from "../../components/Footer";

function Career() {
  const navigate = useNavigate();

  const handleSectionClick = () => {
    navigate("/contactus");
  };

  return (
    <>
      <Header />
      <div className="career-page">
        <header className="career-header">
          <h1>WORK THAT SHAPES THE FUTURE</h1>
          <h2>Browser Jobs</h2>
        </header>
        <section className="career-section" onClick={handleSectionClick}>
          <ul className="career-list">
            <span>
              Frontend Development
              <div>
                <FaArrowRightLong />
              </div>
            </span>
            <li>
              AI
              <GoDotFill />
            </li>
            <li>
              Ux/Ui <GoDotFill />
            </li>
            <li>
              Backend
              <GoDotFill />
            </li>
            <li>
              Graphic design <GoDotFill />
            </li>
            <li>
              Motion design <GoDotFill />
            </li>
            <li>
              Remote
              <GoDotFill />
            </li>
            <li>
              SMM <GoDotFill />
            </li>
            <li>
              Security
              <GoDotFill />
            </li>
            <li>
              Software Engineering <GoDotFill />
            </li>
          </ul>
        </section>
        <p className="career-contact">
          Please send your CV to
          <a href="mailto:career@jussplay.dev">career@jussplay.dev</a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default transition(Career);
