import React from 'react';

const productShow = (props)=>{
    // const { app } = props
    console.log(props)

    return(
        <>
        <div className="card">
            <div>{props.name}</div>
            <div>{props.price}</div>
            <img src={props.img} alt= {props.name}/>
            <button onClick={()=>props.handleClick(props.id)}>Add to cart</button>
        </div>
        <style jsx>
            {
                `.card{
                    border:1px solid black;
                    width:250px;
                    margin:10px
                }`
            }
        </style>
        </>
    )
}

export default productShow
