import React,{ Component } from 'react';
import CheckoutSummry from '../../Component/Order/CheckoutSummry/CheckoutSummry';
import { Route } from 'react-router-dom';
import ContactData from './Contactdata/Contactdata';
import { connect } from 'react-redux';

class Checkout extends Component {

    // state = {
    //     ingredients : null,
    //     totalprice : 0
    // };

    // componentWillMount = () => {
    //     console.log(this.props);
    //     let price = 0;
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     for(let param of query.entries())
    //     {
    //         if(param[0]==='price')
    //         {
    //             price = param[1];
    //         }else
    //         {
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({ingredients : ingredients , totalprice : price});
    // }
       
    checkoutCancleHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    }

    render(){
        return(
            <div >
                <CheckoutSummry
                    checkoutCancle = {this.checkoutCancleHandler}
                    checkoutContinued = {this.checkoutContinuedHandler}
                    ingredients={this.props.ings}/>

                <Route path={this.props.match.path + '/contact-data'}
                //Component = { ContactData }
                render={ (props) => (<ContactData ingredients = {this.props.ings} totalprice = {this.props.price} {...props}/> )}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings : state.ingridients
    }
}

export default connect(mapStateToProps)(Checkout);