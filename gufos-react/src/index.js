// BIBLIOTECAS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//COMPONENTES
import App from './pages/Home/App.js';
import Categorias from './pages/Categorias/Categorias.js';
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado.js';

//ROTAS - elementos pegos
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/categorias' component={Categorias} />
                <Route component={NaoEncontrado} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
