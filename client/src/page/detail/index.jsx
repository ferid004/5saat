import React, { useEffect, useState } from 'react'
import './index.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Detail() {
  const [product, setproduct] = useState([])
  const{id}=useParams()
  const alldata = async () => {
      const res = await axios.get(`http://localhost:3000/${id}`)
      const data = res.data.data
      setproduct(data)
  }
  useEffect(() => {
      alldata()
  }, [])
  
  return (
    <div>
      <img src={product.src} alt="" />
    </div>
  )
}

export default Detail