// bebonce function is used to call the function after some time
import React from "react";

export default function Search() {
  //   let cont = 0;
  //   function getdata() {
  //     console.log("resulted updated" + cont++);
  //   }
  function debonce(call, dely = 1000) {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
        setTimeout(() => {
          call();
        }, dely);
      }
    };
  }

  return (
    <>
      <div className="pas__genrater__main__container">
        <div className="search__input__container">
          <input
            maxLength={60}
            type="search"
            placeholder="search"
            onChange={debonce}
          />
        </div>
      </div>
    </>
  );
}
