import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br />
              Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Services with more than 1 year of experience. Providing Quality
                work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I develop the user interface
                    </p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">Web page development</p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I create UX element interection
                    </p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I position your comapny barand
                    </p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Sesign and mockups of products for companies
                    </p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br />
              Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
                Services with more than 1 year of experience. Providing Quality
                work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I develop the user interface
                    </p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">Web page development</p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I create UX element interection
                    </p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I position your comapny barand
                    </p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Sesign and mockups of products for companies
                    </p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Web <br />
              Developer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
                Services with more than 1 year of experience. Providing Quality
                work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I develop the user interface
                    </p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">Web page development</p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I create UX element interection
                    </p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I position your comapny barand
                    </p>
                  </i>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Sesign and mockups of products for companies
                    </p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
