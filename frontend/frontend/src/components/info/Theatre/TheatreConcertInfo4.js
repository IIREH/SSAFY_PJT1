import React from "react";
import TheatrePaneContainer4 from "./TheatrePaneContainer4";
import TheatreMainInfo4 from "./TheatreMainInfo4";
import TheatrePosterContainer4 from "./TheatrePosterContainer4";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <TheatrePosterContainer4 />
            <TheatrePaneContainer4 />
          </section>
        </div>
      </div>
      <TheatreMainInfo4 />
    </>
  );
}

export default ConcertInfo;
