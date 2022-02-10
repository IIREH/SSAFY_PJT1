import React from "react";

import MusicalPaneContainer2 from "./MusicalPaneContainer2";
import MusicalMainInfo2 from "./MusicalMainInfo2";
import MusicalPosterContainer2 from "./MusicalPosterContainer2";

function ConcertInfo2() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <MusicalPosterContainer2 />
            <MusicalPaneContainer2 />
          </section>
        </div>
      </div>
      <MusicalMainInfo2 />
    </>
  );
}

export default ConcertInfo2;
