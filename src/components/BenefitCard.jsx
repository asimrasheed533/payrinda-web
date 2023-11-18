import React from "react";
import Fade from "react-reveal/Zoom";
export default function BenefitCard({ number, text }) {
  return (
    <div className="benefits__cards__wraper__card__over">
      <div className="benefits__cards__wraper__card">
        <div className="benefits__cards__wraper__card__number">{number}</div>
        <Fade duration={1500}>
          <div className="benefits__cards__wraper__card__text">{text}</div>
        </Fade>
      </div>
    </div>
  );
}
