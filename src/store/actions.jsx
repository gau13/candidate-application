import { useState } from "react";

// src/store/actions.js
export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";

export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST,
});

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs,
});

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error,
});

const fetchJobs = (obj) => {
  console.log(obj);
  return async (dispatch) => {
    dispatch(fetchJobsRequest());
    try {
      const { limit, offset } = obj;
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: limit,
        offset: offset,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      dispatch(fetchJobsSuccess(result.jdList));
    } catch (error) {
      dispatch(fetchJobsFailure(error.message));
    }
  };
};

export default fetchJobs;
