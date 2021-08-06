import React from 'react'
import { Link } from 'react-router-dom'
const ProductFea = (props) => {
    const { data } = props;
    return (
        <>
            <div className="row mx-auto container-fluid">

                {
                    data.filter(product => product.category == '6065cc9bc19ef6710ca07a3f').slice(4).map(products => {
                        return (
                            <div className="product text-center col-lg-3 col-md-6 col-6" key={products._id} >
                                <img className="img-fluid mb-3" src={`http://localhost:4000/api/product/photo/${products._id}`} />
                                <div className="star">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <h5 className="p-name" >{products.name}</h5>
                                <h4 className="p-price" >{products.price}$</h4>
                                <button className="buy-btn" ><Link to={`/product/${products._id}`}>Buy Now</Link></button>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default ProductFea
