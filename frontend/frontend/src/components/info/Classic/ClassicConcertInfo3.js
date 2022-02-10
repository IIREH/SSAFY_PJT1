import React from "react";
import ClassicPaneContainer3 from "./ClassicPaneContainer3";
import ClassicMainInfo3 from "./ClassicMainInfo3";
import ClassicPosterContainer3 from "./ClassicPosterContainer3";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <ClassicPosterContainer3 />
            <ClassicPaneContainer3 />
          </section>
        </div>
      </div>
      <ClassicMainInfo3 />
    </>
  );
}

export default ConcertInfo;
