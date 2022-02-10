import React from "react";
import ClassicPaneContainer4 from "./ClassicPaneContainer4";
import ClassicMainInfo4 from "./ClassicMainInfo4";
import ClassicPosterContainer4 from "./ClassicPosterContainer4";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <ClassicPosterContainer4 />
            <ClassicPaneContainer4 />
          </section>
        </div>
      </div>
      <ClassicMainInfo4 />
    </>
  );
}

export default ConcertInfo;
