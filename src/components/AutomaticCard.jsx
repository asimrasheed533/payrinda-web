import React from "react";

export default function AutomaticCard({ svg, heading, subheading }) {
  return (
    <div className="Automatic__col__card__wraper">
      <div className="Automatic__col__card__wraper__svg">{svg}</div>
      <div className="Automatic__col__card__wraper__heading">{heading}</div>
      <div className="Automatic__col__card__wraper__subheading">
        {subheading}
      </div>
    </div>
  );
}
