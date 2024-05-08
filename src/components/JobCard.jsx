import React, { useEffect, useState } from "react";
// import { Card, CardContent, Typography, Button } from "@mui/material";
import "./JobCard.css";

const JobCard = ({ job }) => {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount((prevCount) => prevCount + 1);
  //   setFilteredJobs(jobs);
  // }, [job]);

  // console.log(count, { job });
  const [expanded, setExpanded] = useState(false);

  const experience = job.minExp !== null ? job.minExp : 0;

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="container">
        <div className="job-listing-card">
          <div className="header">
            <img className="logo" src={job.logoUrl} alt="" />
            <div className="info">
              <p>{job.jobRole}</p>
              <span>{job.location}</span>
              <span className="company">{job.companyName}</span>
            </div>
          </div>

          <div className="description">
            <p>About Company</p>
            <h4>About Us</h4>

            {expanded
              ? job.jobDetailsFromCompany
              : job.jobDetailsFromCompany.slice(0, 200)}
            {job.jobDetailsFromCompany.length > 100 && !expanded && (
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={toggleExpand}
              >
                ... View Job ....
              </span>
            )}
            {job.jobDetailsFromCompany.length > 100 && expanded && (
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={toggleExpand}
              >
                ... Read less
              </span>
            )}
          </div>
          <div className="exp">
            <p>Minimum Experience</p>

            <p>{experience}</p>
          </div>

          <div className="buttons">
            <button>Easy Apply</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
