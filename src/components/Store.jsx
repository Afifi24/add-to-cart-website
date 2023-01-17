import React,{useContext, useState} from 'react'
import styled from 'styled-components'
import {Cartcontext} from './CartContext'
const Store = () => {


  const {product} = useContext(Cartcontext)
  console.log(`here is a product ${product.length}`,product)

  // counter

  const [count,setCount] =useState(1)
  const Addcount = ()=>{
    setCount(prev=>prev+1)
  }
  const Minuscount = ()=>{
    setCount(prev=>prev-1)
  }
  return (
    <Storestyle>
        <div className="header">
          <ul>
            <li>Image</li>
            <li>Name</li>
            <li>Price</li>
            <li>Amount</li>
            
          </ul>
        </div>
        <div className="content">
          {product.map(item=>{
            return(
           <div key={item.items.image} className="item">
             <div className="image"><img src={item.items.image} alt="" /></div>
       
            <div>
            <p>{item.items.title}</p>
            </div>
           <div><p>{item.items.price}</p>
           </div>
           <div className='count'>
            {/* <button onClick={Minuscount}>-</button> */}
            <p>{item.items.amount}</p>
            {/* <button onClick={Addcount}>+</button> */}
           </div>
           </div>
            )
          })}
        </div>
        

    </Storestyle>
  )
}

export default Store


const Storestyle = styled.div`
padding: 3rem 0rem;
width: 80%;
margin: auto;
padding-top: 7rem;
.header{
  ul{
 display: flex;
 gap: 2rem;
 margin-bottom: 1rem;
 list-style: none;
 justify-content: space-between;
 font-weight: bold;
 border-bottom: 2px solid #000;
 padding-bottom: 1rem;
  }
}
.content{
  display: flex;
  /* align-items: center;
  justify-content: space-between; */
  margin-bottom: 1rem;
  flex-direction: column;
}
.image{
  width: 6rem;
  img{
    width: 100%;
  }
  
}
.item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom:1px solid #000 ;
  margin-bottom: 1rem;
  
}

/* media queries */

@media screen and (max-width:700px) {
padding-top: 10rem;
margin-bottom: 3rem;

}
.count{
  display: flex;
  align-items: center;
  gap: 0.5rem;
  button{
    width: 2rem;
    padding: 0.3rem 0;
    background-color: #fff;
    /* color: #fff; */
    border: none;
    cursor: pointer;
    border-radius: 0.3rem;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
  }
}
`