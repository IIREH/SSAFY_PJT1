import React from "react";
import ClassicPaneContainer5 from "./ClassicPaneContainer5";
import ClassicMainInfo5 from "./ClassicMainInfo5";
import ClassicPosterContainer5 from "./ClassicPosterContainer5";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <ClassicPosterContainer5 />
            <ClassicPaneContainer5 />
          </section>
        </div>
      </div>
      <ClassicMainInfo5 />
    </>
  );
}

export default ConcertInfo;
