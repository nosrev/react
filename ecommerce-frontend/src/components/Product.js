import React from 'react';
import image from '../img/produto.png';
import { Link } from 'react-router-dom';

const Product = ({type}) => {
    if (type === "home" || type === "popular") {
        return (
            <Link to='/product'>
                <div className="product border border-slate-300">
                    <span className="product-badge">oferta</span>
                    <img src={image} alt="Camiseta algodão" />
                    <p className="product-name">Camiseta algodão</p>
                    <p className="product-price">
                        <span className="old-price">R$200.00</span>
                        <span className="special-price">R$100.00</span>
                    </p>
                </div>
            </Link>
        );
    }

    return (
        <Link to='/product'>
            <div className="product border border-slate-300">
                <img src={image} alt="Camiseta algodão" />
                <p className="product-name">Camiseta algodão</p>
                <p className="product-price">R$175.00</p>
                <p className="short-desc">
                    Camiseta Comfort Básica em Algodão com Manga Curta<br/>
                    Camiseta comfort, em algodão peruano, com mangas curtas. Confeccionada em algodão peruano, a peça é leve e respirável.
                </p>
            </div>
        </Link>
    );
};

export default Product;
