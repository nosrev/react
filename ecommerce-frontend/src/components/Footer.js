import React from 'react';
import logoFooter from '../img/logo-footer.png';
import payment from '../img/payment.png';
import { Link } from 'react-router-dom';
import { ReactComponent as Facebook } from '../svg/facebook.svg';
import { ReactComponent as Twitter } from '../svg/twitter.svg';
import { ReactComponent as Behance } from '../svg/behance.svg';
import { ReactComponent as Dribble } from '../svg/dribble.svg';
import { ReactComponent as Linkedin } from '../svg/linkedin.svg';

const Footer = () => {
    return (
        <div id="footer">
            <div className="container mx-auto">
                <div className="flex flex-wrap md:flex-nowrap">
                    <div className="basis-full md:basis-1/4">
                        <Link to='/'>
                            <img src={logoFooter} alt="Store" className="mx-auto" />
                        </Link>
                        <ul className="socials">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <Facebook className="icon w-5 fill-slate-300" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                    <Twitter className="icon w-5 fill-slate-300" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.behance.net" target="_blank" rel="noreferrer">
                                    <Behance className="icon w-5 fill-slate-300" />
                                </a>
                            </li>
                            <li>
                                <a href="https://dribbble.com" target="_blank" rel="noreferrer">
                                    <Dribble className="icon w-5 fill-slate-300" />
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                    <Linkedin className="icon w-5 fill-slate-300" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="basis-full md:basis-2/4">
                        <ul className="menu">
                            <li>
                                <Link to='/shop'>
                                    Homem
                                </Link>
                            </li>
                            <li>
                                <Link to='/shop'>
                                    Mulher
                                </Link>
                            </li>
                            <li>
                                <a href="/">Lookbook</a>
                            </li>
                            <li>
                                <a href="/">Oferta</a>
                            </li>
                            <li>
                                <a href="/">Blog</a>
                            </li>
                        </ul>
                        <div className="newsletter">
                            <h6>Inscreva-se</h6>
                            <input type="text" className="input" placeholder="Email Address" required />
                            <button className="btn-submit">
                                Enviar
                            </button>
                        </div>
                    </div>
                    <div className="basis-full md:basis-1/4">
                        <h6>Contato</h6>
                        <p className="contact">
                            Av Paulista, 100000<br />
                            Consolação - São Paulo<br />
                            (11) 9999-9999
                        </p>
                        <img src={payment} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
