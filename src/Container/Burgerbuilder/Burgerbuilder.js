import React , { Component } from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../Component/Burger/Burger';
import BuildControls from '../../Component/Burger/Buildcontrols/Buildcontrols';
import Modal from '../../Component/UI/Modal/Modal';
import OrderSummry from '../../Component/Burger/OrderSummry/OrderSummry';

const INGRIDENTS_PRICE = {
    salad : 0.5,
    cheese : 1.5,
    bacon : 1.0,
    meat : 1.5
};


class Burgerbuilder extends Component {


    state = {
        ingridents : {
            salad : 0,
            meat : 0,
            cheese : 0,
            bacon : 0
        },
        totalPrice : 4,
        purchaseable : false,
        purchasing : false
    }

    updatePurchaseable = (updateingridents) => {
        let sum = 0;
        let Ingridents;
        if(!updateingridents){
            Ingridents = {
                ...this.state.ingridents
            };
        }
        else{
            Ingridents = updateingridents;
        }
        for(let key in Ingridents){
            sum = sum + Ingridents[key];
        }
        //console.log(Ingridents);
        //console.log(sum);
        if(sum > 0){
            this.setState({purchaseable : true});
        }
        else{
            this.setState({purchaseable : false});
        }
        //console.log(this.state.purchaseable);
    }
    

    addingridentHandler = (type) => {
        const oldCount = this.state.ingridents[type];
        const updateCount = oldCount + 1;
        const updateIngrident = {
            ...this.state.ingridents
        }
        updateIngrident[type] = updateCount;

        const addPrice = INGRIDENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + addPrice;
        this.setState({totalPrice : newPrice , ingridents : updateIngrident});
        //console.log(updateIngrident);
        this.updatePurchaseable(updateIngrident);
    }

    purchasingHandler = () => {
        this.setState({purchasing : true});
    }

    purchasingCancleHandler = () => {
        this.setState({purchasing : false});
    }

    purchasingContinueHandler = () => {
        //alert("you are in countinue");
        const queryParams = [];
        for(let i in this.state.ingridents)
        {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingridents[i]));
        }
        queryParams.push('price='+this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname : '/checkout',
            search : '?'+ queryString
        });

    } 
    
    deleteingridentHandler = (type) => {
        let updateCount;
        const oldCount = this.state.ingridents[type];
        if(oldCount >= 1){
            updateCount = oldCount - 1;
        }else{
            updateCount = 0;
        }
            const updateIngrident = {
                ...this.state.ingridents
            }
            updateIngrident[type] = updateCount;

        const deletePrice = INGRIDENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - deletePrice;
        this.setState({totalPrice : newPrice , ingridents : updateIngrident });
        this.updatePurchaseable(updateIngrident);
    }
 

    render(){
        const disableInfo = {
            ...this.state.ingridents
        }
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }


        return (
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed = {this.purchasingCancleHandler}>
                    <OrderSummry 
                    price = {this.state.totalPrice}
                    cancle = {this.purchasingCancleHandler}
                    success = {this.purchasingContinueHandler}
                    ingridients = {this.state.ingridents}/>
                </Modal>
                <Burger ingredients = {this.state.ingridents} />
                {/* <Checkout ingredients = {this.state.ingridents} />  */}
                <BuildControls
                 ingredientsAdded =  {this.addingridentHandler}
                 ingredientsdeleted = {this.deleteingridentHandler}
                 disabled = {disableInfo}
                 price = {this.state.totalPrice}
                 purchaseable = {this.state.purchaseable}    
                 order = {this.purchasingHandler}          
                />
            </Aux>
        )
    }
}

export default Burgerbuilder;

