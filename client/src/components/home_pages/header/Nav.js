import React, { useEffect, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Signout, isAuthenTicate } from '../../../auth/Index';
import { useLocation } from 'react-router-dom';
const Nav = (props) => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogin, setIsLogin] = useState(false);
    const { values } = props;
    const [cart] = values.cart;
    // search
    const { filterss } = props;
    const [searchs, setSearch] = filterss.search


    useEffect(() => {
        isAuthenTicate() && setIsLogin(true);
    }, [pathname, isLogin]);
    // const acount = JSON.parse(localStorage.getItem('jwt') || '{}');
    return (
        <ul className="navbar-nav ml-auto" >
            <li className="nav-item">
                <NavLink to="/" exact activeClassName="active" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/product" activeClassName="active" className="nav-link" >Shop</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/blog" className="nav-link" >Blog</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link" >About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" className="nav-link" >Contact Us</NavLink>
            </li>
            <li className="nav-item">
                <div className="dropdown">
                    <a className="dropdown-toggles" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fal fa-search" />
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ background: 'none', border: 'none', margin: '10px 0px' }}>
                        <li><input type="text" value={searchs} placeholder="Enter your search!"
                            onChange={e => setSearch(e.target.value)
                            } /></li>
                    </ul>
                </div>
            </li>
            <li className="Cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart" style={{ color: '#000' }}><i className="fal fa-shopping-bag" /></Link>
            </li>
            <li>
                {!isLogin && (
                    <ul style={{ listStyle: 'none' }}>
                        <li>
                            <Link to='/signin'> <i className="far fa-user"></i></Link>
                        </li>
                    </ul>
                )}

                {isLogin && (
                    <ul style={{ listStyle: 'none' }}>
                        <li>
                            <div className="dropdown">
                                <a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" >
                                    {isAuthenTicate().user.name}
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><Link to='/infomation' className="dropdown-item" style={{ cursor: 'pointer' }}>Infomation</Link></li>
                                    <li><a className="dropdown-item" onClick={() => Signout(() => {
                                        setIsLogin(false)
                                        history.push('/')
                                    })} style={{ cursor: 'pointer' }}>Signout</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                )}
            </li>
        </ul>

    )
}

export default Nav
