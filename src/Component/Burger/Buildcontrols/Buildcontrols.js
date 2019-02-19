import React from 'react';
import './Buildcontrols.css';
import Buildcontrol from './Buildcontrol/Buildcontrol';

const controls = [
    {lable : 'Salad' , type : 'salad'},
    {lable : 'Cheese' , type : 'cheese'},
    {lable : 'Meat' , type : 'meat'},
    {lable : 'Bacon' , type : 'bacon'}
];

const buildcontrols = (props) => (
    <div className="BuildControls">
    <p>currentPrice: <strong>$ {props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl) => (
            <Buildcontrol
             key={ctrl.lable} 
             lable={ctrl.lable} 
             added={props.ingredientsAdded.bind(this,ctrl.type)}
             deleted={props.ingredientsdeleted.bind(this,ctrl.type)}
             disabled={props.disabled[ctrl.type]}
             />
        ))} 
        <button 
            className="OrderButton" 
            disabled={!props.purchaseable} 
            onClick={props.order}
        >ORDER NOW</button>       
    </div>
);

export default buildcontrols;
