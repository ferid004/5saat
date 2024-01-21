import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'
function Product() {
    const [product, setproduct] = useState([])
    const alldata = async () => {
        const res = await axios.get('http://localhost:3000/')
        const data = res.data.data
        setproduct(data)
    }
    useEffect(() => {
        alldata()
    }, [])


    return (
        <div id='product'>
            <div className="dev">
                <div className="bigbox">
                    {product && product.map((item) => (
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
            </div>

        </div>
    )
}

export default Product