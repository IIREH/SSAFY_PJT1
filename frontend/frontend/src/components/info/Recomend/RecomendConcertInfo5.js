import React from "react";
import RecomendPaneContainer5 from "./RecomendPaneContainer5";
import RecomendMainInfo5 from "./RecomendMainInfo5";
import RecomendPosterContainer5 from "./RecomendPosterContainer5";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <RecomendPosterContainer5 />
            <RecomendPaneContainer5 />
          </section>
        </div>
      </div>
      <RecomendMainInfo5 />
    </>
  );
}

export default ConcertInfo;
