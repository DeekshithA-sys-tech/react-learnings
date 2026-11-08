import React from "react";
import "./imagegallary.css"
import img1 from "../../assets/images/banner-1.webp";
import img2 from "../../assets/images/banner-2.webp";
import img5 from "../../assets/images/bluemoon.jpg";
import img8 from "../../assets/images/germany.jpg";
import img4 from "../../assets/images/bidge.jpg";
import img7 from "../../assets/images/food-strip.webp";
import img6 from "../../assets/images/burger.webp";
import img3 from "../../assets/images/banner-media.webp";

const ImgGallary = () => {
  return (
    <>
      <div className="image-gallary">
        <h2>IMAGE GALLARY</h2>
      </div>
      <div className="container">
        <img src={img8} alt="" />
        <img src={img8} alt="" />
        <img src={img8} alt="" />
        <img src={img8} alt="" />
        <img src={img8} alt="" />
        <img src={img8} alt="" />
      </div>
    </>
  );
};

export default ImgGallary;
