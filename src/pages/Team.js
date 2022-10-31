import React from "react";
import teamServices from "../services/teamServices";
import Card from "../components/resuable/Card";

const Team = () => {
  const { userName, userJob, userText, userPhotos } = teamServices();
  return (
    <React.Fragment>
      <div className="row mt-5">
        <div className="col-md-12 mt-5">
          <h1>
            <p>
              <i className="fa-solid fa-user"></i> Takım
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
            ever since the 1500s It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <Card
          data={userName}
          photos={userPhotos}
          text={userText}
          link={false}
          price={userJob}
        />
      </div>
    </React.Fragment>
  );
};

export default Team;
