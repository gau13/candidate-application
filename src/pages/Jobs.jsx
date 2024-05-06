// src/pages/Jobs.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, CircularProgress } from "@mui/material";
import JobCard from "../components/JobCard";
import Filters from "../components/Filters";
import { fetchJobs } from "../store/actions";

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <Container>
      <Filters />
      <Grid container spacing={2}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={job.id}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      {loading && <CircularProgress />}
      {error && <p>Error: {error}</p>}
    </Container>
  );
};

export default Jobs;
