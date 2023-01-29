import React, { useEffect } from "react";
import HomeSlider from '../components/HomeSlider';
import Product from '../components/Product';
import Brands from '../components/Brands';
import { ReactComponent as ArrowRight } from '../svg/arrow-right.svg';
import halbanner1 from '../img/halbanner1.jpg';
import halbanner2 from '../img/halbanner2.jpg';
import { Link } from 'react-router-dom';
import ScrollIntoView from "../containers/ScrollIntoView";

const Home = () => {
    useEffect(() => {
        document.body.className = 'home';
        return () => { document.body.className = ''; }
    });

    const numbers = [...Array(8).keys()];

    return (
        <ScrollIntoView>
            <div>
                <HomeSlider />
                <div id="boxes" className="flex justify-between py-9 border border-slate-300 bg-white">
                    <div className="flex items-center justify-center flex-1 py-3">
                        <i className="icon-paper-plane text-3xl text-slate-300 mr-3"></i>
                        <div>
                            <p className="text-black text-lg font-semibold">Frete Grátis</p>
                            <span className="text-slate-400 text-sm">Compras acima de R$100</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-1 py-3">
                        <i className="icon-refresh text-3xl text-slate-300 mr-3"></i>
                        <div>
                            <p className="text-black text-lg font-semibold">30 dias para troca</p>
                            <span className="text-slate-400 text-sm">Se tiver algum problema</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-1 py-3">
                        <i className="icon-credit-card text-3xl text-slate-300 mr-3"></i>
                        <div>
                            <p className="text-black text-lg font-semibold">Seguro</p>
                            <span className="text-slate-400 text-sm">Pagamento 100% seguro</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-1 py-3">
                        <i className="icon-user text-3xl text-slate-300 mr-3"></i>
                        <div>
                            <p className="text-black text-lg font-semibold">Suporte 24h</p>
                            <span className="text-slate-400 text-sm">Suporte dedicado</span>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="flex justify-between space-x-3 top-banners">
                        <div className="basis-1/4 popular-products">
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
                        <div className="banner-large basis-3/4">
                            <span className="banner-badge text-primary bg-white">novo</span>
                            <p className="banner-subtitle text-white">lifestyle</p>
                            <p className="banner-title text-white">Algodão listrado</p>
                            <a href="/" className="banner-btn bg-white text-primary">R$250.00 <span className="border-l-2 border-primary">COMPRAR</span></a>
                        </div>
                    </div>

                    <div className="products flex flex-wrap">
                        {numbers.map(function(object, i){
                            return <div key={i} className="basis-2/4 md:basis-1/4"><Product type="home" /></div>
                        })}
                    </div>
                </div>

                <div className="box-fullwidth flex justify-center items-center">
                    <p className="text-white">Coleçoes incríveis especialmente pra você</p>
                </div>

                <div className="container mx-auto">
                    <div className="half-banners flex justify-between space-x-3">
                        <div className="half-banner">
                            <img src={halbanner1} alt="Príncipe de Gales Slim Fit" />
                            <p className="cat text-white">Ternos</p>
                            <p className="name text-white">Príncipe de Gales<br /> Slim Fit</p>
                            <p className="banner-price text-white">• R$ 2295.00</p>
                        </div>
                        <div className="half-banner">
                            <img src={halbanner2} alt="Cachecol caxemira de lã xadrez" />
                            <p className="cat text-white">Cachecóis</p>
                            <p className="name text-white">Cachecol caxemira<br /> de lã xadrez</p>
                            <p className="banner-price text-white">• R$ 425.00</p>
                        </div>
                    </div>

                    <Brands />
                </div>
            </div>
        </ScrollIntoView>
    );
};

export default Home;
