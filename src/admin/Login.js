import React, { useState } from "react";
//import { Link } from "react-router-dom";
import loginServices from "../services/loginServices";

const Login = () => {
  const [userPayload, setUserPayload] = useState({
    email: null,
    password: null,
  });
  const [alertText, setAlertText] = useState(false);

  const handleClick = () => {
    if (
      userPayload.email !== "" &&
      userPayload.password !== "" &&
      userPayload.email !== null &&
      userPayload.password !== null
    ) {
      if (userPayload.email.includes("@") === true) {
        loginServices(userPayload);
        setAlertText(false);
      } else {
        setAlertText(true);
      }
    } else {
      setAlertText(true);
    }
  };

  return (
    <div className="d-flex justify-content-center h-100 mt-5">
      <div className="user_card">
        <div className="d-flex justify-content-center mt-5">
          <b className="text-center login-text">
            Yönetim Paneli <br />
            Login Sayfası
            <br />
            {alertText ? (
              <p className="alerText mt-4">
                <i className="fa-solid fa-circle-exclamation"></i> E-mail veya
                şifre eksik yada formatı yanlış.
                <br />
                Lütfen doğru giriniz
              </p>
            ) : (
              ""
            )}
          </b>
        </div>

        <div className="d-flex justify-content-center form_container mb-5">
          <form>
            <div className="input-group mb-3">
              {/* <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div> */}
              <input
                type="email"
                name=""
                className="form-control input_user"
                placeholder="E-mail"
                required
                onChange={(e) => {
                  setUserPayload({ ...userPayload, email: e.target.value });
                }}
              />
            </div>
            <div className="input-group mb-2">
              {/* <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div> */}
              <input
                type="Password"
                name=""
                required
                className="form-control input_pass"
                placeholder="Password"
                onChange={(e) => {
                  setUserPayload({ ...userPayload, password: e.target.value });
                }}
              />
            </div>

            <div className="d-flex justify-content-center mt-3 login_container">
              <button
                onClick={handleClick}
                type="button"
                name="button"
                className="btn login_btn"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* <div className="mt-4">
          <div className="d-flex justify-content-center links">
            <Link className="navlinkItems" to="">
              Giriş Yap
            </Link>
          </div>
          <div className="d-flex justify-content-center links">
            <Link className="navlinkItems" to="">
              Şifremi Unuttum
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
