import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Cart from "./Cart"

export default function Routes(props) {
    const {app} = props
    return (
        <>
        <Switch>
            <Route path="/" exact render={(props)=><Home {...props} app = {app}/>} />
            <Route path="/about" component={About} />
            <Route path="/cart" render={(props)=><Cart {...props} app = {app}/>}/>
        </Switch>
        </>
    )
}
