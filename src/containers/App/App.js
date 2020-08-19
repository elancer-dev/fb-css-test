import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Product from '../../components/Product/Product';

function App() {
    return (
        <main className="app__container">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center pb-3 app__title">Ты сегодня покормил кота?</div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-xl-4 app__product">
                        <Product
                            name="Нямушка"
                            conteins="с фуа-гра"
                            description={[<><span>10</span> порций</>, "мышь в подарок"]}
                            weight="0,5"
                            selected="Печень утки разварная с артишоками."
                        />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 app__product">
                        <Product
                            name="Нямушка"
                            conteins="с рыбой"
                            description={[<><span>40</span> порций</>, <><span>2</span> мыши в подарок</>]}
                            weight="2"
                            selected="Головы щучьи с чесноком да свежайшая сёмгушка."
                        />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 app__product">
                        <Product
                            name="Нямушка"
                            conteins="с курой"
                            description={[<><span>100</span> порций</>, <><span>5</span> мышей в подарок</>, "заказчик доволен"]}
                            weight="5"
                            selected="Филе из цыплят с трюфелями в бульоне."
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
