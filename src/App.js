import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import ProductDetail from './components/products/ProductDetail';
import Products from './components/products/Products';
import { logout } from './actions/auth'

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Route exact path='/' component={Login}/>
                    <section className='container'>
                        <Switch>
                            <Route exact path='/products' component={Products}/>
                            <Route exact path='/products/:id' component={ProductDetail}/>
                        </Switch>
                    </section>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;
