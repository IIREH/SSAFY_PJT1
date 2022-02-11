import React from "react";
import TheatrePaneContainer2 from "./TheatrePaneContainer2";
import TheatreMainInfo2 from "./TheatreMainInfo2";
import TheatrePosterContainer2 from "./TheatrePosterContainer2";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <TheatrePosterContainer2 />
            <TheatrePaneContainer2 />
          </section>
        </div>
      </div>
      <TheatreMainInfo2 />
    </>
  );
}

export default ConcertInfo;
