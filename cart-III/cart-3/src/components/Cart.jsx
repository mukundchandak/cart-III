import React from 'react';
import CartItemsShow from './CartItemsShow'

const Cart = (props)=>{
    const { app } = props
    const cartItems  = app.getCartItems()
    console.log(cartItems)
    return (
        <div>
            {cartItems.map(item=><CartItemsShow key={item.id} {...item}/>)}
        </div>
    );
}

export default Cart;