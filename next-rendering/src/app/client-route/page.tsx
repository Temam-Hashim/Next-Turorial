"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { useTheme } from "@/components/context/theme.provider";
import { clientOnlyFunction } from "@/utils/client-utils";

function ClientRoute() {
  console.log("Client Side Rendering");
  // const result  = serverSideFunction();
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  const theme = useTheme();
  const clientOnly = clientOnlyFunction();
  return (
    <div className="">
      <h4
        style={{
          background: theme.colors.secondary,
          width: "100%",
          color: "white",
          height: "50px",
        }}
      >
        Client Route Page {clientOnly}
      </h4>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/300/201" />
          </div>
          <div>
            <img src="https://picsum.photos/300/202" />
          </div>
          <div>
            <img src="https://picsum.photos/300/203" />
          </div>
          <div>
            <img src="https://picsum.photos/300/204" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ClientRoute;
