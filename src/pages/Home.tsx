import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-pic.jpg";

import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hospitalInfo from "../assets/data/hospitalInfo";

import Services from "../services/Services";
import HospitalList from "../components/UI/HospitalList";

// import counterImg from "../assets/images/counter-timer-img.png";

// import Clock from "../components/UI/Clock";

const Home = () => {
 
  const [newHospitals, setNewHospitals] = useState<Array<any>>([]);
const [bestHospitalLocations, setBestHospitalLocations] = useState<Array<any>>([]);
const [hospitalsInTheWest, setHospitalsInTheWest] = useState<Array<any>>([]);
const [hospitalsInTheSouth, setHospitalsInTheSouth] = useState<Array<any>>([]);
const [popularSearches, setPopularSearches] = useState<Array<any>>([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredNewHospitals = hospitalInfo.filter(
      (item) => item.location === "ogun"
    );
    const filteredBestHospitalLocations= hospitalInfo.filter(
      (item) => item.location === "abuja"
    );
    const filteredHospitalsInTheWest = hospitalInfo.filter(
      (item) => item.location === "oyo"
    );
    const filteredHospitalsInTheSouth = hospitalInfo.filter(
      (item) => item.location === "rivers"
    );
    const filteredPopularSearches = hospitalInfo.filter(
      (item) => item.location === "abia"
    );

    setNewHospitals(filteredNewHospitals);
    setBestHospitalLocations(filteredBestHospitalLocations);
    setHospitalsInTheWest(filteredHospitalsInTheWest);
    setHospitalsInTheSouth(filteredHospitalsInTheSouth);
    setPopularSearches(filteredPopularSearches);

  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Hospital locations in {year}</p>
                <h2>Find Hospitals Near You Easily</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  nihil, esse rerum unde sunt reiciendis dolorum culpa quidem
                  magni debitis.
                </p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__button"
                >
                  <Link to="/hospital">Start Now</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img  src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="10"  className="text-center">
              <h2 className="section__title">New Hospitals</h2>
            </Col>
            <HospitalList data={newHospitals} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Hospitals in Abuja</h2>
            </Col>
            <HospitalList data={bestHospitalLocations} />
          </Row>
        </Container>
      </section>
     

      {/* <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__button store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Additions</h2>
            </Col>
            <HospitalList data={hospitalsInTheWest} />
            <HospitalList data={hospitalsInTheSouth} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular Hospitals in Abia</h2>
            </Col>
            <HospitalList data={popularSearches} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
