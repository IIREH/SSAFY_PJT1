import React from "react";
import ClassicPaneContainer2 from "./ClassicPaneContainer2";
import ClassicMainInfo2 from "./ClassicMainInfo2";
import ClassicPosterContainer2 from "./ClassicPosterContainer2";

function ConcertInfo2() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <ClassicPosterContainer2 />
            <ClassicPaneContainer2 />
          </section>
        </div>
      </div>
      <ClassicMainInfo2 />
    </>
  );
}

export default ConcertInfo2;
