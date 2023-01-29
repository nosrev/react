import React, { useState, useEffect } from 'react';
import bannerCatLarge from '../img/banner-cat-large.jpg';
import bannerCatSmall from '../img/banner-cat-small.jpg';
import categorySlide1 from '../img/category-slide1.jpg';
import categorySlide2 from '../img/category-slide2.jpg';
import { Link } from 'react-router-dom';
import LeftColumn from '../components/LeftColumn';
import Brands from '../components/Brands';
import Product from '../components/Product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollIntoView from "../containers/ScrollIntoView";

const Catalog = () => {
    useEffect(() => {
        if (window.innerWidth < 680) {
            const contentElems = document.querySelectorAll('.category-main .col-left .open');
            for(let i = 0; i < contentElems.length; i++) {
                contentElems[i].classList.remove("open");
            }

            const headElems = document.querySelectorAll('.category-main .col-left button span');
            for(let j = 0; j < headElems.length; j++) {
                headElems[j].classList.remove("icon-arrow-down");
                headElems[j].classList.add("icon-arrow-right");
            }
        }

        return;
    });

    const [listMode, setListMode] = useState("");

    const numbers = [...Array(9).keys()];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
    };

    return (
        <ScrollIntoView>
            <div>
                <div className="title-wrap">
                    <div className="container mx-auto">
                        <h1>Roupas Casuais</h1>
                        <div className="breadcrumbs">
                            <ul className="flex flex-row justify-center">
                                <li>
                                    <Link to='/'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/shop'>
                                        Catálogo
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/shop'>
                                        Homem
                                    </Link>
                                </li>
                                <li>
                                    Casual
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="category-banner">
                    <div className="container mx-auto">
                        <div className="flex justify-between">
                            <div className="banner-cat-large">
                                <img src={bannerCatLarge} alt="" />
                                <p className="banner-subtitle text-white">lifestyle</p>
                                <p className="banner-title text-white">Algodão listrado</p>
                                <Link to='/shop' className="banner-btn bg-white text-gold">
                                    Saiba mais
                                </Link>
                            </div>
                            <div className="banner-cat-small">
                                <img src={bannerCatSmall} alt="" />
                                <p className="banner-subtitle text-white">lifestyle</p>
                                <p className="banner-title text-white">Coleção Fashion</p>
                                <Link to='/shop' className="banner-btn bg-white text-gold">
                                    Saiba mais
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category-top">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap md:flex-nowrap justify-between">
                            <div className="flex justify-between basis-2/4 md:basis-1/4">
                                <h4>Filtros</h4>
                                <div className="filter-reset">
                                    <button><span className="icon-refresh"></span></button>
                                </div>
                            </div>
                            <div className="flex justify-between basis-2/4 md:basis-1/4">
                                <h4>Ordenar:</h4>
                                <select className="border-hidden">
                                    <option></option>
                                    <option>Nome</option>
                                    <option>Preço</option>
                                </select>
                            </div>
                            <div className="flex justify-between basis-2/4 md:basis-1/4">
                                <h4>Mostrar:</h4>
                                <select className="border-hidden">
                                    <option>16</option>
                                    <option>20</option>
                                    <option>24</option>
                                </select>
                            </div>
                            <div className="flex justify-between basis-2/4 md:basis-1/4">
                                <button className={`toggle-view ${listMode === "list" ? "active" : ""}`} id="toggle-list" onClick={() => setListMode("list")}><span className="icon-list"></span></button>
                                <button className={`toggle-view ${listMode === "" ? "active" : ""}`} id="toggle-grid" onClick={() => setListMode("")}><span className="icon-grid"></span></button>
                                <Link to='/shop' className="view-all text-white">
                                    Ver todos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category-main">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap md:flex-nowrap justify-between">
                            <div className="basis-full md:basis-1/4">
                                <LeftColumn />
                            </div>
                            <div className="basis-full md:basis-3/4 category-products">
                                <div className={`products flex flex-wrap ${listMode}`}>
                                    {numbers.map(function(object, i){
                                        return <div key={i} className="basis-1/3"><Product type="catalog" /></div>;
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="pagination">
                            <ul>
                                <li className="previous">
                                    <Link to='/shop'>
                                        <span className="icon-arrow-left"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/shop'>
                                        01
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/shop'>
                                        02
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/shop' className="active">
                                        03
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/shop'>
                                        04
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/shop'>
                                        05
                                    </Link>
                                </li>
                                <li className="next">
                                    <Link to='/shop'>
                                        <span className="icon-arrow-right"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="category-slider">
                    <Slider {...settings}>
                        <div>
                            <img src={categorySlide1} alt="" />
                            <div className="info">
                                <span>Novo Produto</span>
                                <p>A Nova Coleção de Verão</p>
                            </div>
                        </div>
                        <div>
                            <img src={categorySlide2} alt="" />
                            <div className="info">
                                <span>Novo Produto</span>
                                <p>A Nova Coleção de Verão</p>
                            </div>
                        </div>
                    </Slider>
                </div>
                <Brands />
            </div>
        </ScrollIntoView>
    )
}

export default Catalog;
