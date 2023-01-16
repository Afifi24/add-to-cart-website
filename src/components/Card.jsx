import React, { useContext } from 'react'
import Carditem from './Carditem'
import styled from 'styled-components'
import {Cartcontext} from './CartContext'
const Card = () => {
  const {items} = useContext(Cartcontext)
  return (
    <Cardstyle>
      {
        items.map((item)=>{
         return(
          <Carditem key={item.image} item={item} />
           ) 
        })
      }
      
    </Cardstyle>
  )
}

export default Card


const Cardstyle = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1.5rem;
place-items: center;

width: 80%;
margin: 7rem auto;
/* media queries */

@media screen and (max-width:1024px) {
grid-template-columns: 1fr 1fr;
}
@media screen and (max-width:700px) {
margin-top: 10rem;
}
@media screen and (max-width:600px) {
grid-template-columns: 1fr ;
}
`