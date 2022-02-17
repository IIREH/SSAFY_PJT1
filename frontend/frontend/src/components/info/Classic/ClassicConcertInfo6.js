import React from "react";
import ClassicPaneContainer6 from "./ClassicPaneContainer6";
import ClassicMainInfo6 from "./ClassicMainInfo6";
import ClassicPosterContainer6 from "./ClassicPosterContainer6";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <ClassicPosterContainer6 />
            <ClassicPaneContainer6 />
          </section>
        </div>
      </div>
      <ClassicMainInfo6 />
    </>
  );
}

export default ConcertInfo;
