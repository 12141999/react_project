import React, { Component } from 'react';
import './App.css';
import Layout from './Component/Layout/layout';
import Burgerbuilder from './Container/Burgerbuilder/Burgerbuilder';
import Checkout from './Container/Checkout/Checkout';
import { Route , Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Burgerbuilder}/>
          <Route path="/checkout" component={Checkout}/> 
        </Switch>
      </Layout>
    )
  }
}

export default App;
