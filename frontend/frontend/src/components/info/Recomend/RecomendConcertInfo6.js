import React from "react";
import RecomendPaneContainer6 from "./RecomendPaneContainer6";
import RecomendMainInfo6 from "./RecomendMainInfo6";
import RecomendPosterContainer6 from "./RecomendPosterContainer6";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <RecomendPosterContainer6 />
            <RecomendPaneContainer6 />
          </section>
        </div>
      </div>
      <RecomendMainInfo6 />
    </>
  );
}

export default ConcertInfo;
