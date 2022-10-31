import React from "react";
import Slider from "../components/resuable/Slider";
import Card from "../components/resuable/Card";
import homeServices from "../services/homeServices";

const Home = () => {
  const { sliderPhotos, branchs, branchPhotos, text } = homeServices();
  return (
    <React.Fragment>
      <div className="row mt-5">
        <div className="col-md-6 mt-5">
          <h1>
            <p>
              <i className="fa-solid fa-utensils"></i> Restaurant
            </p>
          </h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="col-md-6 mt-5 center-block">
          {" "}
          <Slider data={sliderPhotos} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="row-mt5">
          <h2>
            <i className="fa-solid fa-shop"></i> Şubeler
          </h2>
        </div>
        <Card data={branchs} photos={branchPhotos} text={text} link={false} />
      </div>

      <div className="row mt-5">
        <section className="gradient-custom">
          <section className="home-testimonial">
            <div className="container-fluid">
              <div className="row d-flex justify-content-center testimonial-pos">
                <div className="col-md-12 pt-4 d-flex justify-content-center">
                  <h3 className="text-light">Yorumlar</h3>
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                  <h2 className="text-light"> Müşteri Deneyimleri</h2>
                </div>
              </div>
              <section className="home-testimonial-bottom">
                <div className="container testimonial-inner mt-2 mb-5">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-4 style-3 mt-2">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="tour-text color-grey-3 text-center">
                            &ldquo;Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                            &rdquo;
                          </div>
                          <div className="link-name d-flex justify-content-center">
                            <b>Müşteri</b>
                          </div>
                          <div className="link-position d-flex justify-content-center">
                            İş adamı
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 style-3 mt-2">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="tour-text color-grey-3 text-center">
                            &ldquo;Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen
                            book.&rdquo;
                          </div>

                          <div className="link-name d-flex justify-content-center">
                            <b>Müşteri</b>
                          </div>
                          <div className="link-position d-flex justify-content-center">
                            Avukat
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 style-3 mt-2">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="tour-text color-grey-3 text-center">
                            &ldquo;Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen
                            book.&rdquo;
                          </div>

                          <div className="link-name d-flex justify-content-center">
                            <b>Müşteri</b>
                          </div>
                          <div className="link-position d-flex justify-content-center">
                            Bürokrat
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container testimonial-inner mt-2 mb-5">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-4 style-3 mt-2">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="tour-text color-grey-3 text-center">
                            &ldquo;Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen
                            book.&rdquo;
                          </div>

                          <div className="link-name d-flex justify-content-center">
                            <b>Müşteri</b>
                          </div>
                          <div className="link-position d-flex justify-content-center">
                            Öğretmen
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 style-3 mt-2">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="tour-text color-grey-3 text-center">
                            &ldquo;Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen
                            book.&rdquo;
                          </div>

                          <div className="link-name d-flex justify-content-center">
                            <b>Müşteri</b>
                          </div>
                          <div className="link-position d-flex justify-content-center">
                            Doktor
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 style-3 mt-2">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="tour-text color-grey-3 text-center">
                            &ldquo;Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen
                            book.&rdquo;
                          </div>

                          <div className="link-name d-flex justify-content-center">
                            <b>Müşteri</b>
                          </div>
                          <div className="link-position d-flex justify-content-center">
                            Mimar
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;
