import React from 'react';
import './Navigationitems.css';
import NavigationItem from '../Navigationitems/Navigationitem/Navigationitem';


const navigationitems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burgerbuilder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationitems;