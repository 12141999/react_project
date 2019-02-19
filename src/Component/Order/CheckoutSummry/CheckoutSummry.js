import React from 'react';
import Burger from '../../Burger/Burger';
import './CheckoutSummry.css';

const checkoutSummry = (props) => {
    return (
    <div className="CheckoutSummry">
        <h1 style={{textAlign : "center"}}>Hope! this food is healthy for you...</h1>
        <div style={{width:"100%" , margin : "auto"}}>
            <Burger ingredients = {props.ingredients}/>
        </div>
        <div style={{textAlign : "center"}}>
        <button onClick={props.checkoutCancle} className="Button Danger">Cancle</button>
        <button onClick={props.checkoutContinued} className="Button Success">Continue</button>
        </div>
    </div>
    );
}

export default checkoutSummry;