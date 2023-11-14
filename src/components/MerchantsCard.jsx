import React from "react";

export default function MerchantsCard({ heading, subheading, image }) {
  return (
    <div className="Merchants__card__wraper">
      <div className="Merchants__card__wraper__col">
        <div className="Merchants__card__wraper__col__heading">{heading}</div>
        <div className="Merchants__card__wraper__col__subheading">
          {subheading}
        </div>
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
