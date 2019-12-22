import React from "react";
import "./arrows.styles.scss";

const RightArrow = ({ goToNextSlide }) => {
  return (
    <div className="arrow nextArrow" onClick={goToNextSlide}>
      &#x2192;
    </div>
  );
};

export default React.memo(RightArrow);
