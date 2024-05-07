// src/services/jobService.js
const FetchJobs = async (filters) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    ...filters,
    limit: 10,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const res = await response.json();
    const result = res.jdList;
    console.log(result);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default FetchJobs;
