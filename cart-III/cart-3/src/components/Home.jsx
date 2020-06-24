import React from 'react';
import data from './data.json'
import ProductShow from './ProductShow'

function Home(props) {
    // console.log(props)
    const { app } = props
    console.log(app) 

   const handleClick =(id)=>{
       console.log(id)
       let item = data.find(item=>item.id===id)
       app.addTocart(item)
   }

    return (
        <div>
            {data.map(item=><ProductShow key={item.id} {...item} handleClick={handleClick}/>)}
        </div>
    );
}

export default Home;