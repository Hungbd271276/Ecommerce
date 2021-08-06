import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const DetaiCategory = (props) => {
    const { data, cates } = props;
    const [checked, setChecked] = React.useState(false);
    const { id } = useParams();
    return (
        <section>
            <div className="container" style={{ marginTop: 200 }}>
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <h2>Danh mục</h2>
                        <ul className="cate" style={{ listStyle: 'none' }}>
                            {
                                cates.map(category => (
                                    <li key={category._id}><Link to={`/category/${category._id}`} style={{ color: '#000' }}>
                                        {category.name}
                                    </Link></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-lg-8 col-md-12 ">
                        <label htmlFor="sort-by">Sort By</label>
                        <select>
                            <option value="title">Name</option>
                            <option value="price">Price</option>
                            <option value="number">Number</option>
                        </select>
                        <div className="row mt-3">
                            {
                                data.filter(product => product.category == id).map(item => {
                                    return (
                                        <div className="product products text-center col-lg-3 col-md-4 col-12" key={item._id}>
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
                    </div>
                </div>
            </div>
        </section>

    )
}
export default DetaiCategory
