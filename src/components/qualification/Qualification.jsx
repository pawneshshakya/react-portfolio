import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel Journey</span>
      <div className="qualificatin__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active qualification--flex"
                : "qualification__button qualification--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active qualification--flex"
                : "qualification__button qualification--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">M.C.A</h3>
                <span className="qualification__subtitle">
                  Ignou - New Delhi
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">B.A</h3>
                <span className="qualification__subtitle">Dbrau - Agra</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2015 - 2018
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Higher Secondary (12th)
                </h3>
                <span className="qualification__subtitle">
                  K.V.S - Pathankot
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2013 - 2014
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Matriculation (10th) </h3>
                <span className="qualification__subtitle">
                  K.V.S - Pathankot
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2011 - 2012
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Node.js</h3>
                <span className="qualification__subtitle">
                  Ducat - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">React.js</h3>
                <span className="qualification__subtitle">
                  Ducat - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Express</h3>
                <span className="qualification__subtitle">
                  Ducat - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">MongoDB</h3>
                <span className="qualification__subtitle">
                  Ducat - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
