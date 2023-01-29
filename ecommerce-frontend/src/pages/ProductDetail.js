import React, { useState } from "react";
import { Link } from 'react-router-dom';
import produto2 from '../img/produto2.jpg';
import produto3 from '../img/produto3.jpg';
import produto4 from '../img/produto4.jpg';
import produto5 from '../img/produto5.jpg';
import produto2Thumb from '../img/produto2-thumb.jpg';
import produto3Thumb from '../img/produto3-thumb.jpg';
import produto4Thumb from '../img/produto4-thumb.jpg';
import produto5Thumb from '../img/produto5-thumb.jpg';
import user from '../img/user.png';
import user2 from '../img/user2.png';
import user3 from '../img/user3.png';
import Product from '../components/Product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Star } from '../svg/star.svg';
import { ReactComponent as Left } from '../svg/left.svg';
import { ReactComponent as Right } from '../svg/right.svg';
import { ReactComponent as ArrowRight } from '../svg/arrow-right.svg';
import Brands from '../components/Brands';
import ScrollIntoView from "../containers/ScrollIntoView";

const ProductDetail = () => {
    const [imagesSlider, setImagesSlider] = useState();
    const [thumbnailsSlider, setThumbnailsSlider] = useState();

    const numbers = [...Array(3).keys()];

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: thumbnailsSlider
    };

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
              className={`${className}`}
              style={style}
              onClick={onClick}
            >
                <Left className="arrow-left icon w-5 stroke-black stroke-2" />
            </div>
        );
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
              className={`${className}`}
              style={style}
              onClick={onClick}
            >
                <Right className="arrow-left icon w-5 stroke-black stroke-2" />
            </div>
        );
    }

    const settingsThumbs = {
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: imagesSlider,
        focusOnSelect: true,
        vertical: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const changeQty = (e, type) => {
        if (type === 'plus') {
            e.target.previousElementSibling.stepUp();
        } else {
            e.target.nextElementSibling.stepDown();
        }
    }

    const toggleTab  = (e) => {
        const tabs = document.querySelectorAll('.nav-tabs .nav-link');
        for(let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
        }
        e.target.classList.add("active");

        const tabsContent = document.querySelectorAll('.tab-pane');
        for(let j = 0; j < tabsContent.length; j++) {
            tabsContent[j].classList.remove("show");
            tabsContent[j].classList.remove("active");
        }

        const targetEl = e.target.dataset.tab;
    	document.querySelector(targetEl).classList.add("show");
        document.querySelector(targetEl).classList.add("active");
    }

    return (
        <ScrollIntoView>
            <div>
                <div className="title-wrap">
                    <div className="container mx-auto">
                        <h2>Roupas Casuais</h2>
                        <div className="breadcrumbs">
                            <ul className="flex flex-row justify-center">
                                <li>
                                    <Link to='/'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    Jaqueta de lã dupla face
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="main-product">
                    <div className="container mx-auto">
                        <div id="info">
                            <div>
                                <p className="categ">lifestyle</p>
                                <h1>Jaqueta de lã dupla face</h1>
                                <div className="flex rating-wrapper">
                                    <div className="rating">
                                        <Star className="rating__star active" />
                                        <Star className="rating__star active" />
                                        <Star className="rating__star active" />
                                        <Star className="rating__star active" />
                                        <Star className="rating__star" />
                                    </div>
                                </div>

                                <div className="options">
                                    <div className="option" id="color">
                                        <label>Cor:</label>
                                        <ul>
                                            <li><button className="selected" style={{ background: "#fff", filter: "drop-shadow(0 0 2px rgba(0,0,0,0.20))" }}></button></li>
                                            <li><button style={{ background: "#f34335" }}></button></li>
                                            <li><button style={{ background: "#ffeb3b" }}></button></li>
                                            <li><button style={{ background: "#4baf4f" }}></button></li>
                                        </ul>
                                    </div>
                                    <div className="option" id="size">
                                        <label>Tamanho:</label>
                                        <ul>
                                            <li><button>P</button></li>
                                            <li><button>M</button></li>
                                            <li><button className="selected">G</button></li>
                                            <li><button>GG</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-between add-to-cart-wrapper">
                                    <span>
                                        <span className="price">R$60.00</span>
                                        <span className="old-price">R$90.00</span>
                                    </span>
                                    <div className="qty">
                                        <button className="minus" onClick={(e) => changeQty(e, 'minus')}></button>
                                        <input type="number" className="input" defaultValue="1" min="1" />
                                        <button className="plus" onClick={(e) => changeQty(e, 'plus')}></button>
                                    </div>
                                    <button className="btn-cart"><span className="plus"></span>Comprar</button>
                                </div>
                                <button className="btn-wishlist"><span className="icon-heart"></span> Adicionar aos Favoritos</button>
                            </div>

                            <div className="images-wrapper">
                                <Slider {...settings} className="product-images" ref={slider => (setImagesSlider(slider))}>
                                    <img src={produto2} alt="" />
                                    <img src={produto3} alt="" />
                                    <img src={produto4} alt="" />
                                    <img src={produto5} alt="" />
                                    <img src={produto2} alt="" />
                                </Slider>

                                <Slider {...settingsThumbs} className="thumbnails" ref={slider => (setThumbnailsSlider(slider))}>
                                    <img src={produto2Thumb} alt="" />
                                    <img src={produto3Thumb} alt="" />
                                    <img src={produto4Thumb} alt="" />
                                    <img src={produto5Thumb} alt="" />
                                    <img src={produto2Thumb} alt="" />
                                </Slider>
                            </div>
                        </div>

                        <div id="tabs">
                            <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0"
                              role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button onClick={(e) => toggleTab(e) } data-tab="#tabs-reviews" className="nav-link
                                    block
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    border-x-0 border-t-0 border-b-2 border-transparent
                                    hover:border-transparent
                                    focus:border-transparent
                                    active
                                    " id="tabs-reviews-tab" role="tab" aria-controls="tabs-reviews"
                                  aria-selected="true">Avaliações</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button onClick={(e) => toggleTab(e) } data-tab="#tabs-specification" className="
                                    nav-link
                                    block
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    border-x-0 border-t-0 border-b-2 border-transparent
                                    hover:border-transparent
                                    focus:border-transparent
                                    " id="tabs-specification-tab" role="tab"
                                    aria-controls="tabs-specification" aria-selected="false">Detalhes</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button onClick={(e) => toggleTab(e) } data-tab="#tabs-description" className="
                                    nav-link
                                    block
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    border-x-0 border-t-0 border-b-2 border-transparent
                                    hover:border-transparent
                                    focus:border-transparent
                                    " id="tabs-description-tab" role="tab"
                                    aria-controls="tabs-description" aria-selected="false">Descrição</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="tabs-tabContent">
                                <div className="tab-pane fade show active" id="tabs-reviews" role="tabpanel" aria-labelledby="tabs-reviews-tab">
                                    <h4>Avaliações <span>(03)</span></h4>
                                    <div className="reviews-list">
                                        <div className="flex review">
                                            <img src={user} className="rounded" alt="" />
                                            <div className="w-full">
                                                <div className="flex justify-between">
                                                    <div className="flex items-center">
                                                        <p className="user">
                                                            Williams
                                                        </p>
                                                        <div className="rating">
                                                            <Star className="rating__star active" />
                                                            <Star className="rating__star active" />
                                                            <Star className="rating__star active" />
                                                            <Star className="rating__star" />
                                                            <Star className="rating__star" />
                                                        </div>
                                                    </div>
                                                    <p className="date"><i className="icon-clock"></i>   Date: April 05, 2017</p>
                                                </div>
                                                <p className="text">
                                                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sodales congue ex, quis dictum mauris. Donec at vulputate metus, vel venenatis magna. Maecenas tincidunt at erat euismod malesuada.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex review">
                                            <img src={user2} className="rounded" alt="" />
                                            <div className="w-full">
                                                <div className="flex justify-between">
                                                    <div className="flex items-center">
                                                        <p className="user">
                                                            Thomas
                                                        </p>
                                                        <div className="rating">
                                                            <Star className="rating__star active" />
                                                            <Star className="rating__star active" />
                                                            <Star className="rating__star active" />
                                                            <Star className="rating__star active" />
                                                            <Star className="rating__star active" />
                                                        </div>
                                                    </div>
                                                    <p className="date"><i className="icon-clock"></i>   Date: April 05, 2017</p>
                                                </div>
                                                <p className="text">
                                                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sodales congue ex, quis dictum mauris. Donec at vulputate metus, vel venenatis magna. Maecenas tincidunt at erat euismod malesuada.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex review">
                                            <img src={user3} className="rounded" alt="" />
                                            <div className="w-full">
                                                <div className="flex justify-between">
                                                    <div className="flex items-center">
                                                        <p className="user">
                                                            Bazic
                                                        </p>
                                                        <div className="rating">
                                                            <Star className="rating__star active" />
                                                            <Star className="rating__star active" />
                                                            <Star className="rating__star active" />
                                                            <Star className="rating__star active" />
                                                            <Star className="rating__star" />
                                                        </div>
                                                    </div>
                                                    <p className="date"><i className="icon-clock"></i>   Date: April 05, 2017</p>
                                                </div>
                                                <p className="text">
                                                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sodales congue ex, quis dictum mauris. Donec at vulputate metus, vel venenatis magna. Maecenas tincidunt at erat euismod malesuada.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="review-form">
                                        <h4>Deixe sua avaliação</h4>
                                        <form>
                                            <div>
                                                <label className="block">Nome</label>
                                                <input type="text" className="input" />
                                            </div>
                                            <div>
                                                <label className="block">Avaliação</label>
                                                <div className="rating">
                                                    <input type="radio" name="rating-star-user" className="rating__control screen-reader" id="rating-star-6" defaultChecked />
                                                    <input type="radio" name="rating-star-user" className="rating__control screen-reader" id="rating-star-7" />
                                                    <input type="radio" name="rating-star-user" className="rating__control screen-reader" id="rating-star-8" />
                                                    <input type="radio" name="rating-star-user" className="rating__control screen-reader" id="rating-star-9" />
                                                    <input type="radio" name="rating-star-user" className="rating__control screen-reader" id="rating-star-10" />
                                                    <label htmlFor="rating-star-6" className="rating__item">
                                                        <Star className="rating__star" />
                                                        <span className="screen-reader">1</span>
                                                    </label>
                                                    <label htmlFor="rating-star-7" className="rating__item">
                                                        <Star className="rating__star" />
                                                        <span className="screen-reader">2</span>
                                                    </label>
                                                    <label htmlFor="rating-star-8" className="rating__item">
                                                        <Star className="rating__star" />
                                                        <span className="screen-reader">3</span>
                                                    </label>
                                                    <label htmlFor="rating-star-9" className="rating__item">
                                                        <Star className="rating__star" />
                                                        <span className="screen-reader">4</span>
                                                    </label>
                                                    <label htmlFor="rating-star-10" className="rating__item">
                                                        <Star className="rating__star" />
                                                        <span className="screen-reader">5</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block">Comentário</label>
                                                <textarea className="input"></textarea>
                                            </div>
                                            <div>
                                                <button className="bg-primary text-white w-full py-2 font-semibold">Enviar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tabs-specification" role="tabpanel" aria-labelledby="tabs-specification-tab">
                                    <table className="table-auto [margin-top:10px] min-w-[30%] border border-slate-400">
                                        <tbody>
                                            <tr>
                                                <td className="border border-slate-300 p-[10px]">Tamanhos</td>
                                                <td className="border border-slate-300 p-[10px]"><strong>P, M, G, GG</strong></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300 p-[10px]">Marca</td>
                                                <td className="border border-slate-300 p-[10px]"><strong>Fashion</strong></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300 p-[10px]">Material</td>
                                                <td className="border border-slate-300 p-[10px]"><strong>Algodão</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane fade" id="tabs-description" role="tabpanel" aria-labelledby="tabs-description-tab">
                                    <div>
                                        <p>Casaco com mangas longas, decote redondo , com abertura frontal em trança com apenas 1 botão , tranças nas barras da manga e do corpo .</p>
                                        <p>Um casaco &nbsp;moderno e com estilo , chique e ao mesmo tempo casual.</p>
                                        <p>Composição 50% algodão e 50% acrílico</p>
                                        <p>&nbsp;</p>
                                        <p>Também conhecidas como casacos de nylon ou doudoune, os casacos puffers são sempre leves e as costuras acolchoadas garantem seus gomos.&nbsp;</p>
                                        <p>&nbsp;</p>
                                        <p>Com 6 botões para fechamento frontal e cinto para amarração.</p>
                                        <p>Dois bolsos laterais.</p>
                                        <p>Possui forração interna.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="flex justify-between mt-[70px] popular-products">
                        <div className="basis-1/3">
                            <div className="info">
                                <span className="icon-fire"></span>
                                <p className="title">
                                    Produto Popular
                                </p>
                                <Link to='/shop'>
                                    Mais Produtos
                                    <ArrowRight className="icon fill-white" />
                                </Link>
                            </div>
                        </div>
                        {numbers.map(function(object, i){
                            return <div key={i} className="basis-1/3"><Product type="popular" /></div>
                        })}
                    </div>
                </div>
                <Brands />
            </div>
        </ScrollIntoView>
    )
}

export default ProductDetail;
