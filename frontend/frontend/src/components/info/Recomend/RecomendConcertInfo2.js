import React from "react";
import RecomendPaneContainer2 from "./RecomendPaneContainer2";
import RecomendMainInfo2 from "./RecomendMainInfo2";
import RecomendPosterContainer2 from "./RecomendPosterContainer2";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <RecomendPosterContainer2 />
            <RecomendPaneContainer2 />
          </section>
        </div>
      </div>
      <RecomendMainInfo2 />
    </>
  );
}

export default ConcertInfo;
