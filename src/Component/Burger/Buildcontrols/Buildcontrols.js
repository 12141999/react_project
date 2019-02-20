import React from 'react';
import './Buildcontrols.css';
import Buildcontrol from './Buildcontrol/Buildcontrol';

const controls = [
    {lable : 'Salad' , type : 'salad'},
    {lable : 'Bacon' , type : 'bacon'},
    {lable : 'Cheese' , type : 'cheese'},
    {lable : 'Meat' , type : 'meat'}
    
];

const buildcontrols = (props) => (
    <div className="BuildControls">
    <p>currentPrice: <strong>$ {props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl) => (
            <Buildcontrol
             key={ctrl.lable} 
             lable={ctrl.lable} 
             added={()=> props.ingredientsAdded(ctrl.type)}
             deleted={()=> props.ingredientsRemoved(ctrl.type)}
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
