import React , { Component } from 'react';
import './Burgeringident.css';
import PropTypes from 'prop-types';

class BurgerIngrident extends Component {
    render() {
        let ingrident = null;
        switch(this.props.type){
            case('bread-bottom'):
                ingrident = <div className="BreadBottom"></div>
                break;
            case('bread-top'):
                ingrident = (
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                );
                break;
            case('meat'):
                ingrident = <div className="Meat"></div>
                break;
            case('cheese'):
                ingrident = <div className="Cheese"></div>
                break;
            case('bacon'):
                ingrident = <div className="Bacon"></div>
                break;
            case('salad'):
                ingrident = <div className="Salad"></div>
                break;
            default:
                ingrident = null;
    }

    return ingrident;
    }
}

BurgerIngrident.propTypes = {
    type : PropTypes.string.isRequired
};

export default BurgerIngrident;