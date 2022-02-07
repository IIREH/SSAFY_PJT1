import React from "react";
import PaneContainer from "./PaneContainer";
import MainInfo from "./MainInfo";
import PosterContainer from "./PosterContainer";

function MovieInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <PosterContainer />
            <PaneContainer />
          </section>
        </div>
      </div>
      <MainInfo />
    </>
  );
}

export default MovieInfo;
