import React from 'react';
import './Sidedrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/aux';

const sidedrawer = (props) => {

    
    //if(props.open){
    //     return(
    //         <Aux>
    //             <Backdrop show = {props.open} clicked={props.closed} />
    //             <div className="SideDrawer Open">
    //                 <Logo height="11%" />
    //                 <nav>
    //                     <NavigationItems/>
    //                 </nav>
    //             </div>
    //         </Aux>
    //     )
    // }
    // else{
    //     return(
    //         <Aux>
    //             <Backdrop show = {props.open} clicked={props.closed} />
    //             <div className="SideDrawer Close">
    //                 <Logo height="11%" />
    //                 <nav>
    //                     <NavigationItems/>
    //                 </nav>
    //             </div>
    //         </Aux>
    //     )
    // }

    let attatchedClasses = ["SideDrawer" , "Close"];
    if(props.open){
        //console.log("it's enter");
        attatchedClasses = ["SideDrawer" , "Open"];
    }

    // if(props.closed){
    //     console.log("abcd");
    // }

    //console.log(attatchedClasses.join(' '));

    return (
        <Aux>
            <Backdrop show = {props.open} clicked={props.closed} />
                <div className={attatchedClasses.join(' ')}>
                    <Logo height="11%" />
                    <nav>
                        <NavigationItems/>
                    </nav>
                </div>
        </Aux>
    )
    
};

export default sidedrawer;