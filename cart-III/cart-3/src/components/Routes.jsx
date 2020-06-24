import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Cart from "./Cart"
import Login from './Login';

export default function Routes(props) {
    const {app} = props
    return (
        <>
        <Switch>
            <Route path="/" exact render={(props)=><Home {...props} app = {app}/>} />
            <Route path="/about" component={About} />
            <Route path="/login" render={(props)=><Login {...props} app = {app}/>} />
            <Route path="/cart" render={(props)=><Cart {...props} app = {app}/>}/>
        </Switch>
        </>
    )
}
