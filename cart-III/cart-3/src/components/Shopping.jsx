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
            isAuthenticated: false
        }
    }
    
    addTocart = (payload)=>{

        if(!this.authenticate()){
            alert('pls log in')
        }

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

    authenticate = () => {
        if(this.state.isAuthenticated){
            return true;
        }
        else{
            return false;
        }
    }

    checkUser = ({username, password}) => {
        let flag = false
        this.state.user.forEach(item => {
            if(item.username === username && item.password === password){
                flag = true
            }
        })
        this.setState({
            isAuthenticated: true
        })
        if(flag){
            alert('user logged in');
        }
        return flag
    }


    render() {
        let appData = {
            addTocart : this.addTocart,
            getCartItems: this.getCartItems,
            checkUser: this.checkUser,
            authenticate: this.authenticate
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