import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { ReactComponent as Bag } from '../svg/bag.svg';
import { ReactComponent as Search } from '../svg/search.svg';
import { ReactComponent as Close } from '../svg/close.svg';
import Sidecart from './Sidecart';

const Header = () => {
    const [showSearch, setShowSearch] = useState("");
    const [showCart, setShowCart] = useState(false);
    const [showMenu, setShowMenu] = useState("");

    const closeCart = () => {
      setShowCart((previousState) => !previousState)
    };

    const openMenu = () => {
        if (showMenu) {
            setShowMenu("");
            document.body.classList.remove('cbp-spmenu-push-toright');
            document.querySelector(".cbp-spmenu").classList.remove('cbp-spmenu-open');
        } else {
            setShowMenu("active");
            document.body.classList.add('cbp-spmenu-push-toright');
            document.querySelector(".cbp-spmenu").classList.add('cbp-spmenu-open');
        }
    };

    return (
        <div id="header">
            <div className="container mx-auto flex flex-row justify-between items-center">
                <div className="flex">
                    <button id="showMenu" onClick={() => openMenu()} className={ showMenu }>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                    <Link to='/'>
                        <img src={logo} alt="Store" />
                    </Link>
                </div>
                <ul className="menu list-none">
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/shop'>
                            Loja
                        </Link>
                    </li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contato</a></li>
                </ul>

                <div className="flex items-center">
                    <ul className="links list-none">
                        <li><a href="/">Entrar</a></li>
                        <li><a href="/">Cadastrar</a></li>
                    </ul>

                    <div className="flex items-center">
                        <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
                            <Bag className="icon w-10 fill-white" />
                            <span className="counter font-bold bg-white px-2 py-1 rounded-full">0</span>
                        </button>
                        <button id="toggle-search" onClick={() => setShowSearch("show")}>
                            <Search className="icon w-8 fill-white" />
                        </button>
                    </div>
                </div>

                <div className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="menu-mobile">
                    <ul>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li><a href="/">Entrar</a></li>
                        <li><a href="/">Cadastrar</a></li>
                        <li>
                            <Link to='/shop'>
                                Loja
                            </Link>
                        </li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contato</a></li>
                    </ul>
                </div>
            </div>

            <div id="search-form" className={ showSearch }>
                <button className="close btn-none" onClick={() => setShowSearch("")}>
                    <Close className="icon w-10 stroke-white stroke-2" />
                </button>

                <div className="flex items-center">
                    <input type="text" className="input" placeholder="Digite o que deseja" />
                    <button className="btn-none" id="btn-search">
                        <Search className="icon w-8" />
                    </button>
                </div>
            </div>

            <Sidecart className={ showCart ? "open" : "" } closeCart={closeCart} />
        </div>
    );
}

export default Header;
