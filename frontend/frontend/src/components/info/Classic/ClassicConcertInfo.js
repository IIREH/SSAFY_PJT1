import React from "react";
import ClassicPaneContainer from "./ClassicPaneContainer";
import ClassicMainInfo from "./ClassicMainInfo";
import ClassicPosterContainer from "./ClassicPosterContainer";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <ClassicPosterContainer />
            <ClassicPaneContainer />
          </section>
        </div>
      </div>
      <ClassicMainInfo />
    </>
  );
}

export default ConcertInfo;
