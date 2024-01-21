import React from 'react'
import './index.scss'
import { useWish } from '../../context/useWishContext'
function Wish() {
  const { wish, setwish, handlewish }=useWish()
  
  return (
    <div>
      {wish && wish.map((item)=>(
         <div className="box" key={item._id}>
         <div className="left">
             <div className="imgbox"><img src={item.src} alt="" /></div>
             <div className="text">
                 <div className="name">{item.name}</div>
                 <div className="info">{item.info}</div>
             </div>
         </div>
         <div className="right">
             <div className="price">$ {item.price}</div>
             <div className="icon">
                 <i className="fa-solid fa-basket-shopping"></i>
                 <i className="fa-solid fa-heart"></i>
             </div>

         </div>
     </div>
      ))}
    </div>
  )
}

export default Wish