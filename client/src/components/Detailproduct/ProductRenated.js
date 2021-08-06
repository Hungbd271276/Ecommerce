import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import ProductAPI from '../../API/ProductAPI'
const ProductRenated = (props) => {
    const { data } = props;
    const { id } = useParams();
    const datass = data.find(item => item._id === id);

    return (
        <div className="row mx-auto container">
            {
                data.filter(product => product.category == datass.category && product._id !== datass._id).slice(0, 4).map(item => {
                    return (
                        <div className="product text-center col-lg-3 col-md-4 col-12" key={item._id}>
                            <img className="img-fluid mb-3" src={`http://localhost:4000/api/product/photo/${item._id}`} />
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                            <h5 className="p-name">{item.name}</h5>
                            <h4 className="p-price">{item.price}$</h4>
                            <button className="buy-btn" ><Link to={`/product/${item._id}`}>Buy Now</Link></button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductRenated
