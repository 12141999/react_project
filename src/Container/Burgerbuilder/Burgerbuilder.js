import React , { Component } from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../Component/Burger/Burger';
import BuildControls from '../../Component/Burger/Buildcontrols/Buildcontrols';
import Modal from '../../Component/UI/Modal/Modal';
import OrderSummry from '../../Component/Burger/OrderSummry/OrderSummry';
import * as actionTypes from '../../store/action';
import { connect } from 'react-redux';


class Burgerbuilder extends Component {


    state = {
        purchasing : false
    }

    updatePurchaseable = (updateingridients) => {
        const sum = Object.keys(updateingridients).map(igKey => {
            return updateingridients[igKey];
        }).reduce( (sum,el) => {
            return sum + el;
        } , 0);
        return sum >0;
    }
    

    // addingridentHandler = (type) => {
    //     const oldCount = this.state.ingridients[type];
    //     const updateCount = oldCount + 1;
    //     const updateIngrident = {
    //         ...this.state.ingridients
    //     }
    //     updateIngrident[type] = updateCount;

    //     const addPrice = INGRIDENTS_PRICE[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + addPrice;
    //     this.setState({totalPrice : newPrice , ingridients : updateIngrident});
    //     //console.log(updateIngrident);
    //     this.updatePurchaseable(updateIngrident);
    // }

    purchasingHandler = () => {
        this.setState({purchasing : true});
    }

    purchasingCancleHandler = () => {
        this.setState({purchasing : false});
    }

    // purchasingContinueHandler = () => {
    //     //alert("you are in countinue");
    //     const queryParams = [];
    //     for(let i in this.state.ingridients)
    //     {
    //         queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingridents[i]));
    //     }
    //     queryParams.push('price='+this.state.totalPrice);
    //     const queryString = queryParams.join('&');
    //     this.props.history.push({
    //         pathname : '/checkout',
    //         search : '?'+ queryString
    //     });

    // }
    
    purchasingContinueHandler = () => {
        this.props.history.push( '/checkout');
    }
    
    // deleteingridentHandler = (type) => {
    //     let updateCount;
    //     const oldCount = this.state.ingridients[type];
    //     if(oldCount >= 1){
    //         updateCount = oldCount - 1;
    //     }else{
    //         updateCount = 0;
    //     }
    //         const updateIngrident = {
    //             ...this.state.ingridients
    //         }
    //         updateIngrident[type] = updateCount;

    //     const deletePrice = INGRIDENTS_PRICE[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - deletePrice;
    //     this.setState({totalPrice : newPrice , ingridients : updateIngrident });
    //     this.updatePurchaseable(updateIngrident);
    // }
 

    render(){
        const disableInfo = {
            ...this.props.ings
        }
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }


        return (
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed = {this.purchasingCancleHandler}>
                    <OrderSummry 
                    price = {this.props.price}
                    cancle = {this.purchasingCancleHandler}
                    success = {this.purchasingContinueHandler}
                    ingridients = {this.props.ings}/>
                </Modal>
                <Burger ingredients = { this.props.ings } />
                {/* <Checkout ingredients = {this.state.ingridients} />  */}
                <BuildControls
                 ingredientsAdded =  {this.props.oningredientsAdded}
                 ingredientsRemoved = {this.props.oningredientsRemoved}
                 disabled = {disableInfo}
                 price = {this.props.price}
                 purchaseable = {this.updatePurchaseable(this.props.ings)}    
                 order = {this.purchasingHandler}          
                />
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings : state.ingridients,
        price : state.totalPrice
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        oningredientsAdded: (ingName) => dispatch({ type : actionTypes.ADD_INGRIDIENT , ingridientName : ingName}),
        oningredientsRemoved: (ingName) => dispatch({ type : actionTypes.REMOVE_INGRIDIENT , ingridientName : ingName}) 
    }
}

export default connect(mapStateToProps , mapDisaptchToProps)(Burgerbuilder);

