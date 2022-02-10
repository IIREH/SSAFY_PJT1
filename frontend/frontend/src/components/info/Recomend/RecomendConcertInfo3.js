import React from "react";
import RecomendPaneContainer3 from "./RecomendPaneContainer3";
import RecomendMainInfo3 from "./RecomendMainInfo3";
import RecomendPosterContainer3 from "./RecomendPosterContainer3";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <RecomendPosterContainer3 />
            <RecomendPaneContainer3 />
          </section>
        </div>
      </div>
      <RecomendMainInfo3 />
    </>
  );
}

export default ConcertInfo;
