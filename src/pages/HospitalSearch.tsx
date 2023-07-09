import React, { useState, useEffect } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/hospitalsearch.css";
import ReactMarkdown from "react-markdown";
import hospitalInfo from "../assets/data/hospitalInfo";
import HospitalList from "../components/UI/HospitalList";
import * as XLSX from "xlsx";



const HospitalSearch = () => {
  const [hospitalData, setHospitalData] = useState<Array<any>>([]);
  const [filteredData, setFilteredData] = useState<Array<any>>([]);
  const [markdown, setMarkdown] = useState<string>("");
  const [newEntry, setNewEntry] = useState({
    id: "",
    hospitalName: "",
    address: "",
    location: "",
    shortDesc: "",
    description: "",
    reviews: [],
    avgRating: 0,
  });



  useEffect(() => {
    setHospitalData([...hospitalInfo]);
    setFilteredData([...hospitalInfo]);
  }, 
  
  []);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.target.value;

    if (filterValue === "all") {
      setFilteredData(hospitalData);
    } else {
      const filteredLists = hospitalData.filter(
        (item) => item.location === filterValue
      );
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

  const handleExportClick = () => {
    exportHospitals();
    
  };
  
  const exportHospitals = () => {
    const formattedData = filteredData.map((item) => ({
      ID: item.id,
      HospitalName: item.hospitalName,
      Address: item.address,
      Location: item.location,
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Hospitals");
  
    XLSX.writeFile(workbook, "hospitals.xlsx");
  };

  
  const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Process the markdown input and convert it to a new entry
    const parsedEntry = parseMarkdownInput(markdown);

    // Update the hospital list with the new entry
    const updatedHospitalData = [...hospitalData, parsedEntry];
    setHospitalData(updatedHospitalData);
    setFilteredData(updatedHospitalData);
    setNewEntry({
      id: "",
      hospitalName: "",
      address: "",
      location: "",
      shortDesc: "",
      description: "",
      reviews: [],
      avgRating: 0,
    });
    // Clear the markdown input field
    setMarkdown("");
  };

  const parseMarkdownInput = (input: string) => {
    
    const [hospitalName, address, location] = input.split("\n");

    const newEntry = {
      id: "", // Generate a unique ID for the new entry
      hospitalName: "", // Extract the hospital name from the input
      address: "", // Extract the address from the input
      location: "", // Extract the location from the input
      // Add other properties as needed
    };

    return newEntry;
  };

  const generateUniqueId = () => {
    const timestamp = Date.now();
    const randomSuffix = Math.floor(Math.random() * 10000);
    return `entry-${timestamp}-${randomSuffix}`;
  };

  return (
    <Helmet title="Hospital">
      <CommonSection title="Hospital List" />
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

      <section className="export__list">
        <button onClick={handleExportClick}>Export Hospital List</button>
      </section>

      {/* <section className="markdown-editor">
      <form onSubmit={handleSubmit}>
        <textarea value={markdown} onChange={handleMarkdownChange} />
        <button type="submit">Add Entry</button>
      </form>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section> */}
    </Helmet>
  );
};

export default HospitalSearch;




























