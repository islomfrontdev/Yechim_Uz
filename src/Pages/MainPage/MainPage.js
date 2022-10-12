import { Container } from "@mui/material";
import React from "react";
import Button from "../../components/Button/Button";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div className="home" id="home">
      <Container>
        <section className="flex items-center">
          <div className="deco-shape shape-1">
            <img
              src="/shape-1.png"
              alt="art shape"
              width="70"
              className="artShape"
            />
          </div>
          <div className="deco-shape shape-2">
            <img src="/shape-2.png" alt="art shape" width="55" />
          </div>
          <div className="deco-shape shape-3">
            <img src="/shape-3.png" alt="art shape" width="120" />
          </div>
          <div className="deco-shape shape-4">
            <img src="/shape-4.png" alt="art shape" width="30" />
          </div>

          <div className="home-left ">
            <p className="section-subtitle">
              Yechim Uz platformasiga xush kelibsiz
            </p>

            <h1 className="main-heading">
              Murakkab masalalar uchun oson
              <span className="underline-img">
                yechimlar
                <img src="/banner-line.png" alt="line" />
              </span>
            </h1>

            <p className="section-text">
              Bu platformadan foydalanib dasturlash tillarida ko'p uchraydigan
              murakkab savollarga oson yechim topishingiz mumkin
            </p>

            <div className="home-btn-group">
              <Button btnText={"Yechimlarni Ko'rish"} />
              <Button btnText={"Bog'lanish"} />
            </div>
          </div>

          <div className="home-right">
            <div className="img-box">
              <img
                src="/banner-img-bg.png"
                alt="colorful background shape"
                className="background-shape"
              />
              <img
                src="/banner-img.png"
                alt="banner image"
                className="banner-img"
              />

              <img
                src="/banner-aliment-icon-1.png"
                alt=""
                className="icon-1 smooth-zigzag-anim-1"
                width="250"
              />
              <img
                src="/banner-aliment-icon-2.png"
                alt=""
                className="icon-2 smooth-zigzag-anim-2"
                width="240"
              />
              <img
                src="/banner-aliment-icon-3.png"
                alt=""
                className="icon-3 smooth-zigzag-anim-3"
                width="195"
              />
              <img
                src="/banner-aliment-icon-4.png"
                alt=""
                className="icon-4 drop-anim"
              />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default MainPage;
