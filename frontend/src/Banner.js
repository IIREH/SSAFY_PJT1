import React, { useEffect } from "react";

function Banner() {
  // Setting up useState

  //   useEffect (short term memory)
  useEffect(() => {
    async function fetchData() {}
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
        backgroundImage: `url("https://cdn.mhns.co.kr/news/photo/201901/156497_205754_5857.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{}</h1>
        <div className="banner__buttons">
        <br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br>
          <button className="banner__button">공연 순위</button>
          <button className="banner__button">SNS 순위</button>
        </div>

        <h1 className="banner__description">
        <br></br><br></br><br></br><br></br><br></br>
          <br></br>
          <br></br>
        </h1>
      </div>
      {/* Empty fade div with bottom fade effect  */}
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
