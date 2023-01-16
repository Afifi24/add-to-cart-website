import React,{useContext} from 'react'
import styled from 'styled-components'
import {Cartcontext} from './CartContext'
const Store = () => {


  const {product} = useContext(Cartcontext)
  console.log(`here is a product ${product.length}`,product)
  return (
    <Storestyle>
        <div className="header">
          <ul>
            <li>image</li>
            <li>Name</li>
            {/* <li>title</li> */}
            <li>price</li>
            
          </ul>
        </div>
        <div className="content">
          {product.map(item=>{
            return(
           <div key={item.items.image} className="item">
             <div className="image"><img src={item.items.image} alt="" /></div>
           <p>{item.items.title}</p>
           <p>{item.items.price}</p>
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

`