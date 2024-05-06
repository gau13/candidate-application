import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

const Filters = ({ onFilter }) => {
  const [minExperience, setMinExperience] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);
  // Add more state variables for other filter criteria as needed

  const handleFilter = () => {
    // Construct the filter object based on the state variables
    const filters = {
      minExperience,
      companyName,
      location,
      remoteOnly,
      // Add more filter criteria as needed
    };
    // Pass the filters to the onFilter function prop
    onFilter(filters);
  };

  return (
    <div>
      <TextField
        label="Min Experience"
        value={minExperience}
        onChange={(e) => setMinExperience(e.target.value)}
      />
      <TextField
        label="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={remoteOnly}
            onChange={(e) => setRemoteOnly(e.target.checked)}
          />
        }
        label="Remote Only"
      />
      {/* Add more filter criteria inputs as needed */}
      <Button variant="contained" color="primary" onClick={handleFilter}>
        Filter
      </Button>
    </div>
  );
};

export default Filters;