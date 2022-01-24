import React, { useEffect } from "react";

function Banner() {
  
  // Setting up useState

  //   useEffect (short term memory)
  useEffect(() => {
    async function fetchData() {
    }
    // Pulling data from API
    fetchData();
  }, []);

  //   console.log();

  return (
    //   Contents of header
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">글 보러가기</button>
          <button className="banner__button">쪼아요</button>
        </div>

        <h1 className="banner__description">
        </h1>
      </div>
      {/* Empty fade div with bottom fade effect  */}
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
