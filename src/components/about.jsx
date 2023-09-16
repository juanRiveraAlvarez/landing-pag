import React from "react";
import video  from "../data/video.mp4"

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <video width="550" height="360" controls>
              <source src={video} type="video/webm" />
              <source src={video} type="video/webm" />
              Tu navegador no admite la reproducción de video.
            </video>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Mas informacion</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
