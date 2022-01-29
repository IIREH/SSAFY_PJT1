import React, { useEffect } from "react";
// imports DEFAULT(alias) export from axios.js
import axios from "./axios";
import "./Row.css";

// Row component
function Row({ title, fetchURL, isLargeRow }) {
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
        <img
          // onClick={() => }
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          // Loads poster images from base url
          src="https://www.kopis.or.kr/upload/pfmPoster/PF_PF185909_220119_120945.gif"
          alt=""
        />
        <img
          // onClick={() => }
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          // Loads poster images from base url
          src="https://www.kopis.or.kr/upload/pfmPoster/PF_PF185853_220118_104057.jpg"
          alt=""
        />
        <img
          // onClick={() => }
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          // Loads poster images from base url
          src="https://www.kopis.or.kr/upload/pfmPoster/PF_PF185538_220107_125712.png"
          alt=""
        />
        <img
          // onClick={() => }
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          // Loads poster images from base url
          src="https://www.kopis.or.kr/upload/pfmPoster/PF_PF185500_220106_102338.gif"
          alt=""
        />
        <img
          // onClick={() => }
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          // Loads poster images from base url
          src="https://www.kopis.or.kr/upload/pfmPoster/PF_PF185613_220111_102554.gif"
          alt=""
        />
        <img
          // onClick={() => }
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          // Loads poster images from base url
          src="https://www.kopis.or.kr/upload/pfmPoster/PF_PF185112_211223_112729.gif"
          alt=""
        />
        <img
          // onClick={() => }
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          // Loads poster images from base url
          src="https://www.kopis.or.kr/upload/pfmPoster/PF_PF185552_220110_100621.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

// Exporting Row function. Making it available
export default Row;
