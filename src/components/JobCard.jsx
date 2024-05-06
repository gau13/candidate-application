import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{job.jobRole}</Typography>
        <Typography variant="subtitle1">Company: {job.companyName}</Typography>
        <Typography variant="subtitle1">Location: {job.location}</Typography>
        <Typography variant="body1" gutterBottom>
          {expanded
            ? job.jobDetailsFromCompany
            : job.jobDetailsFromCompany.slice(0, 100)}
          {job.jobDetailsFromCompany.length > 100 && !expanded && (
            <span onClick={toggleExpand}>... Read more</span>
          )}
          {job.jobDetailsFromCompany.length > 100 && expanded && (
            <span onClick={toggleExpand}>... Read less</span>
          )}
        </Typography>
        <Typography variant="subtitle2">
          Experience Required: {job.minExp}
        </Typography>
        <Button variant="contained" color="primary">
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
