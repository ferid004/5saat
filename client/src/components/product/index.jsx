import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'
import { useWish } from '../../context/useWishContext'
import { usebasket } from '../../context/useBasketContext'
import { Link } from 'react-router-dom'
function Product() {

    const { wish, setwish, handlewish } = useWish()
    const { basket, setbasket, handlebasket, basketdelete, artir, azalt } = usebasket()

    ////
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
                                <Link to={`/detail/${item._id}`}>
                                    <div className="imgbox"><img src={item.src} alt="" /></div>
                                </Link>
                                <div className="text">
                                    <div className="name">{item.name}</div>
                                    <div className="info">{item.info}</div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="price">$ {item.price}</div>
                                <div className="icon">
                                    <i onClick={() => handlebasket(item)} className="fa-solid fa-basket-shopping"></i>
                                    <i onClick={() => handlewish(item)} className="fa-solid fa-heart"></i>
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