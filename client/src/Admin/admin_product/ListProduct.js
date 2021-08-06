import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { data } = props;
    const { filterss } = props;
    const [sorts, setSort] = filterss.sort;
    const [searchs, setSearch] = filterss.search;
    const [pages, setPages] = filterss.page;
    const [results, setResults] = filterss.result
    const Ondelete = (id) => {
        const Ondele = window.confirm('Bạn có muốn xóa không');
        if (Ondele) {
            props.onDelete(id);
        }
    }
    return (
        <div >
            <div className="d-flex justify-content-between">
                <div className="">
                    <button type="submit" className="btn btn-primary">  <Link to="/admin/product/add" style={{ color: "#fff" }}>Thêm sản phẩm</Link></button>
                </div>
                <div className="">
                    <select value={sorts} name="category" onChange={e => setSort(e.target.value)}  >
                        <option value=''>All Products</option>
                        <option value='sort=-price'>Price: giá từ cao đến thấp</option>
                        <option value='sort=price'>Price: giá từ thấp đến cao</option>
                    </select>
                </div>
                <div className="">
                    <input type="text" value={searchs} placeholder="Enter your search!" style={{ outline: 'none' }}
                        onChange={e => setSearch(e.target.value)
                        } />
                </div>
                <div>
                    <nav aria-label="..." className="mx-auto container">
                        <ul className="pagination">
                            {

                                results > pages * 9 ? ""
                                    : <li className="page-item ">
                                        <a className="page-link" href="#" tabIndex={-1} onClick={() => setPages(pages - 1)}>1</a>
                                    </li>


                            }
                            {

                                results < pages * 9 ? ""
                                    : <li className="page-item">
                                        <a className="page-link" href="#" onClick={() => setPages(pages + 1)}>2</a>
                                    </li>
                            }
                        </ul>
                    </nav>
                </div>
            </div>

            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Avatar</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Ngày cập nhập</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((productss, index) => (

                            <tr key={productss._id}>
                                <td>{index}</td>
                                <td>{productss.name}</td>
                                <td><img src={`http://localhost:4000/api/product/photo/${productss._id}`} width="80px" height="60px" /></td>
                                <td>{productss.description}</td>
                                <td>{productss.price} VND</td>
                                <td>{productss.createdAt}</td>
                                <td>
                                    <Link to={`/admin/product/${productss._id}`} href="#" className="btn btn-primary bg-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </Link>
                                </td>
                                <td>
                                    <a className="svg btn  btn-danger bg-danger btn-remove" style={{ color: '#fff' }} onClick={() => Ondelete(productss._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 
                                            4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>

                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Product
