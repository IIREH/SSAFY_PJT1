import React from "react";

import MusicalPaneContainer4 from "./MusicalPaneContainer4";
import MusicalMainInfo4 from "./MusicalMainInfo4";
import MusicalPosterContainer4 from "./MusicalPosterContainer4";

function ConcertInfo4() {
  return (
    <>
      <div className="Content">
        <div className="Background">
          <section>
            <MusicalPosterContainer4 />
            <MusicalPaneContainer4 />
          </section>
        </div>
      </div>
      <MusicalMainInfo4 />
    </>
  );
}

export default ConcertInfo4;
