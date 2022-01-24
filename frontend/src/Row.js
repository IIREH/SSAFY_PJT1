import React, { useEffect } from "react";
// imports DEFAULT(alias) export from axios.js
import axios from "./axios";
import "./Row.css";

// Row component
function Row({ title, fetchURL }) {
  //   Pulling information from tmdb API when the pages loads
  useEffect(() => {
    //   Running async call
    async function fetchData() {
      const request = await axios.get(fetchURL);
      return request;
    }
    // if [empty], run once when the row loads, and dont run again
    fetchData();
  }, [fetchURL]);
  //   console.log();

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
      </div>
    </div>
  );
}

// Exporting Row function. Making it available
export default Row;
