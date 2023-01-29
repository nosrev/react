import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftColumn = () => {
    useEffect(() => {
        const rangeInput = document.querySelectorAll(".range-input input"),
        priceInput = document.querySelectorAll(".price-input input"),
        range = document.querySelector(".slider-price .progress");
        let priceGap = 1000;
        priceInput.forEach(input =>{
            input.addEventListener("input", e =>{
                let minPrice = parseInt(priceInput[0].value),
                maxPrice = parseInt(priceInput[1].value);

                if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
                    if(e.target.className === "input-min"){
                        rangeInput[0].value = minPrice;
                        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                    }else{
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                    }
                }
            });
        });
        rangeInput.forEach(input =>{
            input.addEventListener("input", e =>{
                let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);
                if((maxVal - minVal) < priceGap){
                    if(e.target.className === "range-min"){
                        rangeInput[0].value = maxVal - priceGap
                    }else{
                        rangeInput[1].value = minVal + priceGap;
                    }
                }else{
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
                    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            });
        });
    });

    const showContent = (e) => {
        if (e.target.nextElementSibling.classList.contains('open')) {
            e.target.children[0].classList.remove('icon-arrow-down');
            e.target.children[0].classList.add('icon-arrow-right');
            e.target.nextElementSibling.classList.remove('open');
        } else {
            e.target.children[0].classList.remove('icon-arrow-right');
            e.target.children[0].classList.add('icon-arrow-down');
            e.target.nextElementSibling.classList.add('open');
        }
    };

    const setActive = (e, type) => {
        const el = document.querySelector(`.${type}-filter ul li button.active`);
        el.classList.remove("active");
        e.target.classList.add('active');
    }

    return (
        <div className="col-left">
            <div className="categories">
                <button onClick={ (e) => showContent(e) }><span className="icon-arrow-down"></span>Categories</button>
                <div className="open">
                    <ul>
                        <li className="active">
                            <Link to='/shop'>
                                Casual<span>01</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/shop'>
                                Corrida<span>15</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/shop'>
                                Treino<span>20</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/shop'>
                                Cachecóis<span>30</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/shop'>
                                Acessórios<span>35</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/shop'>
                                Calçados<span>45</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="price-filter">
                <button onClick={ (e) => showContent(e) }><span className="icon-arrow-down"></span> Preço</button>
                <div className="open">
                    <div className="price-input">
                        <div className="field">
                          <input type="number" className="input-min" defaultValue="2500" />
                        </div>
                        <div className="field">
                          <input type="number" className="input-max" defaultValue="7500" />
                        </div>
                    </div>
                    <div className="slider-price">
                        <div className="progress"></div>
                    </div>
                    <div className="range-input">
                        <input type="range" className="range-min" min="0" max="10000" defaultValue="2500" step="100" />
                        <input type="range" className="range-max" min="0" max="10000" defaultValue="7500" step="100" />
                    </div>
                </div>
            </div>
            <div className="color-filter">
                <button onClick={ (e) => showContent(e) }><span className="icon-arrow-down"></span> Cor</button>
                <div className="open">
                    <ul>
                        <li>
                            <button onClick={ (e) => setActive(e, 'color') } className="active" style={{ background: "#fff" }}></button>
                        </li>
                        <li>
                            <button onClick={ (e) => setActive(e, 'color') } style={{ background: "red" }}></button>
                        </li>
                        <li>
                            <button onClick={ (e) => setActive(e, 'color') } style={{ background: "#ffeb3b" }}></button>
                        </li>
                        <li>
                            <button onClick={ (e) => setActive(e, 'color') } style={{ background: "#4baf4f" }}></button>
                        </li>
                        <li>
                            <button onClick={ (e) => setActive(e, 'color') } style={{ background: "#2195f3" }}></button>
                        </li>
                        <li>
                            <button onClick={ (e) => setActive(e, 'color') } style={{ background: "#9b27af" }}></button>
                        </li>
                        <li>
                            <button onClick={ (e) => setActive(e, 'color') } style={{ background: "#8bc349" }}></button>
                        </li>
                        <li>
                            <button onClick={ (e) => setActive(e, 'color') } style={{ background: "#ff9700" }}></button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="size-filter">
                <button onClick={ (e) => showContent(e) }><span className="icon-arrow-down"></span> Size</button>
                <div className="open">
                    <ul>
                        <li>
                            <button className="active" onClick={ (e) => setActive(e, 'size') }>s</button>
                        </li>
                        <li>
                            <button onClick={ (e) => setActive(e, 'size') }>m</button>
                        </li>
                        <li>
                            <button onClick={ (e) => setActive(e, 'size') }>l</button>
                        </li>
                        <li>
                            <button onClick={ (e) => setActive(e, 'size') }>xl</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LeftColumn;
