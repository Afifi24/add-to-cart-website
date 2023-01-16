import React,{useContext,useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Cartcontext} from './CartContext'
import {AiOutlineBars} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'
const Nav = () => {
  const [show,setShow] = useState(false)
  const {items,product} = useContext(Cartcontext)
  const ShowClose = ()=>{
    setShow(!show)
  }
  return (
    <Navstyle>
      <nav>
        <div className="logo"><Link to='/'>PHONES</Link></div>
        <div onClick={ShowClose} className="nav-icon">
        {show ?<FaTimes/>:<AiOutlineBars/>}
        </div>
        <ul className={show? 'active':''}>
        <li><Link className='home' onClick={()=>setShow(false)} to='/'>Home</Link></li>
        <li> <Link className='home'onClick={()=>setShow(false)}  to='/'>About</Link></li>
         <li><Link className='home'onClick={()=>setShow(false)}  to='/'>Contact</Link></li>
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
z-index: 10;
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
.nav-icon{
  display: none;
  position: absolute;
  right: 1rem;
  z-index: 20;
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
   /* flex-direction: column; */
  
  }
  ul{
    margin: 1.5rem 0rem;
    transform: translateX(-200%);
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #123;
    flex-direction: column;
    top: 0;
    margin:0 auto;
    transition: 500ms;
    padding: 8rem 0rem;
   gap: 4rem;
  }
  .nav-icon{
    display: flex;
    font-size: 2rem;
    cursor: pointer;
  }
  .active{
    transform: translate(-19%);
  
  }
}
`