// src/pages/Jobs.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, CircularProgress } from "@mui/material";
import JobCard from "../components/JobCard";
import Filters from "../components/Filters";
import fetchJobs from "../store/actions";

const Jobs = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);

  const [isFetching, setIsFetching] = useState(false); // State for loading spinner

  const { jobs, loading, error } = useSelector((state) => state);
  // console.log(jobs);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // console.log(filteredJobs);

  // useEffect(() => {
  //   dispatch(fetchJobs({ limit: 10, offset: 0 })); // Initial load with limit and offset
  // }, [dispatch]);

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   )
  //     return;
  //   // Increment offset and fetch more jobs
  //   setOffset((prevOffset) => prevOffset + 10); // Assuming limit is 10
  //   dispatch(fetchJobs({ limit: 10, offset }));
  // };

  // // Add event listener to handle scrolling
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching // Don't fetch more data if already fetching
    )
      return;
    setIsFetching(true); // Set loading spinner state
    setOffset((prevOffset) => prevOffset + 10);

    dispatch(fetchJobs({ limit: 10, offset }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetching]); // Update event listener when fetching state chang

  useEffect(() => {
    dispatch(fetchJobs({ limit: 10, offset: 0 }));
  }, [dispatch]);
  const handleFilter = (filters) => {
    // Apply filters to jobs
    let filtered = [...jobs];

    if (filters.minExp) {
      filtered = filtered.filter((job) => job.minExp >= filters.minExp);
    }
    if (filters.companyName) {
      filtered = filtered.filter((job) =>
        job.companyName
          .toLowerCase()
          .includes(filters.companyName.toLowerCase())
      );
    }
    if (filters.location) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.jobRole) {
      filtered = filtered.filter((job) =>
        job.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase())
      );
    }
    if (filters.remoteOnly) {
      filtered = filtered.filter((job) => job.isRemote);
    }
    // Add more filter criteria as needed

    setFilteredJobs(filtered);
  };
  return (
    <Container>
      <Filters onFilter={handleFilter} />
      <Grid container spacing={2}>
        {filteredJobs.map((job) => (
          <Grid item xs={12} sm={6} md={5} lg={4} key={job.id}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      {isFetching && <CircularProgress />}
      {error && <p>Error: {error}</p>}
    </Container>
  );
};

export default Jobs;
