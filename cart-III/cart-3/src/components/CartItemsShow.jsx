import React from 'react';

const productShow = (props)=>{
    console.log(props)
    return(
        <>
        <div className="card">
            <div>{props.name}</div>
            <div>{props.price}</div>
            <div>{props.qty}</div>
            <img src={props.img} alt= {props.name}/>
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