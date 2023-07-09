import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import HospitalList from "../components/UI/HospitalList";

import  HospitalInfo  from "../assets/data/hospitalInfo";
import "../styles/product-details.css";

const HospitalDetails = () => {
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState<number | null>(null);
  const reviewUser = useRef<HTMLInputElement>(null);
  const reviewMsg = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();
  const information = HospitalInfo.find((item) => item.id === id);
  const {
    hospitalName,
    location,
    avgRating,
    reviews,
    description,
    shortDesc,
  } = information!;

  const relatedProducts = HospitalInfo.filter((item) => item.location === location);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current?.value;
    const reviewUserMsg = reviewMsg.current?.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success("Review sent successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [information]);

  return (
    <Helmet title={hospitalName}>
      <CommonSection title={hospitalName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <div className="product__details">
                <h2>{hospitalName}</h2>
                <div className="product__rating d-flex align-items-center gap-3 mb-3">
                  <div className="">
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-fill"></i>
                    </span>
                  </div>

                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>

                <p className="mt-3">{shortDesc}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="">
        <Container>
          <Row>
            <Col lg="12" className="">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>John doe</h6>
                          <span>{item.rating} (average rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <form action="" onSubmit={submitHandler}>
                        <h4>How would you rate this hospital? </h4>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter Name"
                            required
                            ref={reviewUser}
                          />
                        </div>

                        <div className="form__group d-flex align-items-center gap-3 rating__group">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<i className="ri-star-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<i className="ri-star-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<i className="ri-star-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<i className="ri-star-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5<i className="ri-star-fill"></i>
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea
                            rows={4}
                            placeholder="Review Message..."
                            required
                            ref={reviewMsg}
                          />
                        </div>

                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className="buy__button"
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default HospitalDetails;
