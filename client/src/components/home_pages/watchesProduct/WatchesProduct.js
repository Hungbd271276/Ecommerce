import React from 'react'
import { Link } from 'react-router-dom'
const WatchesProduct = (props) => {
    const { data } = props
    return (
        <div className="row mx-auto container-fluid" >
            {
                data.filter(product => product.category == '60b59446ed78092fcc070a44').slice(0, 4).map(item => {
                    return (
                        <div className="product text-center col-lg-3 col-md-4 col-6" key={item._id}>
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

export default WatchesProduct
