import React from 'react';
import { ReactComponent as Close } from '../svg/close.svg';
import image from '../img/produto.png';

const Sidecart = (props) => {
    return (
        <div id="side-cart" className={`${props.className} bg-white`} data-testid="side-cart">
            <button className="close-cart btn-none" onClick={props.closeCart}>
                <Close className="icon w-5 stroke-black stroke-2"/>
            </button>
            <h3 className="font-semibold text-2xl text-center border-b py-2 px-5">Cart</h3>

            <div className="products mt-2 px-3 overflow-auto h-3/4">
                <div className="product flex border-b py-3">
                    <img src={image} className="w-20 mr-3" alt="Produto" />
                    <div>
                        <h6 className="font-medium">Flecked cotton-blend</h6>
                        <span className="font-medium text-lg text-primary">$175.00</span>
                    </div>
                </div>
                <div className="product flex border-b py-3">
                    <img src={image} className="w-20 mr-3" alt="Produto" />
                    <div>
                        <h6 className="font-medium">Flecked cotton-blend</h6>
                        <span className="font-medium text-lg text-primary">$175.00</span>
                    </div>
                </div>
                <div className="product flex border-b py-3">
                    <img src={image} className="w-20 mr-3" alt="Produto" />
                    <div>
                        <h6 className="font-medium">Flecked cotton-blend</h6>
                        <span className="font-medium text-lg text-primary">$175.00</span>
                    </div>
                </div>
                <div className="product flex border-b py-3">
                    <img src={image} className="w-20 mr-3" alt="Produto" />
                    <div>
                        <h6 className="font-medium">Flecked cotton-blend</h6>
                        <span className="font-medium text-lg text-primary">$175.00</span>
                    </div>
                </div>
                <div className="product flex border-b py-3">
                    <img src={image} className="w-20 mr-3" alt="Produto" />
                    <div>
                        <h6 className="font-medium">Flecked cotton-blend</h6>
                        <span className="font-medium text-lg text-primary">$175.00</span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 w-full px-3">
                <a href="/" className="border bg-white border-primary w-full block text-center text-primary py-1">
                    Carrinho
                </a>
                <a href="/" className="border bg-primary border-primary w-full block text-white text-center py-1 mt-2">
                    Checkout
                </a>
            </div>
        </div>
    )
}

export default Sidecart;
