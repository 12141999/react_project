import React , { Component } from 'react';
import Aux from '../../hoc/aux';
import   './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {

    state = {
        showSideDrawer : false
    }

    closedSideDrawerHandler = () => {
        this.setState({ showSideDrawer : false });
    }

    openSideDrawerHandler = () => {
        this.setState({ showSideDrawer : true });
    }

    render() {
        return (
            <Aux>
                <Toolbar clicked={this.openSideDrawerHandler}/>
                <SideDrawer 
                open={this.state.showSideDrawer}
                closed={this.closedSideDrawerHandler} />
                <main className = "Content" >
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 

export default Layout;