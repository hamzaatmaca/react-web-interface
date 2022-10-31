import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-5">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link
            style={{
              color: "orangered",
              textDecoration: "none",
            }}
            to="/"
          >
            Anasayfa
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: "orangered",
              textDecoration: "none",
            }}
            to="menu"
          >
            Menü
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: "orangered",
              textDecoration: "none",
            }}
            to="/team"
          >
            Takım
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: "orangered",
              textDecoration: "none",
            }}
            to="/packageservice"
          >
            Paket Servis
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: "orangered",
              textDecoration: "none",
            }}
            to={""}
          >
            İletişim
          </Link>
        </li>
      </ul>
      <p className="text-center text-muted">&copy; 2022 hamzaatmaca.net</p>
    </footer>
  );
};

export default Footer;
