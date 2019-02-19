import React from 'react';
import Aux from '../../../hoc/aux';
import './OrderSummry.css';
//import Button from '../../UI/Button/Button';


const OrderSummry = (props) => {
    const OrderSummry = Object.keys(props.ingridients).map((igkey) => {
        return (
            <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span> : {props.ingridients[igkey]}</li>
        )
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingridients:</p>
            <ul>
                {OrderSummry}
            </ul>
            <p><strong>Total Price : {props.price}</strong></p>
            <p>continue to checkout?</p>
            <button className="Button Danger" onClick={props.cancle}>Cancle</button>
            <button className="Button Success" onClick={props.success}>Continue</button>
        </Aux>
    );
};

export default OrderSummry;