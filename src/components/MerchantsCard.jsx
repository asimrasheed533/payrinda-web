import React from "react";

import Fade from "react-reveal/Fade";
export default function MerchantsCard({ heading, subheading, image }) {
  return (
    <div className="Merchants__card__wraper">
      <div className="Merchants__card__wraper__col">
        <Fade left duration={1000}>
          <div className="Merchants__card__wraper__col__heading">{heading}</div>
        </Fade>
        <Fade left duration={2000}>
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
