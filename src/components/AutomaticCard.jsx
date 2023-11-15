import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
export default function AutomaticCard({ svg, heading, subheading }) {
  return (
    <>
      <Zoom duration={1000}>
        <div className="Automatic__col__card__wraper">
          <div className="Automatic__col__card__wraper__svg">{svg}</div>
          <div className="Automatic__col__card__wraper__heading">{heading}</div>
          <div className="Automatic__col__card__wraper__subheading">
            {subheading}
          </div>
        </div>
      </Zoom>
    </>
  );
}
