import React from 'react'
import styled from 'styled-components'
import img from '../images/phone1.jpg'
import { useContext } from 'react'
import {Cartcontext} from './CartContext'
const Carditem = ({item}) => {
  const {Addtocart} = useContext(Cartcontext)
  return (
    <Carditemstyle>
        <div className="image"><img src={item.image} alt="" /></div>
         <h2>{item.title}</h2>
         <p>{item.desc}</p>
         <div className="btn-price">
         <button onClick={()=>Addtocart(item)}>Add to cart</button>
          <small>{item.price}</small>
         </div>
    </Carditemstyle>
  )
}

export default Carditem

const Carditemstyle = styled.div`
box-shadow:2px 3px 10px rgba(0,0,0,0.2);
padding: 1rem;
border-radius: 1rem;
h2{
  margin: 0.5rem 0rem;
}
p{
  margin: 0.6rem 0rem;
  line-height: 1.4;
}
button{
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  background-color: #123;
  color:#fff;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition:500ms ;
  &:hover{
   background-color: transparent;
   border-color: #123;
   color: #123;
  }
}
.image{
  border-radius: 0.5rem;
  overflow: hidden;
  img{
    width: 100%;
    transition: 500ms;
    height: 100%;
    object-fit: cover;
    &:hover{
      scale: 1.2;
    }
  }
}
.btn-price{
  display: flex;
  align-items: center;
  justify-content: space-between;
  small{
    font-weight: bold;
    padding-right: 1rem;
    margin-top: 0.5rem;
  }
}
`