import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function CountryDetail() {
  const [country, setCountry] = useState(null);
  const { id } = useParams(); // Get the country id from the URL

  useEffect(() => {
    // Fetch the details of the selected country using the id
    axios
      .get(`https://localhost:7001/api/Country/${id}`)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country details:", error);
      });
  }, [id]);

  if (!country) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="mt-4">Country Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name:</h5>
          <p className="card-text">{country.name}</p>

          <h5 className="card-title">Short Name:</h5>
          <p className="card-text">{country.shortName}</p>

          <h5 className="card-title">Country Code:</h5>
          <p className="card-text">{country.countryCode}</p>
        </div>
      </div>

      <div className="mt-3">
        <Link to="/" className="btn btn-danger">
          Back
        </Link>
      </div>
    </div>
  );
}

export default CountryDetail;
