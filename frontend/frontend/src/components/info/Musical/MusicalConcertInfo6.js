import React from "react";

import MusicalPaneContainer6 from "./MusicalPaneContainer6";
import MusicalMainInfo6 from "./MusicalMainInfo6";
import MusicalPosterContainer6 from "./MusicalPosterContainer6";

function ConcertInfo5() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <MusicalPosterContainer6 />
            <MusicalPaneContainer6 />
          </section>
        </div>
      </div>
      <MusicalMainInfo6 />
    </>
  );
}

export default ConcertInfo5;
