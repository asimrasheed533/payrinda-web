import main__img from "../assets/main__img.png";
export default function Index() {
  return (
    <>
      <div className="welcome__main__container">
        <div className="welcome__main__container__overlay__bg">
          <svg
            width="1134"
            height="1005"
            viewBox="0 0 1134 1005"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_201_615)">
              <ellipse
                cx="277.164"
                cy="189.625"
                rx="356"
                ry="314.852"
                fill="#012B84"
                fill-opacity="0.17"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_201_615"
                x="-578.836"
                y="-625.228"
                width="1712"
                height="1629.71"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_201_615"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="welcome__main__container__content">
          <div className="welcome__main__container__content__title">
            Welcome to payrinda!
          </div>
          <div className="welcome__main__container__content__heading">
            Revolutionizing the Way You Experience <span>Payments</span>
          </div>
          <div className="welcome__main__container__content__sub__heading">
            Bridging Possibilities, Simplifying Transactions
          </div>
        </div>
        <div className="welcome__main__container__img">
          <img src={main__img} alt="image" />
        </div>
        <div className="welcome__detail__sub__text__container">
          <div className="welcome__detail__cir"></div>
          <div className="welcome__detail__sub__text__container__text__wraper">
            Where innovation meets convenience in the financial services realm.
            As a burgeoning technology startup, our mission extends beyond mere
            transaction processing. We're here to redefine the payment
            landscape, fostering unparalleled ease and reliability for
            merchants, consumers, and businesses alike.
          </div>
        </div>
        <div className="welcome__main__container__overlay__bottom">
          <svg
            width="1134"
            height="1005"
            viewBox="0 0 1134 1005"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_201_615)">
              <ellipse
                cx="277.164"
                cy="189.625"
                rx="356"
                ry="314.852"
                fill="#012B84"
                fill-opacity="0.17"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_201_615"
                x="-578.836"
                y="-625.228"
                width="1712"
                height="1629.71"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_201_615"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}
