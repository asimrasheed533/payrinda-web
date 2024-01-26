import React, { useState, useEffect } from "react";

export default function login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setpassword] = useState("");
  const [passwordError, setpasswordError] = useState("");
  ////// signup
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");

  const handelSubmitSignin = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("enter email");
    }
    if (!password) {
      setpasswordError("enter password");
    }
    if (email && email.includes("@") && password) {
      setEmailError(null);
      setpasswordError(null);
      setEmail("");
      setpassword("");
    }
  };

  const handelSubmitSignUp = (e) => {
    e.preventDefault();
    if (!userName) {
      setUserNameError("enter name");
    }
    if (!userEmail) {
      setUserEmailError("enter email");
    }
    if (!userPassword) {
      setUserPasswordError("enter password");
    }
    if (userName && userEmail && userEmail.includes("@") && userPassword) {
      setUserNameError(null);
      setUserEmailError(null);
      setUserPasswordError(null);
      setUserName("");
      setUserEmail("");
      setUserPassword("");
    }
  };
  console.log(handelSubmitSignin);

  useEffect(() => {
    setTimeout(() => {
      setIsSignIn(true);
    }, 200);
  }, []);

  const toggle = () => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  };
  return (
    <div
      id="container"
      className={`container ${isSignIn ? "sign-in" : "sign-up"}`}
    >
      <div className="row">
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  error={userNameError}
                  value={userName}
                  onChange={(e) => {
                    if (!e.target.value) {
                      setUserNameError("enter name");
                    } else {
                      setUserNameError("");
                    }
                    setUserName(e.target.value);
                  }}
                />
                {userNameError !== "" ? (
                  <p className="error__form">{userNameError}</p>
                ) : null}
              </div>
              <div className="input-group">
                <i className="bx bx-mail-send"></i>
                <input
                  type="email"
                  placeholder="Email"
                  error={userEmailError}
                  value={userEmail}
                  onChange={(e) => {
                    if (!e.target.value) {
                      setUserEmailError("enter email");
                    } else {
                      setUserEmailError("");
                    }
                    setUserEmail(e.target.value);
                  }}
                />
                {userEmailError !== "" ? (
                  <p className="error__form">{userEmailError}</p>
                ) : null}
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Password"
                  maxLength={8}
                  value={userPassword}
                  error={userPasswordError}
                  onChange={(e) => {
                    if (!e.target.value) {
                      setUserPasswordError("enter password");
                    } else {
                      setUserPasswordError("");
                    }
                    setUserPassword(e.target.value);
                  }}
                />
                {userPasswordError !== "" ? (
                  <p className="error__form">{userPasswordError}</p>
                ) : null}
              </div>
              {/* <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Confirm password"
                  maxLength={8}
                  value={userPassword}
                  error={userPasswordError}
                  onChange={(e) => {
                    if (!e.target.value.length < 8) {
                      setUserPasswordError("enter password");
                    } else {
                      setUserPasswordError("");
                    }
                    setUserPassword(e.target.value);
                  }}
                />
                {userPasswordError !== "" ? (
                  <p className="error__form">{userPasswordError}</p>
                ) : null}
              </div> */}

              <button onClick={(event) => handelSubmitSignUp(event)}>
                Sign Up
              </button>
              <p>
                <span>Already have an account?</span>
                <b onClick={() => toggle()} className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  error={emailError}
                  onChange={(e) => {
                    if (!e.target.value) {
                      setEmailError("enter email");
                    } else {
                      setEmailError("");
                    }
                    setEmail(e.target.value);
                  }}
                />
                {emailError !== "" ? (
                  <p className="error__form">{emailError}</p>
                ) : null}
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Password"
                  maxLength={8}
                  value={password}
                  error={passwordError}
                  onChange={(e) => {
                    if (!e.target.value) {
                      setpasswordError("enter password");
                    } else {
                      setpasswordError("");
                    }
                    setpassword(e.target.value);
                  }}
                />
                {passwordError !== "" ? (
                  <p className="error__form">{passwordError}</p>
                ) : null}
              </div>
              {/* <button onClick={() => handelSubmitSignin()}>Sign in</button> */}
              <button onClick={(event) => handelSubmitSignin(event)}>
                Sign in
              </button>

              <p>
                <b>Forgot password?</b>
              </p>
              <p>
                <span>Don't have an account?</span>
                <b onClick={() => toggle()} className="pointer">
                  Sign up here
                </b>
              </p>
            </div>
          </div>
          <div className="form-wrapper"></div>
        </div>
      </div>
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="text sign-in join__with__us">
            <h2>Welcome</h2>
          </div>
          <div className="img sign-in"></div>
        </div>
        <div className="col align-items-center flex-col">
          <div className="img sign-up"></div>
          <div className="text sign-up join__with__us">
            <h2>Join with us</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
