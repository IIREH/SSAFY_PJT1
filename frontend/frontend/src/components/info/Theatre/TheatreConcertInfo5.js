import React from "react";
import TheatrePaneContainer5 from "./TheatrePaneContainer5";
import TheatreMainInfo5 from "./TheatreMainInfo5";
import TheatrePosterContainer5 from "./TheatrePosterContainer5";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <TheatrePosterContainer5 />
            <TheatrePaneContainer5 />
          </section>
        </div>
      </div>
      <TheatreMainInfo5 />
    </>
  );
}

export default ConcertInfo;
