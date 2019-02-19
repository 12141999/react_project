import React , { Component } from 'react';
import Input from '../../../Component/UI/Input/Input';
import './Contactdata.css';

class ContactData extends Component {
    state = {
        orderForm: {
        name : {
            elementType : 'input',
            elementConfig :{
                type : 'text',
                placeholder : 'Your Name'
            },
            value : ''
        },
        email : {
            elementType : 'input',
            elementConfig :{
                type : 'email',
                placeholder : 'Your E-mail'
            },
            value : ''
        },
        street : {
            elementType : 'input',
            elementConfig :{
                type : 'text',
                placeholder : 'Street'
            },
            value : ''
        },
        zipcode : {
            elementType : 'input',
            elementConfig :{
                type : 'text',
                placeholder : 'Your Zip-Code'
            }, 
            value : ''
        },
        country : {
            elementType : 'input',
            elementConfig :{
                type : 'text',
                placeholder : 'Your Country'
            },
            value : ''
        },
        deliveryMethod :{
            elementType : 'select',
            elementConfig :{
                options : [{value : 'fastest' , displayValue : 'Fastest'},
                           {value : 'cheapest' , displayValue : 'Cheapest'}
                        ]
            },
            value : ''
        }
      }
    }

    orderHandler = (event) => {
        event.preventDefault(); 
        console.log(this.props.ingredients);
        console.log(this.props.totalprice);
        this.props.history.push("/");
    }

    orderChangeHandler = (event , id) => {
        const updateForm = {...this.state.orderForm};
        const updatedFormElement = {...this.state.orderForm[id]};
        updatedFormElement.value = event.target.value;
        updateForm[id] = updatedFormElement;
        this.setState({orderForm : updateForm});
    }

    render() {
        const formkeyElements = [];
        for(let key in this.state.orderForm){
            formkeyElements.push({
                id : key,
                Config : this.state.orderForm[key]
            });
        }

        return(
            <div className="ContactData">
                <h4>Enter your Contact-data</h4>
                {formkeyElements.map(formkey => (
                    <Input 
                        key= {formkey.id}
                        elementType={formkey.Config.elementType}
                        elementConfig = {formkey.Config.elementConfig}
                        value= {formkey.Config.value}
                        changed = {(event) => (this.orderChangeHandler(event,formkey.id))}
                    />
                ))}
                <button className="Button Success" onClick={this.orderHandler}>Order</button>
            </div>
        );
    }
}

export default ContactData;