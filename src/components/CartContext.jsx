import React,{useState} from 'react'
import { createContext } from 'react'
import phone1 from '../images/phone11.jpg'
import phone2 from '../images/phone2.jpg'
import phone3 from '../images/phone3.jpg'
import phone4 from '../images/phone4.jpg'
import phone5 from '../images/phone5.jpg'
import phone6 from '../images/phone6.jpg'
import swal from 'sweetalert';

export const Cartcontext = createContext()



export const Providercart = ({children}) => {
 const [items,setItems] = useState([
    {   
        id:1,
        image:phone4,
        title:'Apple',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur distinctio, debitis soluta suscipit nisi!',
        price:'$70',
        amount:1,
    },
   
    {
        id:2,
        image:phone2,
        title:'Sunmsung',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur distinctio, debitis soluta suscipit nisi!',
        price:'$50',
        amount:1,
        
    },
    {   
        id:3,
        image:phone1,
        title:'Huwaei',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur distinctio, debitis soluta suscipit nisi!',
        price:'$110',
        amount:1,
        
    },
    {
        id:4,
        image:phone4,
        title:'Shawmi',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur distinctio, debitis soluta suscipit nisi!',
        price:'$200',
        amount:1,


    },
    {

        id:5,
        image:phone5,
        title:'Nokia',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur distinctio, debitis soluta suscipit nisi!',
        price:'$700',
        amount:1,

        
    },
    {   
        id:6,
        image:phone6,
        title:'Infinix',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur distinctio, debitis soluta suscipit nisi!',
        price:'$1070',
        amount:1,


    },
 ])
 const [product,setProduct] = useState([])
 const Addtocart = (items)=>{
    setProduct(prev=>[...prev,{items}])
  
    swal({
        title: "Good job!",
        text: "Your item has been updated!",
        icon: "success",
        button: "ok",
      });

 }

  return (
      <Cartcontext.Provider value={{items,Addtocart,product}}>

       {children}

      </Cartcontext.Provider>
  )
}
