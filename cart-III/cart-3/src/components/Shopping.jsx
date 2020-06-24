import React, { Component } from 'react';
import Navbar from './Navbar';
import Routes from './Routes'

class Shopping extends Component {
    constructor(props) {
        super(props);
        this.state={
            addTocartArr :[],
            user:[
                {
                    username:"mukund",
                    password:"mukund"
                }
            ],
        }
    }
    
    addTocart = (payload)=>{
        let cartItem = [...this.state.addTocartArr]
        let id = payload.id

        let item = {
            ...payload,
            qty:1
        }
        //find the same item/duplicates 

        let duplicates = false
        for( let i = 0;i<cartItem.length;i++ ){
            if(cartItem[i].id === id){
                duplicates = true
                cartItem[i].qty++
                this.setState({
                    addTocartArr:cartItem
                })
                break
            }
        }
        if(!duplicates){
            this.setState({
                addTocartArr:[...cartItem,item]
            })
        }
    }

    getCartItems = ()=>{
        return this.state.addTocartArr
    }


    render() {
        let appData = {
            addTocart : this.addTocart,
            getCartItems: this.getCartItems   
        }
        return (
            <div>
                <Navbar/>
                <Routes app={appData}/>
                
            </div>
        );
    }
}

export default Shopping;