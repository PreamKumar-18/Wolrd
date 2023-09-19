import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CountryCreate() {
  const [formData, setFormData] = useState({
    name: "",
    shortName: "",
    countryCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:7001/api/Country", formData)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.log("Error Creating Country", error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="border p-3 p-4">
          <h2 className="pl-3">Create Country</h2>
          <br />
          <div className="mb-3 ">
            <label htmlFor="name" >Name</label>
            <input
            className="form-control"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Short Name</label>
            <input
             className="form-control"
              type="text"
              name="shortName"
              placeholder="Short Name"
              value={formData.shortName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Country Code</label>
            <input
             className="form-control"
              type="text"
              name="countryCode"
              placeholder="Country Code"
              value={formData.countryCode}
              onChange={handleChange}
            />
          </div>
          <div>
            <Link to="/" type="submit" className="btn btn-primary m-3">Create</Link>
            <Link to="/" type="button" className="btn btn-danger">Back</Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default CountryCreate;
