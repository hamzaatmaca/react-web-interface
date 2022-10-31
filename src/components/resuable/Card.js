import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { data, text, link, photos, price } = props;

  return (
    <div className="row mt-5">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        className="col-md-12"
      >
        {data.map((param, key) => {
          return (
            <div key={key} className="card">
              {photos !== undefined && photos.length > 0 ? (
                <img src={photos[key]} className="card-img-top" alt="..." />
              ) : (
                ""
              )}

              <div className="card-body">
                <h5 style={{ color: "orangered" }} className="card-title">
                  {param}
                </h5>
                {text !== undefined && text.length > 0 ? (
                  <p className="card-text">{text[key]}</p>
                ) : (
                  ""
                )}
                {price !== undefined && price.length > 0 ? (
                  <p>
                    <b>{price[key]}</b>
                  </p>
                ) : (
                  ""
                )}
                {link !== undefined && link === true ? (
                  <Link
                    style={{
                      color: "orangered",
                      textDecoration: "none",
                    }}
                    to={param.toLowerCase()}
                  >
                    Ayrıntılar
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
