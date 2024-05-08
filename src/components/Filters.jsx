import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

const Filters = ({ onFilter, setFilteredJobs, jobs }) => {
  // console.log("first");
  const [minExp, setMinExp] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [jobRole, setJobRole] = useState("");
  // Add more state variables for other filter criteria as needed

  const handleFilter = () => {
    // console.log(minExperience, companyName, location, remoteOnly);
    // Construct the filter object based on the state variables
    const filters = {
      minExp,
      companyName,
      location,
      jobRole,
      // Add more filter criteria as needed
    };
    // Pass the filters to the onFilter function prop
    setMinExp("");
    setCompanyName("");
    setLocation("");
    setJobRole("");
    onFilter(filters);
  };

  const handleAllData = () => {
    setFilteredJobs(jobs);
  };
  return (
    <div>
      <TextField
        style={{ margin: "10px" }}
        label="Min Experience"
        value={minExp}
        onChange={(e) => setMinExp(e.target.value)}
      />
      <TextField
        style={{ margin: "10px" }}
        label="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <TextField
        style={{ margin: "10px" }}
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextField
        style={{ margin: "10px" }}
        label="Job-Role"
        value={jobRole}
        onChange={(e) => setJobRole(e.target.value)}
      />

      {/* Add more filter criteria inputs as needed */}
      <Button
        style={{ marginTop: "20px" }}
        variant="contained"
        color="primary"
        onClick={handleFilter}
      >
        Filter
      </Button>
      <br />
      <Button
        style={{ marginTop: "20px" }}
        variant="contained"
        color="primary"
        onClick={handleAllData}
      >
        All
      </Button>
    </div>
  );
};

export default Filters;
