import React,{useContext} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Cartcontext} from './CartContext'
const Nav = () => {

  const {items,product} = useContext(Cartcontext)
  return (
    <Navstyle>
      <nav>
        <div className="logo"><Link to='/'>PHONES</Link></div>
        <ul>
        <li><Link className='home' to='/'>Home</Link></li>
        <li> <Link className='home' to='/'>About</Link></li>
         <li><Link className='home' to='/'>Contact</Link></li>
        </ul>
         <Link to='/store' className="cart">
            <AiOutlineShoppingCart/>
            <small>({product.length})</small>
         </Link>
      </nav>
    </Navstyle>
  )
}

export default Nav



const Navstyle = styled.div`
min-height: 5rem;
background-color: #123;
color: #fff;
display: flex;
align-items: center;
padding: 1rem 0rem;
position: fixed;
top: 0;
left: 0;
right: 0;
nav{
   display: flex;
   align-items: center;
   padding: 0rem 2rem;
  justify-content: space-between;
  width: 80%;
  margin: auto;
   
}
.logo{
  a{
    color: #fff;
  }
}
.cart{
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #d5d3d3
}
.home{
  text-decoration: none;
  color: #d5d3d3;
}
ul{
  display: flex;
  align-items: center;
  gap: 3rem;
}
/* media queries */

@media screen and (max-width:700px) {
  nav{
   flex-direction: column;
 
  }
  ul{
    margin: 1.5rem 0rem;
  }
}

`