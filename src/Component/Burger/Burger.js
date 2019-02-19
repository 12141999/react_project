import React from 'react';
import '../Burger/Burgeringregient/Burgeringident.css';
import Burgeringident from '../Burger/Burgeringregient/Burgeringident';
import './Burger.css';


const burger = (props) => {

    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <Burgeringident key={igKey + i} type={igKey} />;
            } );
        } ).reduce((arr,el)=>{
            return arr.concat(el);
        } , []);
        if(transformedIngredients.length===0){
            transformedIngredients = <p>Please, add some ingredients!!!</p>
        }


    return(
        <div className="Burger">
            <Burgeringident type="bread-top"/>
            {/* <Burgeringident type="cheese"/>
            <Burgeringident type="meat"/>
            <Burgeringident type="salad"/>
            <Burgeringident type="bacon"/> */}

            {transformedIngredients}
            <Burgeringident type="bread-bottom"/>
        </div>
    );
};

export default burger;