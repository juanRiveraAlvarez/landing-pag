import { Image } from "./image";
import React from "react";
import img1 from "../data/img1.jpg"
import img2 from "../data/img2.jpg"
import img3 from "../data/img3.jpg"
import img4 from "../data/img4.jpg"

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
       
        <div className="row">
          <div className="portfolio-items">
          <img src={img1}></img>
          <img src={img2}></img>
          <img src={img3}></img>
          <img src={img4}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
