import React,{useState} from 'react'
import { createContext } from 'react'
import phone1 from '../images/phone1.jpg'
import phone2 from '../images/phone2.jpg'
import phone3 from '../images/phone3.jpg'
import phone4 from '../images/phone4.jpg'
import phone5 from '../images/phone5.jpg'
import phone6 from '../images/phone6.jpg'

export const Cartcontext = createContext()



export const Providercart = ({children}) => {
 const [items,setItems] = useState([
    {
        image:phone1,
        title:'apple',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur distinctio, debitis soluta suscipit nisi!',
        price:'$70',
    },
   
    {
        image:phone2,
        title:'apple',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur distinctio, debitis soluta suscipit nisi!',
        price:'$50',

    },
    {
        image:phone3,
        title:'apple',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur distinctio, debitis soluta suscipit nisi!',
        price:'$110',

    },
    {
        image:phone4,
        title:'apple',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur distinctio, debitis soluta suscipit nisi!',
        price:'$200',

    },
    {
        image:phone5,
        title:'apple',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur distinctio, debitis soluta suscipit nisi!',
        price:'$700',
        
    },
    {
        image:phone6,
        title:'apple',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur distinctio, debitis soluta suscipit nisi!',
        price:'$1070',

    },
 ])
 const [product,setProduct] = useState([])
 const Addtocart = (items)=>{
    setProduct(prev=>[...prev,{items}])

 }

  return (
      <Cartcontext.Provider value={{items,Addtocart,product}}>

       {children}

      </Cartcontext.Provider>
  )
}
