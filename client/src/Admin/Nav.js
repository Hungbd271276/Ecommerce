import React, { useEffect, useState } from 'react'
import { Signout, isAuthenTicate } from '../auth/Index';
import { useLocation } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
const Nav = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        isAuthenTicate() && setIsLogin(true);
    }, [pathname, isLogin]);




    return (

        <nav className="navbar navbar-dark sticky-top flex-md-nowrap p-0 " style={{ height: '67px', backgroundColor: '#ffffff', zIndex: 1, }}>
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>


            <ul className="navbar-nav px-3">
                {!isLogin && (
                    <ul style={{ listStyle: 'none' }}>
                        <li>
                            <Link to='/signin'> <i className="far fa-user"></i></Link>
                        </li>
                    </ul>
                )}

                {isLogin && (
                    <li>
                        <div className="dropdown">
                            <a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                {isAuthenTicate().user.name}
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" onClick={() => Signout(() => {
                                    setIsLogin(false)
                                    history.push('/')
                                })} style={{ cursor: 'pointer' }}>Signout</a></li>
                            </ul>
                        </div>
                    </li>
                )}
            </ul>
        </nav>

    )
}

export default Nav
