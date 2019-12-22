import React from "react";
import "./arrows.styles.scss";

const LeftArrow = ({ goToPrevSlide }) => {
  return (
    <div className="arrow backArrow" onClick={goToPrevSlide}>
      &#x2190;
    </div>
  );
};

export default React.memo(LeftArrow);
