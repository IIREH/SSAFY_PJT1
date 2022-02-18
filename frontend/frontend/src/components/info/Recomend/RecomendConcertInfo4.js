import React from "react";
import RecomendPaneContainer4 from "./RecomendPaneContainer4";
import RecomendMainInfo4 from "./RecomendMainInfo4";
import RecomendPosterContainer4 from "./RecomendPosterContainer4";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <RecomendPosterContainer4 />
            <RecomendPaneContainer4 />
          </section>
        </div>
      </div>
      <RecomendMainInfo4 />
    </>
  );
}

export default ConcertInfo;
