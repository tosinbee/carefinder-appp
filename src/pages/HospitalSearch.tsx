import React, { useState, useEffect } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";

import hospitalInfo from "../assets/data/hospitalInfo";
import HospitalList from "../components/UI/HospitalList";

const HospitalSearch = () => {
  const [hospitalData, setHospitalData] = useState<Array<any>>([]);
  const [filteredData, setFilteredData] = useState<Array<any>>([]);

  useEffect(() => {
    setHospitalData([...hospitalInfo]);
    setFilteredData([...hospitalInfo]);
  }, []);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.target.value;

    if (filterValue === "all") {
      setFilteredData(hospitalData);
    } else {
      const filteredLists = hospitalData.filter((item) => item.location === filterValue);
      setFilteredData(filteredLists);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();

    const searchedProducts = hospitalData.filter((item) =>
      item.hospitalName.toLowerCase().includes(searchTerm)
    );

    setFilteredData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6" className="text-center">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                 <option value="all">Filter By States</option>
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                  <option value="ogun">Ogun</option>
                  <option value="osun">Osun</option>
                  <option value="oyo">Oyo</option>
                  <option value="ondo">Ondo</option>
                  <option value="ekiti">Ekiti</option>
                  <option value="anambra">Anambra</option>
                  <option value="bauchi">Bauchi</option>
                  <option value="jos">Jos</option>
                  <option value="rivers">Rivers</option>
                  <option value="taraba">Taraba</option>
                  <option value="sokoto">Sokoto</option>
                  <option value="adamawa">Adamawa</option>
                  <option value="abia">Abia</option>
                  <option value="enugu">Enugu</option>
                  <option value="uyo">Uyo</option>
                  <option value="benue">Benue</option>
                  <option value="delta">Delta</option>
                  <option value="imo">Imo</option>
                  <option value="kwara">Kwara</option>
                  <option value="niger">Niger</option>
                  <option value="kano">Kano</option>
                  <option value="kaduna">Kaduna</option>
                  <option value="calabar">Calabar</option>
                  <option value="ebonyi">Ebonyi</option>
               </select>

              </div>
            </Col>

            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="12" className="text-center">
              <div className="search__box">
                <input
                  type="text"
                  onChange={handleSearch}
                  placeholder="Search....."
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {filteredData.length === 0 ? (
              <h1 className="text-center fs-4">No Hospitals Found</h1>
            ) : (
              <HospitalList data={filteredData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default HospitalSearch;
