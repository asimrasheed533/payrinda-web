// useCallBack, useRef, useEffect, useState
// gererate password
import React, { useState, useCallback, useEffect, useRef } from "react";

export default function test() {
  const [length, setLength] = useState(8);
  const [chaAllowed, setChaAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (chaAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, chaAllowed, numAllowed]);

  // const copyPasswordToClipboard = useCallback(() => {
  //   passwordRef.current.select();
  //   window.navigator.clipboard.writeText(password);
  // }, [password]);

  // useEffect(() => {
  //   passwordGenerator();
  // }, [length, chaAllowed, numAllowed]);

  return (
    <>
      <div className="pas__genrater__main__container">
        <div className="pas__genrater__wraper__over">
          <div className="pas__genrater__wraper">
            <div className="pas__genrater__wraper__heading">
              Password Gererator
            </div>
            <div className="pas__genrater__wraper__input">
              <input
                value={password}
                placeholder="password"
                type="text"
                readOnly
                min={8}
                max={40}
                ref={passwordRef}
              />
              <button
                // onClick={copyPasswordToClipboard}
                onClick={() => {
                  passwordGenerator();
                }}
                className="pas__genrater__wraper__input__btn"
              >
                Generate
              </button>
            </div>
            <div className="pas__genrater__wraper__input__sub__wraper">
              <div className="pas__genrater__wraper__input__range">
                <input
                  type="range"
                  min={8}
                  max={40}
                  value={length}
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <label>length:{length}</label>
              </div>
              <div className="pas__genrater__wraper__input__range">
                <input
                  type="checkbox"
                  defaultChecked={numAllowed}
                  onChange={(e) => {
                    setNumAllowed((prev) => !prev);
                  }}
                />
                <label>numbers</label>
              </div>
              <div className="pas__genrater__wraper__input__range">
                <input
                  type="checkbox"
                  defaultChecked={chaAllowed}
                  onChange={(e) => {
                    setChaAllowed((prev) => !prev);
                  }}
                />
                <label>Add spical cracter</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
