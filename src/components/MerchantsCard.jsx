import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
export default function MerchantsCard({ heading, subheading, image }) {
  return (
    <div className="Merchants__card__wraper">
      <div className="Merchants__card__wraper__col">
        <Zoom duration={1000}>
          <div className="Merchants__card__wraper__col__heading">{heading}</div>
        </Zoom>
        <Fade duration={2000}>
          <div className="Merchants__card__wraper__col__subheading">
            {subheading}
          </div>
        </Fade>
      </div>

      <div className="Merchants__card__wraper__col">
        <img
          className="Merchants__card__wraper__col__img"
          src={image}
          alt="Merchants"
        />
      </div>
    </div>
  );
}
