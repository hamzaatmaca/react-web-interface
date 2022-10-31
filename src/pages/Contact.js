import React from "react";
import contactServices from "../services/contactServices";

const Contact = () => {
  return (
    <React.Fragment>
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Bize Ulaşın
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          <b>
            Sormak istediğiniz bir şey var mı? Lütfen bizimle bağlantı kurunuz
            Ekibimiz birkaç saat içinde size geri dönecektir.
          </b>
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="/test"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="name" className="">
                      <b>İsminiz</b>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="email" className="">
                      <b>E-mail</b>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label htmlFor="subject" className="">
                      <b>Konu</b>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label htmlFor="message">
                      <b>Mesajınız</b>
                    </label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left mt-5">
              <button type="submit" className="btn btn-danger">
                Gönder
              </button>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Denizli, Pamukkale 94126, Türkiye</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>info@restaurant.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
