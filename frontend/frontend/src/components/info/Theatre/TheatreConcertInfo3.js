import React from "react";
import TheatrePaneContainer3 from "./TheatrePaneContainer3";
import TheatreMainInfo3 from "./TheatreMainInfo3";
import TheatrePosterContainer3 from "./TheatrePosterContainer3";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <TheatrePosterContainer3 />
            <TheatrePaneContainer3 />
          </section>
        </div>
      </div>
      <TheatreMainInfo3 />
    </>
  );
}

export default ConcertInfo;
