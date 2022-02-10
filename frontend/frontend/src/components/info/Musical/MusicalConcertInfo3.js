import React from "react";

import MusicalPaneContainer3 from "./MusicalPaneContainer3";
import MusicalMainInfo3 from "./MusicalMainInfo3";
import MusicalPosterContainer3 from "./MusicalPosterContainer3";

function ConcertInfo3() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <MusicalPosterContainer3 />
            <MusicalPaneContainer3 />
          </section>
        </div>
      </div>
      <MusicalMainInfo3 />
    </>
  );
}

export default ConcertInfo3;
