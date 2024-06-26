import React from "react";
import Slider from "react-slick";
import SpeakerImage1 from "../../images/speakers/speaker-full-one.jpg";
import SpeakerImage2 from "../../images/speakers/speaker-full-two.jpg";
import "../../scss/style.scss";
import "../../scss/slickSlider.scss";
import { PrevArrow, NextArrow } from "./SliderArrows"; // Import custom arrow components
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';

export default function Speaker2() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <PrevArrow />, // Use custom previous arrow
    nextArrow: <NextArrow />  // Use custom next arrow
  };

  return (
    <section className="speakers-full-width">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
          <div className="slider-container">
      <Slider {...settings}>
        <div className="slick-slide">
          <img src={SpeakerImage1} alt="speaker" className="img-fluid" />
          <div className="primary-overlay text-center">
            <h5>GEORGE G. HERNANDEZ</h5>
            <p>CEO Rancom Motor</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faSquareTwitter} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faPinterest} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="slick-slide">
          <img src={SpeakerImage2} alt="speaker" className="img-fluid" />
          <div className="primary-overlay text-center">
            <h5>JANE DOE</h5>
            <p>CTO Tech Innovations</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faSquareTwitter} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faPinterest} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="slick-slide">
          <img src={SpeakerImage1} alt="speaker" className="img-fluid" />
          <div className="primary-overlay text-center">
            <h5>JOHN SMITH</h5>
            <p>CMO Creative Agency</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faSquareTwitter} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faPinterest} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="slick-slide">
          <img src={SpeakerImage2} alt="speaker" className="img-fluid" />
          <div className="primary-overlay text-center">
            <h5>ANNA BROWN</h5>
            <p>COO Business Corp</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faSquareTwitter} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" tabIndex="-1">
                  <FontAwesomeIcon icon={faPinterest} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
