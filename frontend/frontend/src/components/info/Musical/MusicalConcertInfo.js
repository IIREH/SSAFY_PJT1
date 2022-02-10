import React from "react";

import MusicalPaneContainer from "./MusicalPaneContainer";
import MusicalMainInfo from "./MusicalMainInfo";
import MusicalPosterContainer from "./MusicalPosterContainer";

function ConcertInfo() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <MusicalPosterContainer />
            <MusicalPaneContainer />
          </section>
        </div>
      </div>
      <MusicalMainInfo />
    </>
  );
}

export default ConcertInfo;
