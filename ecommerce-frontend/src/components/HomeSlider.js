import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../img/slide1.png';
import { ReactComponent as ArrowLeft } from '../svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../svg/arrow-right.svg';

const HomeSlider = () => {
    const content = [
        {
            image: slide1,
            title: 'Fashion',
            subtitle: 'Lançamentos',
            button: 'Comprar',
            bg: 'black'
        },
        {
            image: slide1,
            title: 'Casual',
            subtitle: 'Promoções',
            button: 'Comprar',
            bg: 'primary'
        },
    ];

    function PrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={`${className} go-previous`}
          style={style}
          onClick={onClick}
        >
            <ArrowLeft className="icon w-8 fill-white" />
        </div>
      );
    }

    function NextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={`${className} go-next`}
          style={style}
          onClick={onClick}
        >
            <ArrowRight className="icon w-8 fill-white" />
        </div>
      );
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        fade: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div id="slider-wrapper">
            <div className="slider">
                <Slider {...settings}>
                    {content.map((item, index) => (
                        <div className={"bg-" + item.bg } key={index}>
                            <img src={item.image} className="slide-img" alt={item.title} />
                            <p className="title text-blue2">{item.title}</p>
                            <p className="subtitle text-white">{item.subtitle}</p>
                            <a href="/" className="btn-view inline-block bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary">{item.button}</a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default HomeSlider;
