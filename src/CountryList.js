// CountryList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch the list of countries from your API
    axios
      .get("https://localhost:7001/api/Country")
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
       
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);
   // Function to handle search input change
   const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the list of countries based on the search term
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())||
    country.shortName.toLowerCase().includes(searchTerm.toLowerCase())||
    country.countryCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row pt-4">
        <div className="col-md-6">
          <h2>List of Countries</h2>
        </div>
        <div className="col-md-6 text-md-end">
          <Link to="/create" type="button" className="btn btn-primary">
            <i className="bi bi-plus-circle"></i> Add Country
          </Link>
        </div>
        <br />
        <br />
        <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>
       
      </div>

        <table  className="table table-bordered table-striped table-responsive">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Short Name</th>
              <th>Country Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCountries.map((country) => (
              <tr key={country._id}>
                <td>{country.id}</td>
                <td>{country.name}</td>
                <td>{country.shortName}</td>
                <td>{country.countryCode}</td>
                <td>
                  <div className="w-75 btn-group">
                    <Link
                      to={`/detail/${country.id}`}
                      className="btn btn-primary"
                      title="Details"
                    >
                      <i className="bi bi-info"></i>
                    </Link>
                    <Link
                      to={`/edit/${country.id}`}
                      className="btn btn-warning"
                      title="Edit"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                    <Link
                      to={`/delete/${country.id}`}
                      className="btn btn-danger"
                      title="Delete"
                    >
                      <i className="bi bi-trash"></i>
                    </Link>{" "}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryList;
