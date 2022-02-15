import React from "react";
import TheatrePaneContainer6 from "./TheatrePaneContainer6";
import TheatreMainInfo6 from "./TheatreMainInfo6";
import TheatrePosterContainer6 from "./TheatrePosterContainer6";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <TheatrePosterContainer6 />
            <TheatrePaneContainer6 />
          </section>
        </div>
      </div>
      <TheatreMainInfo6 />
    </>
  );
}

export default ConcertInfo;
