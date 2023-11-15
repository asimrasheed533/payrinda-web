import { AutomaticCard, MerchantsCard, BenefitCard } from "@components";
import React from "react";
import Fade from "react-reveal/Fade";
import main__img from "../assets/main__img.png";
import mer01 from "../assets/mer01.png";
import mer02 from "../assets/mer02.png";
import mer03 from "../assets/mer03.png";
import mer04 from "../assets/mer04.png";
import scanleft from "../assets/scanleft.png";
import scanright from "../assets/scanright.png";
import solution__img from "../assets/solution__img.png";
import about from "../assets/about.png";
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
          <Fade bottom>
            <div className="welcome__main__container__content__title">
              Welcome to payrinda!
            </div>
          </Fade>
          <Fade bottom>
            <div className="welcome__main__container__content__heading">
              Revolutionizing the Way You Experience <span>Payments</span>
            </div>
          </Fade>
          <div className="welcome__main__container__content__sub__heading">
            Bridging Possibilities, Simplifying Transactions
          </div>
        </div>
        <Fade bottom duration={2300}>
          <div className="welcome__main__container__img">
            <img src={main__img} alt="image" />
          </div>
        </Fade>
        <div className="welcome__detail__sub__text__container__over">
          <div className="welcome__detail__sub__text__container">
            <div className="welcome__detail__cir"></div>
            <div className="welcome__detail__sub__text__container__text__wraper">
              Where innovation meets convenience in the financial services
              realm. As a burgeoning technology startup, our mission extends
              beyond mere transaction processing. We're here to redefine the
              payment landscape, fostering unparalleled ease and reliability for
              merchants, consumers, and businesses alike.
            </div>
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
      <div className="Merchants__card__continer__over">
        <div className="Merchants__card__continer">
          <MerchantsCard
            heading="For Merchants:"
            subheading="Wave goodbye to the cumbersome payment methods of the past! payrinda empowers merchants with swift, secure, and seamless transactions. Our cutting-edge platform not only accelerates checkout flows but also unveils insightful data analytics, helping you understand your customers like never before."
            image={mer01}
          />
          <MerchantsCard
            heading="For Consumers:"
            subheading="Say hello to frictionless spending! No more tedious wait times, no more complex checkout processes. With payrinda, experience the freedom of instant, hassle-free payments. Whether online or offline, count on us to keep your financial data secure, giving you the peace of mind to enjoy what matters most - the things you love."
            image={mer02}
          />
          <MerchantsCard
            heading="For Businesses:"
            subheading="Transform the way you handle finances with payrinda’s innovative solutions. From streamlined invoicing to effortless payroll and beyond, we equip businesses with the tools to manage transactions efficiently. Dive into a world of possibilities with comprehensive payment solutions tailored to your business needs."
            image={mer03}
          />
          <MerchantsCard
            heading="Innovation at the Core:"
            subheading="At payrinda, we believe in the power of technology to drive significant change. Our commitment to continuous innovation sees us at the forefront of the financial services industry, constantly exploring and developing new ways to make your payment experiences faster, easier, and safer."
            image={mer04}
          />
        </div>
      </div>

      <div className="join__card__container__over">
        <div className="join__card__container">
          <div className="join__card__container__text__wraper">
            <Fade bottom>
              <div className="join__card__container__text__heading">
                Join the Payment Revolution
              </div>
            </Fade>
            <div className="join__card__container__text__overlay__heading">
              Ready to elevate your payment experience?{" "}
            </div>
            <div className="join__card__container__text__subheading">
              Ready To Get Started with ?
            </div>
            <div className="join__container__btn">
              <button className="join__container__btn__button">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="solution__main__container">
        <Fade bottom duration={2000}>
          <div className="solution__main__container__heading">
            Our Solutions
          </div>
        </Fade>
        <div className="solution__main__container__wraper">
          <div className="solution__main__wraper__col">
            <div className="solution__main__wraper__text">Digital Tipping </div>
            <div className="solution__main__wraper__subtext">
              In A Cashless Era
            </div>
            <div className="solution__main__wraper__detail">
              As our world rapidly transitions to cashless economies, the way we
              appreciate and reward services is also evolving. Digital tipping
              emerges as a revolutionary solution in this context, bridging the
              gap between traditional gratuity practices and modern payment
              systems. No longer do customers have to fumble for change or feel
              the constraint of not having physical cash to reward exemplary
              service. With a simple tap or scan, gratuities can be seamlessly
              transferred, ensuring that those in the service industry continue
              to receive their well-deserved tips. This shift not only offers
              convenience but also promotes a safer, more hygienic method of
              transaction in an increasingly digital age. Embracing digital
              tipping is more than just adopting a new payment method; it's
              about progressing with the times and ensuring that appreciation
              doesn't get lost in the digital shuffle.
            </div>
            <div className="solution__content__btn">Enter Payrinda</div>
          </div>
          <div className="solution__main__wraper__col">
            <img
              className="solution__main__wraper__col__img"
              src={solution__img}
              alt="solution"
            />
          </div>
        </div>
      </div>
      <div className="scan__main__ovelay">
        <div className="scan__main__container__bg">
          <div className="scan__main__container__bg__img__left">
            <img src={scanleft} alt="scan" />
          </div>
          <div className="scan__main__container__content">
            <Fade bottom duration={1000}>
              <div className="scan__main__container__content__heading">
                Our single easy-to-use platform, quickly creates the digital
                tipping flows that work best for service industry employees.
              </div>
            </Fade>
            <Fade bottom duration={2000}>
              <div className="scan__main__container__content__subheading">
                We offer a simple digital tipping solution that fits right into
                the evolving financial landscape. Compatible with every
                currency, payrinda eliminates the need for physical cash, and
                even mobile app downloads, ensuring that rewarding service
                excellence remains effortless for customers.
              </div>
            </Fade>
          </div>
          <div className="scan__main__container__bg__img__right">
            <img src={scanright} alt="scan" />
          </div>
        </div>
      </div>
      <div className="Automatic__card__container">
        <div className="Automatic__card__container__col">
          <AutomaticCard
            svg={
              <svg
                width="187"
                height="187"
                viewBox="0 0 187 187"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="93.3223" cy="93.9316" r="93" fill="#012B84" />
                <path
                  d="M114.11 61.5861C113.878 61.3566 113.566 61.2269 113.24 61.2246C112.914 61.2223 112.6 61.3476 112.365 61.5737L81.8144 92.1117H79.0127C77.0301 92.118 75.0783 92.6019 73.3224 93.5224L71.1468 94.6796V92.3687C71.1468 91.6871 70.5497 91.1859 69.868 91.1859H59.4927C58.8111 91.1859 58.1855 91.6871 58.1855 92.3687V124.542C58.1855 125.224 58.8111 125.748 59.4927 125.748H69.8677C70.1967 125.756 70.5156 125.634 70.7551 125.408C70.9945 125.182 71.1352 124.871 71.1465 124.542V123.233L73.3221 124.364C75.08 125.277 77.0321 125.751 79.0127 125.748H97.2609C99.1693 125.748 100.771 124.224 100.771 122.315V118.976C100.762 118.477 100.645 117.986 100.427 117.536C100.958 117.233 101.398 116.794 101.703 116.265C102.007 115.735 102.165 115.134 102.16 114.523V111.183C102.162 110.604 102.018 110.034 101.741 109.526C102.237 109.165 102.629 108.679 102.877 108.117L130.887 80.1091C131.118 79.8776 131.248 79.5637 131.248 79.2363C131.248 78.909 131.118 78.595 130.887 78.3635L114.11 61.5861ZM68.6777 123.28H60.6543V93.6547H68.6777V123.28ZM113.237 64.2045L115.91 66.8769L115.617 67.1701C114.997 67.7879 114.158 68.1349 113.284 68.1349C112.409 68.1349 111.57 67.7879 110.951 67.1701L110.611 66.8306L113.237 64.2045ZM102.314 98.937C102.304 99.2109 102.19 99.4707 101.996 99.6643C101.803 99.8579 101.542 99.9709 101.269 99.9808H94.2551C93.9277 99.9808 93.6137 100.111 93.3822 100.342C93.1507 100.574 93.0207 100.888 93.0207 101.215C93.0207 101.543 93.1507 101.857 93.3822 102.088C93.6137 102.32 93.9277 102.45 94.2551 102.45H99.7101C100.257 102.45 100.771 102.843 100.771 103.391V106.73C100.771 107.277 100.257 107.696 99.7101 107.696H93.1418C92.8144 107.696 92.5005 107.826 92.269 108.057C92.0375 108.289 91.9074 108.603 91.9074 108.93C91.9074 109.257 92.0375 109.571 92.269 109.803C92.5005 110.034 92.8144 110.164 93.1418 110.164H98.7081C98.9729 110.171 99.2244 110.282 99.4084 110.472C99.5924 110.663 99.694 110.918 99.6914 111.183V114.523C99.6949 114.79 99.5943 115.048 99.4107 115.243C99.2272 115.437 98.9752 115.553 98.7081 115.565H92.0286C91.7012 115.565 91.3872 115.695 91.1557 115.926C90.9242 116.158 90.7942 116.472 90.7942 116.799C90.7942 117.127 90.9242 117.441 91.1557 117.672C91.3872 117.904 91.7012 118.034 92.0286 118.034H97.2609C97.8079 118.034 98.3027 118.429 98.3027 118.976V122.315C98.3027 122.862 97.8079 123.28 97.2609 123.28H79.0127C77.4292 123.283 75.8683 122.904 74.4628 122.174L71.1465 120.45V97.463L74.4628 95.7119C75.8664 94.9745 77.4272 94.5863 79.0127 94.5804H101.269C101.54 94.5843 101.799 94.6918 101.994 94.8808C102.188 95.0698 102.303 95.3261 102.314 95.5971V98.937ZM101.269 92.1117H99.3044C98.1088 90.6922 97.4665 88.8883 97.4961 87.0325C97.5104 85.4513 98.0013 83.9112 98.9045 82.6132C99.8078 81.3153 101.081 80.3199 102.559 79.7571C104.037 79.1942 105.65 79.0901 107.188 79.4582C108.726 79.8264 110.117 80.6497 111.179 81.8208C112.242 82.9918 112.927 84.456 113.144 86.0223C113.362 87.5885 113.102 89.184 112.399 90.6003C111.696 92.0166 110.582 93.1879 109.202 93.9613C107.823 94.7347 106.243 95.0741 104.667 94.9353C104.516 94.1436 104.094 93.4291 103.474 92.9141C102.854 92.399 102.075 92.1154 101.269 92.1117ZM103.24 104.335V103.391C103.238 102.911 103.136 102.438 102.94 102C103.497 101.706 103.963 101.265 104.288 100.725C104.613 100.186 104.784 99.5671 104.783 98.937V97.4274C104.937 97.4402 105.175 97.4487 105.384 97.4485C107.655 97.4474 109.862 96.6998 111.666 95.3207C113.47 93.9417 114.77 92.0078 115.367 89.817C115.964 87.6261 115.824 85.2998 114.968 83.1965C114.113 81.0932 112.589 79.3295 110.633 78.1771C108.676 77.0248 106.395 76.5477 104.141 76.8193C101.886 77.0909 99.7839 78.0963 98.1572 79.6804C96.5304 81.2645 95.4696 83.3396 95.1382 85.586C94.8068 87.8323 95.2232 90.1253 96.3233 92.1117H85.3065L108.866 68.5641L109.205 68.9098C109.74 69.4459 110.376 69.8713 111.075 70.1617C111.775 70.4521 112.525 70.6018 113.283 70.6022C114.04 70.6027 114.79 70.4538 115.49 70.1642C116.19 69.8746 116.826 69.4499 117.362 68.9144L117.655 68.6212L123.536 74.5019L123.239 74.8125C122.163 75.896 121.561 77.3614 121.563 78.8881C121.564 80.4148 122.171 81.8786 123.249 82.9594C123.256 82.9667 123.265 82.9738 123.271 82.9809L123.948 83.5916L103.24 104.335ZM125.66 81.8462L124.985 81.2046C124.372 80.5844 124.029 79.7468 124.03 78.8746C124.032 78.0023 124.379 77.1662 124.995 76.5487C125.002 76.5422 125.008 76.5357 125.014 76.5291L125.282 76.249L128.269 79.2364L125.66 81.8462Z"
                  fill="white"
                />
              </svg>
            }
            heading="Automatic 
            Tip Distribution"
            subheading="Payrinda tipping solution distribute tip to the employee automatically with the ability to track transactions via dashboard."
          />
          <AutomaticCard
            svg={
              <svg
                width="187"
                height="187"
                viewBox="0 0 187 187"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="93.3223" cy="93.0547" r="93" fill="#012B84" />
                <path
                  d="M129.359 55.9318C129.358 55.9314 129.358 55.9308 129.357 55.9304C129.357 55.93 129.356 55.9297 129.356 55.9293C119.855 46.4293 107.224 41.1973 93.7881 41.1973C80.3517 41.1973 67.7196 46.4297 58.2185 55.9306C48.7174 65.4315 43.4854 78.0636 43.4854 91.5C43.4854 104.936 48.7176 117.568 58.2185 127.07C67.7194 136.571 80.3517 141.803 93.7881 141.803C107.224 141.803 119.857 136.57 129.357 127.069C138.858 117.568 144.091 104.936 144.091 91.5C144.091 78.0642 138.859 65.4325 129.359 55.9318ZM93.7881 137.857C81.7154 137.857 70.7074 133.217 62.4499 125.628L77.8378 110.24H77.0205H73.0752V105.703C73.0752 102.766 70.6859 100.377 67.749 100.377H63.2119V108.268C63.2119 109.357 64.0951 110.24 65.1846 110.24H72.3952C72.3952 110.181 63.2715 119.252 59.6633 122.842C52.0725 114.584 47.4307 103.574 47.4307 91.5C47.4307 65.9383 68.2266 45.1426 93.7881 45.1426C105.861 45.1426 116.869 49.7831 125.126 57.3719L109.738 72.7598H110.556H114.501V77.2969C114.501 80.2338 116.89 82.623 119.827 82.623H124.364V74.7324C124.364 73.6429 123.481 72.7598 122.392 72.7598H115.148L127.908 60.1527C135.501 68.4114 140.146 79.423 140.146 91.5C140.146 117.061 119.35 137.857 93.7881 137.857Z"
                  fill="white"
                />
                <path
                  d="M73.0752 77.2969V72.7598H65.1846C64.0951 72.7598 63.2119 73.6429 63.2119 74.7324V82.623H67.749C70.6859 82.623 73.0752 80.2338 73.0752 77.2969ZM114.501 105.703V110.24H122.392C123.481 110.24 124.364 109.357 124.364 108.268V100.377H119.827C116.89 100.377 114.501 102.766 114.501 105.703Z"
                  fill="white"
                />
                <path
                  d="M91.2382 96.8396C92.0109 97.21 92.8755 97.418 93.7881 97.418C97.0513 97.418 99.7061 94.7632 99.7061 91.5C99.7061 90.5874 99.4981 89.7228 99.1277 88.9501L91.2382 96.8396ZM93.7881 85.582C90.5249 85.582 87.8701 88.2368 87.8701 91.5C87.8701 92.4126 88.078 93.2772 88.4485 94.0499L96.3379 86.1604C95.5653 85.79 94.7006 85.582 93.7881 85.582Z"
                  fill="white"
                />
                <path
                  d="M77.0205 77.2969C77.0205 82.4092 72.8614 86.5684 67.749 86.5684H63.2119V96.4316H67.749C72.7876 96.4316 76.8974 100.472 77.015 105.483L85.5631 96.9353C84.529 95.3757 83.9248 93.5074 83.9248 91.5C83.9248 86.0614 88.3495 81.6367 93.7881 81.6367C95.7955 81.6367 97.6638 82.2409 99.2233 83.275L109.738 72.7598H77.0205V77.2969ZM110.556 105.703C110.556 100.591 114.715 96.4316 119.827 96.4316H124.364V86.5684H119.827C114.789 86.5684 110.679 82.5276 110.561 77.5166L102.013 86.0647C103.047 87.6243 103.651 89.4926 103.651 91.5C103.651 96.9386 99.2267 101.363 93.7881 101.363C91.7807 101.363 89.9124 100.759 88.3528 99.725L77.8378 110.24H110.556V105.703Z"
                  fill="white"
                />
              </svg>
            }
            heading="No Setup Cost"
            subheading="We do not charge any onboarding or participation fee to staff or their employers. We give employers to add, remove or edit staff members."
          />
        </div>
        <div className="Automatic__card__container__col">
          <div className="Automatic__card__container__col__text">
            Our solution doesn't just put money in service industry worker’s
            pockets; it fosters engagement, boosts morale, and elevates customer
            experiences.
          </div>
          <AutomaticCard
            svg={
              <svg
                width="187"
                height="187"
                viewBox="0 0 187 187"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="93.7891" cy="93.9316" r="93" fill="#012B84" />
                <path
                  d="M128.828 86.4295L127.395 88.7144L133.53 92.5598L134.07 91.6982L131.586 90.1412L131.584 90.1401L132.476 88.7167C132.844 88.1304 132.98 87.5282 132.881 86.9107L132.88 86.9056C132.817 86.3431 132.506 85.8139 131.988 85.4892C131.981 85.4848 131.974 85.4805 131.968 85.4766C131.48 85.1594 130.867 85.0891 130.285 85.2833L130.289 85.2824C129.718 85.4554 129.203 85.8286 128.861 86.3746C128.849 86.3939 128.838 86.4137 128.828 86.4295ZM130.455 86.2349C130.791 86.1376 131.139 86.1815 131.421 86.3584C131.705 86.5359 131.896 86.8304 131.955 87.1749C132.025 87.5303 131.947 87.9122 131.737 88.2266L130.832 89.671L128.69 88.3282L129.594 86.8865C129.602 86.8719 129.61 86.8579 129.619 86.8438C129.817 86.5283 130.121 86.3197 130.455 86.2349Z"
                  fill="white"
                />
                <path
                  d="M127.219 100.282L127.245 100.285C128.759 100.397 130.282 99.6884 131.145 98.3124C131.148 98.3071 131.152 98.3019 131.154 98.2975C131.759 97.3325 131.959 96.3247 131.794 95.396C131.607 94.3387 130.948 93.3837 129.882 92.7156C129.643 92.5656 129.393 92.4368 129.131 92.3302L127.017 95.7037L128.366 96.5498L129.577 94.6181C129.963 94.9709 130.187 95.4703 130.197 96.0002C130.208 96.4553 130.07 96.9448 129.767 97.4278C129.181 98.3486 128.093 98.7631 127.067 98.5302C126.811 98.4705 126.557 98.3688 126.32 98.2205C126.08 98.07 125.875 97.8837 125.719 97.6875L125.707 97.6737C125.059 96.8648 124.957 95.7041 125.532 94.773C125.539 94.7616 125.547 94.7493 125.554 94.7379C125.878 94.2208 126.373 93.8754 126.918 93.7301L126.557 92.0825C125.602 92.3458 124.739 92.9526 124.171 93.8589C124.162 93.8738 124.152 93.8896 124.144 93.9027C124.14 93.908 124.137 93.9123 124.134 93.9176C123.272 95.2928 123.298 96.973 124.072 98.3077C124.391 98.8475 124.839 99.3211 125.407 99.6772C125.981 100.037 126.611 100.235 127.219 100.282Z"
                  fill="white"
                />
                <path
                  d="M136.279 78.4383L138.542 81.6243L138.531 81.6418L134.654 81.0308L134.094 81.9248L139.213 82.6177L140.721 84.9831L141.253 84.1347L136.841 77.5426L136.279 78.4383Z"
                  fill="white"
                />
                <path
                  d="M138.341 84.5869L135.806 82.9975C135.275 82.6645 134.756 82.5605 134.252 82.6866C133.748 82.8136 133.323 83.1518 132.98 83.7005C132.537 84.406 132.472 85.1075 132.784 85.8037L133.622 85.4171C133.41 84.9481 133.433 84.5051 133.694 84.0897C133.696 84.087 133.697 84.0844 133.699 84.0818C133.871 83.8075 134.135 83.6252 134.425 83.5505L134.426 83.5502C134.708 83.4654 135.023 83.4982 135.291 83.6663C135.295 83.6685 135.298 83.6707 135.301 83.6723L135.477 83.7827C135.131 83.9627 134.819 84.2736 134.543 84.7145C134.219 85.2321 134.085 85.7244 134.143 86.1915C134.201 86.6591 134.442 87.0257 134.867 87.2922C134.876 87.2983 134.886 87.3043 134.896 87.3103C135.285 87.5543 135.74 87.6038 136.15 87.4841C136.604 87.3582 136.967 87.0777 137.24 86.6412C137.56 86.1311 137.582 85.5746 137.304 84.9719L137.324 84.9395L137.896 85.2977L138.341 84.5869ZM136.75 85.0922C136.841 85.4579 136.783 85.8404 136.587 86.1538C136.46 86.3655 136.261 86.5252 136.024 86.6051L136.022 86.6063C135.814 86.6833 135.574 86.6671 135.371 86.5401C135.369 86.539 135.367 86.5374 135.365 86.5363C135.141 86.3957 135.018 86.177 134.993 85.878C134.967 85.5814 135.049 85.2821 135.238 84.9797C135.498 84.5651 135.796 84.3025 136.134 84.1911L136.138 84.1933C136.471 84.4021 136.682 84.7325 136.75 85.0922Z"
                  fill="white"
                />
                <rect
                  x="114.514"
                  y="98.7687"
                  width="34.8598"
                  height="20.4546"
                  rx="2.5"
                  transform="rotate(-57.9178 114.514 98.7687)"
                  stroke="white"
                />
                <rect
                  x="94.4407"
                  y="58.5314"
                  width="34.8598"
                  height="20.4546"
                  rx="2.5"
                  transform="rotate(86.279 94.4407 58.5314)"
                  stroke="white"
                />
                <path
                  d="M88.4065 69.6353C88.2307 69.5063 88.085 69.3381 87.9804 69.1432C87.8758 68.9484 87.8149 68.7318 87.8023 68.5097C88.2264 68.4563 88.6545 68.5777 88.994 68.8477C89.3403 69.12 89.572 69.5196 89.6406 69.9631C89.4245 69.9949 89.2043 69.9823 88.9925 69.926C88.7808 69.8698 88.5816 69.771 88.4065 69.6353ZM87.8184 70.0816C87.8123 69.4365 87.3909 68.9149 87.3721 68.6267C87.3534 68.3386 87.6528 67.8665 87.6101 67.3203C87.582 66.9882 87.4704 66.6692 87.2864 66.3948C87.1024 66.1205 86.8523 65.9003 86.5611 65.7562C85.3659 65.144 83.6911 65.7648 82.7987 66.498C82.3625 66.8528 81.8749 67.3 81.9285 67.7937C81.9822 68.2873 82.28 68.4534 82.3185 69.0444C82.3569 69.6355 82.0592 69.8033 82.1014 70.3421C82.1437 70.881 82.6226 71.1837 83.1088 71.486C83.4519 71.6942 83.8222 71.8501 84.2081 71.9487C84.3173 71.6317 84.5138 71.3549 84.7733 71.1522C85.0329 70.9495 85.3444 70.8297 85.6696 70.8075C85.9574 70.7941 86.2441 70.8557 86.5034 70.9866C86.7627 71.1176 86.9863 71.3136 87.1536 71.5568C87.3649 71.3795 87.5339 71.1544 87.6479 70.8988C87.7619 70.6433 87.8177 70.3639 87.8112 70.0821M89.3449 73.6921L82.3775 74.1452L82.4524 75.2977L84.8535 75.1416L84.954 76.6857C84.9574 77.0037 85.0251 77.3177 85.1527 77.6075C85.2804 77.8974 85.4652 78.1567 85.6953 78.3688C85.9253 78.5809 86.1955 78.7412 86.4886 78.8392C86.7816 78.9373 87.091 78.971 87.3969 78.9382C87.7019 78.9331 88.0023 78.8623 88.2788 78.7303C88.5553 78.5982 88.8019 78.4078 89.0026 78.1713C89.2034 77.9347 89.354 77.6572 89.4448 77.3566C89.5356 77.0559 89.5646 76.7387 89.5299 76.4252L89.3449 73.6921ZM88.5123 74.9036L88.594 76.1596C88.634 76.3554 88.6311 76.5577 88.5856 76.7517C88.5402 76.9458 88.4532 77.1267 88.3311 77.2812C88.2091 77.4357 88.055 77.5598 87.8802 77.6445C87.7054 77.7293 87.5143 77.7724 87.3209 77.7708C87.1282 77.7973 86.932 77.779 86.7466 77.7174C86.5611 77.6558 86.3911 77.5523 86.2488 77.4145C86.1066 77.2767 85.9957 77.108 85.9241 76.9207C85.8525 76.7334 85.8222 76.5322 85.8351 76.3316L85.7539 75.083L88.5123 74.9036ZM82.8397 81.2526C82.8535 81.5835 82.9529 81.9048 83.1275 82.1832C83.3021 82.4615 83.5456 82.6867 83.8325 82.8352L82.9464 82.8928L83.0137 83.9272L86.4938 83.7008C87.5014 83.6353 88.0907 82.766 88.0076 81.4878C87.9245 80.2097 87.2176 79.4914 86.3138 79.4983L86.3791 80.5031C86.6052 80.5461 86.8089 80.672 86.9528 80.8576C87.0968 81.0432 87.1712 81.276 87.1625 81.5131C87.2067 82.1928 86.9172 82.5975 86.3527 82.6342L85.9739 82.6588L85.7974 81.268C85.6418 79.9797 85.0817 79.3113 84.1884 79.3694C83.9755 79.3907 83.7695 79.4578 83.5835 79.5664C83.3976 79.6751 83.2359 79.8228 83.1089 80.0002C82.9818 80.1776 82.8923 80.3807 82.8459 80.5964C82.7995 80.8121 82.7974 81.0356 82.8397 81.2526ZM83.6807 81.4947C83.6423 80.9037 83.8965 80.5087 84.3324 80.4804C84.7683 80.452 85.0706 80.7959 85.1157 81.4904L85.2751 82.7265L84.882 82.7521C84.7202 82.7593 84.5586 82.7319 84.4072 82.6715C84.2559 82.6111 84.1181 82.519 84.0026 82.4011C83.8871 82.2832 83.7964 82.142 83.736 81.9863C83.6757 81.8306 83.6472 81.6639 83.6522 81.4966L83.6807 81.4947ZM81.2684 85.4504C81.339 86.5364 81.7724 87.0202 83.0165 87.3919L88.432 89.0058L88.3585 87.8754L84.1639 86.8275L88.1874 85.2452L88.11 84.0557L83.1665 86.2766L82.8525 86.1932C82.6399 86.169 82.4432 86.0646 82.3001 85.9C82.1569 85.7354 82.0774 85.5222 82.0768 85.3013L82.0552 84.9689L81.2191 85.0232C81.2185 85.1665 81.2254 85.3097 81.2398 85.4522L81.2684 85.4504Z"
                  fill="white"
                />
                <rect
                  x="95.6037"
                  y="93.6859"
                  width="34.8598"
                  height="20.4546"
                  rx="2.5"
                  transform="rotate(-75.147 95.6037 93.6859)"
                  stroke="white"
                />
                <path d="M111.522 61.3254L102.487 95.3945" stroke="#434242" />
                <path d="M113.537 87.8072L111.533 95.3613" stroke="#434242" />
                <path
                  d="M53.3535 101.688H63.7124V125.007H53.3535V101.688ZM66.3034 104.527H79.699C82.5444 104.512 85.2817 105.616 87.3191 107.603C88.0465 108.319 88.6669 109.135 89.1614 110.028C89.366 110.396 89.5034 110.619 89.6122 110.873L89.9516 111.65H103.088C104.643 111.65 105.832 112.834 105.832 114.334C105.832 115.451 105.169 116.394 104.192 116.803L104.171 116.814H104.156C103.816 116.951 103.454 117.021 103.088 117.021H85.0675V119.612H103.088C103.591 119.612 104.07 119.519 104.531 119.389H104.536C104.726 119.38 104.91 119.33 105.078 119.242L123.163 110.862C123.187 110.862 123.614 110.722 124.156 110.803C124.713 110.88 125.244 111.031 125.726 112.163C125.934 112.651 125.952 113.199 125.775 113.7C125.598 114.2 125.241 114.616 124.772 114.865L124.171 115.21L99.015 128.883C98.9795 128.902 98.9449 128.923 98.9113 128.945C97.209 130.088 94.5636 130.469 92.4908 129.95L66.6843 121.211C66.562 121.166 66.4336 121.14 66.3034 121.133V104.527Z"
                  fill="white"
                />
              </svg>
            }
            heading="Increased Payment
            Options"
            subheading="Customers can offer tips using their preferred payment, method whether that a debit card, Apple pay / Google pay or more "
          />
          <AutomaticCard
            svg={
              <svg
                width="187"
                height="187"
                viewBox="0 0 187 187"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="93.7891" cy="93.0547" r="93" fill="#012B84" />
                <path
                  d="M78.6551 100.324C78.6551 96.5016 75.4445 93.291 71.6225 93.291C67.8004 93.291 64.5898 96.5016 64.5898 100.324C64.5898 104.146 67.8004 107.356 71.6225 107.356C75.4445 107.356 78.6551 104.299 78.6551 100.324Z"
                  fill="white"
                />
                <path
                  d="M85.5345 116.529C83.2412 111.178 77.7374 107.356 71.4692 107.356C65.201 107.356 59.8501 111.178 57.404 116.529C56.7925 117.752 57.7098 119.128 59.0857 119.128H83.6999C85.2287 119.281 86.146 117.905 85.5345 116.529ZM122.073 100.324C122.073 96.5016 118.863 93.291 115.041 93.291C111.219 93.291 108.008 96.5016 108.008 100.324C108.008 104.146 111.219 107.356 115.041 107.356C119.016 107.356 122.073 104.299 122.073 100.324Z"
                  fill="white"
                />
                <path
                  d="M129.106 116.529C126.813 111.178 121.309 107.356 115.041 107.356C108.773 107.356 103.422 111.178 100.976 116.529C100.364 117.752 101.282 119.128 102.658 119.128H127.272C128.8 119.281 129.718 117.905 129.106 116.529ZM93.3316 69.8998C97.7652 69.8998 101.282 66.3835 101.282 61.9499C101.282 57.5163 97.7652 54 93.3316 54C88.898 54 85.3817 57.5163 85.3817 61.9499C85.3817 66.3835 88.898 69.8998 93.3316 69.8998ZM77.5847 80.2959C76.9732 81.6718 78.0434 83.3535 79.5722 83.3535H107.091C108.62 83.3535 109.69 81.8247 109.079 80.2959C106.48 74.1805 100.364 69.8998 93.3316 69.8998C86.299 69.8998 80.1837 74.1805 77.5847 80.2959ZM63.9781 96.8072C63.8252 95.737 63.8252 94.514 63.8252 93.4438C63.8252 80.9074 71.7752 69.7469 83.5471 65.6191L82.477 62.5614C69.4819 67.3008 60.7676 79.5315 60.7676 93.4438C60.7676 94.6669 60.7676 96.0428 60.9205 97.2659L63.9781 96.8072ZM81.7125 120.504L80.4895 123.256C84.6173 124.938 88.898 125.855 93.3316 125.855C97.6124 125.855 101.74 125.091 105.562 123.562L104.492 120.657C97.1537 123.715 88.898 123.715 81.7125 120.504ZM122.838 93.4438C122.838 94.514 122.838 95.4313 122.685 96.5015L125.743 96.8072C125.896 95.737 125.896 94.514 125.896 93.4438C125.896 79.3786 117.028 66.995 103.575 62.5614L102.658 65.4662C114.735 69.4412 122.838 80.6016 122.838 93.4438Z"
                  fill="white"
                />
              </svg>
            }
            heading="Profile Sharing
            Option"
            subheading="Ability for the staff to share their tipping profiles with customers via SMS, email or any other social media platform."
          />
        </div>
        <div className="Automatic__card__container__col">
          <AutomaticCard
            svg={
              <svg
                width="187"
                height="187"
                viewBox="0 0 187 187"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="93.2549" cy="93.9316" r="93" fill="#012B84" />
                <path
                  d="M91.6 110.961C91.8773 111.24 92.2072 111.462 92.5707 111.614C92.9341 111.765 93.324 111.843 93.7178 111.843C94.1116 111.843 94.5014 111.765 94.8649 111.614C95.2284 111.462 95.5583 111.24 95.8356 110.961C96.0991 110.671 96.311 110.338 96.462 109.977C96.6198 109.619 96.7013 109.233 96.7013 108.843C96.7013 108.453 96.6198 108.067 96.462 107.71C96.311 107.348 96.0991 107.015 95.8356 106.725C95.5583 106.446 95.2284 106.224 94.8649 106.072C94.5014 105.921 94.1116 105.843 93.7178 105.843C93.324 105.843 92.9341 105.921 92.5707 106.072C92.2072 106.224 91.8773 106.446 91.6 106.725C91.3365 107.015 91.1246 107.348 90.9736 107.71C90.8157 108.067 90.7342 108.453 90.7342 108.843C90.7342 109.233 90.8157 109.619 90.9736 109.977C91.1246 110.338 91.3365 110.671 91.6 110.961ZM83.755 70.0658H105.649C106.44 70.0658 107.199 70.3801 107.758 70.9395C108.318 71.4989 108.632 72.2576 108.632 73.0487V94.9429C108.632 95.734 108.946 96.4927 109.506 97.0521C110.065 97.6115 110.824 97.9258 111.615 97.9258C112.406 97.9258 113.165 97.6115 113.724 97.0521C114.284 96.4927 114.598 95.734 114.598 94.9429V73.0487C114.598 70.6754 113.655 68.3993 111.977 66.7211C110.299 65.0429 108.023 64.1001 105.649 64.1001H83.755C82.9639 64.1001 82.2052 64.4144 81.6458 64.9738C81.0864 65.5332 80.7722 66.2919 80.7722 67.083C80.7722 67.8741 81.0864 68.6328 81.6458 69.1922C82.2052 69.7516 82.9639 70.0658 83.755 70.0658ZM122.681 118.657L68.9899 64.9651C68.4282 64.4034 67.6664 64.0879 66.872 64.0879C66.0777 64.0879 65.3159 64.4034 64.7542 64.9651C64.1925 65.5268 63.877 66.2886 63.877 67.083C63.877 67.8773 64.1925 68.6391 64.7542 69.2008L72.8377 77.2545V114.809C72.8377 117.182 73.7805 119.458 75.4587 121.136C77.1369 122.815 79.413 123.757 81.7863 123.757H105.649C107.406 123.756 109.123 123.238 110.587 122.267C112.051 121.296 113.197 119.916 113.882 118.299L118.446 122.892C118.723 123.172 119.053 123.394 119.416 123.545C119.78 123.697 120.17 123.775 120.564 123.775C120.957 123.775 121.347 123.697 121.711 123.545C122.074 123.394 122.404 123.172 122.681 122.892C122.961 122.615 123.183 122.285 123.334 121.922C123.486 121.558 123.564 121.168 123.564 120.774C123.564 120.381 123.486 119.991 123.334 119.627C123.183 119.264 122.961 118.934 122.681 118.657ZM108.632 114.809C108.632 115.6 108.318 116.359 107.758 116.918C107.199 117.477 106.44 117.792 105.649 117.792H81.7863C80.9952 117.792 80.2365 117.477 79.6771 116.918C79.1177 116.359 78.8035 115.6 78.8035 114.809V83.2202L108.632 113.049V114.809Z"
                  fill="#FBFCFD"
                />
              </svg>
            }
            heading="No Mobile App
            Required"
            subheading="Customers don,t need to download yet another app in their phone.
            Payrinda solution opens directly
            in their phone browser"
          />
          <AutomaticCard
            svg={
              <svg
                width="187"
                height="187"
                viewBox="0 0 187 187"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="93.2549" cy="93.0547" r="93" fill="#012B84" />
                <path
                  d="M92.8326 119.5H65.7959V92.4633L92.8326 119.5ZM92.8326 119.5H119.869V92.4633L92.8326 119.5ZM123.663 66.4756L109.798 68.8656L117.774 70.4662L92.8326 95.2913L66.6854 69.2658L64.7793 71.1827L92.8326 99.1035L119.675 72.3885L121.264 80.3427L123.663 66.4756Z"
                  fill="white"
                />
              </svg>
            }
            heading="Increased Employee
            Moral"
            subheading="By simplifying the tipping process for customers, your staff can be confident in maximizing their chances of receiving tips,"
          />
        </div>
      </div>
      <div className="auto__under__text__over">
        <div className="auto__under__text">
          We love to keep building new innovative products, more solutions
          coming your way soon….
        </div>
      </div>
      <div className="benefits__contaniner__over">
        <div className="benefits__contaniner__over__svg">
          <svg
            width="947"
            height="1941"
            viewBox="0 0 947 1941"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_201_598)">
              <ellipse
                cx="90.3223"
                cy="970.507"
                rx="356"
                ry="470.16"
                fill="#012B84"
                fill-opacity="0.12"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_201_598"
                x="-765.678"
                y="0.347656"
                width="1712"
                height="1940.32"
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
                  result="effect1_foregroundBlur_201_598"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="benefits__contaniner__main">
          <div className="benefits__contaniner__main__left">
            Benefits of <span>Payrinda’s</span> Digital <span>Tipping</span>{" "}
            Solution
          </div>
          <div className="benefits__contaniner__main__right">
            With their usual salaries via your payroll mechanism. Whichever
            approach you take, the digital tipping system streamlines the
            disbursement procedure and allows you to keep track of your staff
            tips earnings.
          </div>
        </div>
        <div className="benefits__cards__container__wrparper">
          <BenefitCard
            number="01"
            text="Enhances employee motivation and engagement."
          />
          <BenefitCard
            number="02"
            text="Employees want equitable compensation, and with fewer guests carrying cash these days, there's been a noticeable decline in tip earnings. By offering guests an option for cashless gratuities, staff are further encouraged to deliver outstanding service, recognizing the potential rewards for their efforts."
          />
          <BenefitCard
            number="03"
            text="Guests often skip tipping service industry staff not due to unsatisfactory service, but because they lack cash. Our digital tipping platform provides guests the opportunity to express their gratitude to service staff using diverse digital payment methods, such as ApplePay and Google Pay."
          />
          <BenefitCard
            number="04"
            text="For service industry merchants, depending on how your payroll is structured, you might choose to transfer tips straight into employees' bank accounts or merge them."
          />
        </div>
      </div>
      <div className="about__main__containe__overlay">
        <div className="about__main__wraper">
          <Fade bottom>
            <div className="about__main__wraper__heading">About Us</div>
          </Fade>
          <div className="about__main__wraper__content__row">
            {" "}
            <div className="about__main__wraper__content__col">
              <div className="about__main__wraper__content__col__text">
                <Fade left duration={1000}>
                  <span>payrinda</span> is an early stage, fintech and social
                  impact company based in Dubai, UAE. We strive to build
                  products that we believe will make the world a better place.{" "}
                  <br />
                  <br />
                </Fade>
                <Fade left duration={1500}>
                  At the heart of <span>payrinda</span> is a dedication to
                  innovation and a commitment to enhancing financial inclusivity
                  and social empowerment. Rooted in the vibrant energy of Dubai,
                  our vision extends far beyond borders, aiming to make a
                  positive difference on a global scale.
                  <br />
                  <br />
                </Fade>
                <Fade left duration={2000}>
                  We are a lean team of professionals with expertise in
                  payments, finance, designers, UX/UI researchers, data analysts
                  and developers. We are supported by a knowledgeable network of
                  advisors and entrepreneurs in finance, fintech, legal,
                  hospitality, marketing, sales, technology and human resources.
                </Fade>
              </div>
            </div>
            <div className="about__main__wraper__content__col">
              <img
                className="about__main__wraper__content__col__image"
                src={about}
                alt="About"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
