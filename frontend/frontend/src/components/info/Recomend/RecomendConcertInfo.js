import React from "react";
import RecomendPaneContainer from "./RecomendPaneContainer";
import RecomendMainInfo from "./RecomendMainInfo";
import RecomendPosterContainer from "./RecomendPosterContainer";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <RecomendPosterContainer />
            <RecomendPaneContainer />
          </section>
        </div>
      </div>
      <RecomendMainInfo />
    </>
  );
}

export default ConcertInfo;
