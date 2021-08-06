import React from 'react'
import { Link } from 'react-router-dom';
import FilterCategory from './FilterCategory';
import LoadMore from './LoadMore';
const Shop = (props) => {
    const { data } = props;
    // const { products } = data
    // console.log(data);
    return (
        <section id="feature" className="my-5 py-5">
            <div className="container mt-5 py-5">
                <FilterCategory {...props} />
            </div>
            <div className="row mx-auto container">
                {
                    data.map(item => (
                        <div className="product products text-center col-lg-3 col-md-4 col-6" key={item._id}>
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
                    ))
                }
            </div>
            <LoadMore {...props} />
        </section>

    )
}

export default Shop
