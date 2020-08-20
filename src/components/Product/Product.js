import React, { useState } from 'react';
import './Product.scss';

function Product(props) {

    const [selected, setSelected] = useState(false);
    const [mouseState, setMouseState] = useState(false);

    const selectProduct = () => {
        if (!props.disabled) {
            setSelected(!selected);
            setMouseState(false);
        }
    }

    return (
        <div>
            <div
                className={"product" + (selected ? " product--selected" : "") + (props.disabled ? " product--disabled" : "")}
                onClick={selectProduct}
                onMouseEnter={() => setMouseState(selected)}
                onMouseLeave={() => setMouseState(false)}
            >
                <div className="product__slogan">
                    {selected && mouseState ? <span>Коте не одобряет?</span> : "Сказочное заморское явство"}
                </div>

                <div className="product__name">{props.name}</div>
                <div className="product__conteins">{props.conteins}</div>
                <div className="product__description">{props.description.map((item, index) => <div key={index}>{item}</div>)}</div>
                <div className="product__weight">
                    <div className="product__weight-counter">{props.weight}</div>
                    <div className="product__weight-units">КГ</div>
                </div>
            </div>
            <div className="product-fab">
                {props.disabled ?
                    <span className="product-fab__over">Печалька, {props.conteins} закончился.</span>
                    :
                    selected ?
                        props.selected
                        :
                        <>Чего сидишь? Порадуй котэ, <span className="product-fab__link" onClick={selectProduct}>купи</span><span>.</span></>
                }
            </div>
        </div>
    );
}

export default Product;
