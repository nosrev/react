import React from 'react';
import brand1 from '../img/brand1.png';
import brand2 from '../img/brand2.png';
import brand3 from '../img/brand3.png';
import brand4 from '../img/brand4.png';
import { ReactComponent as Left } from '../svg/left.svg';
import { ReactComponent as Right } from '../svg/right.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
    function PrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={style}
          onClick={onClick}
        >
            <Left className="icon w-8 left" />
        </div>
      );
    }

    function NextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={style}
          onClick={onClick}
        >
            <Right className="icon w-8 right" />
        </div>
      );
    }

    const settings = {
        slidesToShow: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        draggable: true,
        responsive: [
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 440,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    };

    return (
        <div className="brands-wrapper">
            <Slider {...settings} className="brands">
                <img src={brand1} alt="brand1" />
                <img src={brand2} alt="brand2" />
                <img src={brand3} alt="brand3" />
                <img src={brand4} alt="brand4" />
                <img src={brand2} alt="brand2" />
                <img src={brand1} alt="brand1" />
                <img src={brand3} alt="brand3" />
            </Slider>
        </div>
    )
}

export default Brands;
