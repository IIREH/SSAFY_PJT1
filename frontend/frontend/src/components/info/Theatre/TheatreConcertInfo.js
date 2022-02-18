import React from "react";
import TheatrePaneContainer from "./TheatrePaneContainer";
import TheatreMainInfo from "./TheatreMainInfo";
import TheatrePosterContainer from "./TheatrePosterContainer";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <TheatrePosterContainer />
            <TheatrePaneContainer />
          </section>
        </div>
      </div>
      <TheatreMainInfo />
    </>
  );
}

export default ConcertInfo;
