import React from 'react'
import { Link } from 'react-router-dom'

const Category = (props) => {
    return (
        <section id="new" className="w-100">
            <div className="row p-0 m-0">
                {
                    props.cates.map(category => (
                        <div className="one col-lg-4 col-md-12 col-12 p-0" key={category._id} >
                            <img className="img-fluid" src={`http://localhost:4000/api/category/photo/${category._id}`} />
                            <div className="details">
                                <h2>{category.name}</h2>
                                <button className="text-uppercase"><Link to={`/category/${category._id}`} style={{ color: '#000', textDecoration: 'none' }}>Shop now</Link></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>

    )
}

export default Category
