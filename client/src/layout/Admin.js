import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../Admin/Nav'

const LayoutAdmin = (props) => {

    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block sidebar " style={{ backgroundColor: '#313a46', position: 'fixed', left: '0', top: '0', height: '100%', zIndex: 2, overflowY: 'auto' }}>
                        <div className="sidebar-sticky">
                            <img src="../img/logo2.png" style={{ margin: '12px 0px', width: '140px', height: '55px' }} />
                            <ul className="nav flex-column" style={{ padding: '20px 2px', lineHeight: '49px' }}>
                                <li className="nav-item">
                                    <NavLink exact to="/admin/dashboard" activeClassName="active" style={{ color: '#fff' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                                            </path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                        <span data-feather="home" />
                                            DashBoard
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/admin/product" activeClassName="active" style={{ color: '#fff' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z">
                                            </path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                        <span data-feather="shopping-cart" />
                                     Products
                                   </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/admin/category" activeClassName="active" style={{ color: '#fff' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                        <span data-feather="users" />
                                    Category
                                  </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/admin/contact" activeClassName="active" style={{ color: '#fff' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline>
                                            <polyline points="2 12 12 17 22 12"></polyline></svg>
                                        <span data-feather="users" />
                                    Contact
                                  </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group mr-2">
                                    <button className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    <span data-feather="calendar" />
                    This week
                    </button>
                            </div>
                        </div>
                        <div className="table">
                            {props.children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin

