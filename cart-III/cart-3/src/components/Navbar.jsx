import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div style={{display: "flex", color: 'grey', margin: "10px", padding: "10px"}}>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/cart">Cart</Link>
                    </li>
                </ul>
                {/* <Link to="/">{Login}</Link>
                <br/>
                <Link to="/">{Home}</Link>
                <br/> */}
            </div>
        )
    }
}


export default Navbar