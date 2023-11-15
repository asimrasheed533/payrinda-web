import React from "react";

export default function BenefitCard({ number, text }) {
  return (
    <div className="benefits__cards__wraper__card__over">
      <div className="benefits__cards__wraper__card">
        <div className="benefits__cards__wraper__card__number">{number}</div>
        <div className="benefits__cards__wraper__card__text">{text}</div>
      </div>
    </div>
  );
}
