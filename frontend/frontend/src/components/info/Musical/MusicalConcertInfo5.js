import React from "react";

import MusicalPaneContainer5 from "./MusicalPaneContainer5";
import MusicalMainInfo5 from "./MusicalMainInfo5";
import MusicalPosterContainer5 from "./MusicalPosterContainer5";

function ConcertInfo5() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <MusicalPosterContainer5 />
            <MusicalPaneContainer5 />
          </section>
        </div>
      </div>
      <MusicalMainInfo5 />
    </>
  );
}

export default ConcertInfo5;
