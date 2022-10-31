import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="logo">Restaurant App</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="navlinkItems" to="/">
                <i className="fas fa-home"></i>
                <span className="linkText">Anasayfa</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="navlinkItems" to="/menu">
                <i className="fa-solid fa-burger"></i>
                <span className="linkText">Menü</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navlinkItems" to="/ekip">
                <i className="fa-solid fa-users"></i>
                <span className="linkText">Ekip</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="navlinkItems" to="/iletisim">
                <i className="fa-solid fa-address-book"></i>
                <span className="linkText">İletişim</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
