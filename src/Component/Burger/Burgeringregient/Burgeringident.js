import React , { Component } from 'react';
import './Burgeringident.css';
import PropTypes from 'prop-types';

class BurgerIngridient extends Component {
    render() {
        let ingridient = null;
        switch(this.props.type){
            case('bread-bottom'):
                ingridient = <div className="BreadBottom"></div>
                break;
            case('bread-top'):
                ingridient = (
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                );
                break;
            case('meat'):
                ingridient = <div className="Meat"></div>
                break;
            case('cheese'):
                ingridient = <div className="Cheese"></div>
                break;
            case('bacon'):
                ingridient = <div className="Bacon"></div>
                break;
            case('salad'):
                ingridient = <div className="Salad"></div>
                break;
            default:
                ingridient = null;
    }

    return ingridient;
    }
}

BurgerIngridient.propTypes = {
    type : PropTypes.string.isRequired
};

export default BurgerIngridient;