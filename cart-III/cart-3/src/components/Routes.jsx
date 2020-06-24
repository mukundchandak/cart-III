import React from 'react';
import {Route, Link} from "react-router-dom";
import Home from "./Home"
import About from "./About"

export default function Routes() {
    return (
        <>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
        </>
    )
}
