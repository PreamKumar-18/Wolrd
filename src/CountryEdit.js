import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function CountryEdit() {
  const [formData, setFormData] = useState({
    name: '',
    shortName: '',
    countryCode: '',
  });
  const { id } = useParams();
  useEffect(() => {
    // Fetch the existing country data based on the ID in the URL
    axios
      .get(`https://localhost:7001/api/Country/${id}`) // Adjust the URL to your API endpoint
      .then((response) => {
        console.log(response.data)
        setFormData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching country:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://localhost:7001/api/Country/${id}`, formData) // Adjust the URL to your API endpoint
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error updating country:', error);
      });
  };

  return (
    <div>
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
            <button type="submit" className="btn btn-primary m-3">Update</button>
            <Link to="/" type="button" className="btn btn-danger">Back</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CountryEdit;
