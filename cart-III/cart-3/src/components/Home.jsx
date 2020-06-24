import React, { Component } from 'react';
import data from "./data.json"

export default class Home extends Component {

    handleClick = () => {
        
    }

    render() {
        return (
            <div>
                Home
                {data && data.map(item => (
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                        <img src={item.img} alt="img"/>
                        <div><button onClick={this.handleClick}>Add to Cart</button></div>
                    </div>
                ))}
            </div>
        )
    }
}
