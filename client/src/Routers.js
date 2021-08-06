import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import AddProduct from './Admin/admin_product/AddProduct';
import Product from './Admin/admin_product/ListProduct';
import Banner from './components/home_pages/banner/Banner';
import Brand from './components/home_pages/brand/Brand';
import Slide from './components/home_pages/slide/Slide';
import Watches from './components/home_pages/watchesProduct/Watches';
import LayoutAdmin from './layout/Admin';
import LayoutWebsite from './layout/Website';
import Category from './components/home_pages/category/Category';
import Clothes from './components/home_pages/clothesProduct/Clothes';
import FeatuteProduct from './components/home_pages/feature_Product/FeatuteProduct';
import Shop from './components/shop/Shop';
import DetailProduct from './components/Detailproduct/Detailproduct';
import Signup from './components/user/Signup';
import Signin from './components/user/Signin';
import EditProduct from './Admin/admin_product/EditProduct';
import DetaiCategory from './components/Detailproduct/DetaiCategory';
import ListCategory from './Admin/admin_category/ListCategory';
import AddCategory from './Admin/admin_category/AddCategory';
import EditCategory from './Admin/admin_category/EditCategory';
import PrivateRouter from './auth/PrivateRouter';
import UserDashboard from './components/user/UserDashboard';
import Cart from './components/Cart/Cart';
import Infomation from './components/user/Infomation';
import Contact from './components/Contact/Contact';
import ListContact from './Admin/admin_contact/ListContact';

const Routers = (props) => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/admin/:path?/:path?">
                        <LayoutAdmin>
                            <Switch>
                                <Route exact path="/admin">
                                    <Redirect to="/admin/dashboard" />
                                </Route>
                                <PrivateRouter exact path="/admin/dashboard">
                                    <UserDashboard />
                                </PrivateRouter>

                                <PrivateRouter exact path="/admin/product">
                                    <Product {...props} />
                                </PrivateRouter>

                                <PrivateRouter exact path="/admin/product/add">
                                    <AddProduct {...props} />
                                </PrivateRouter>

                                <Route exact path="/admin/product/:id">
                                    <EditProduct {...props} />
                                </Route>

                                <PrivateRouter exact path="/admin/category">
                                    <ListCategory {...props} />
                                </PrivateRouter>
                                <PrivateRouter exact path="/admin/category/add">
                                    <AddCategory {...props} />
                                </PrivateRouter>
                                <Route exact path="/admin/category/:id">
                                    <EditCategory {...props} />
                                </Route>

                                <PrivateRouter exact path="/admin/contact">
                                    <ListContact {...props} />
                                </PrivateRouter>
                            </Switch>
                        </LayoutAdmin>
                    </Route>

                    <Route>
                        <LayoutWebsite {...props}>
                            <Switch>
                                <Route exact path="/">
                                    <Slide />
                                    <Brand />
                                    <Category {...props} />
                                    <FeatuteProduct {...props} />
                                    <Banner />
                                    <Clothes {...props} />
                                    <Watches {...props} />
                                </Route>
                                <Route path="/product/:id">
                                    <DetailProduct {...props} />
                                </Route>
                                <Route exact path="/product">
                                    <Shop {...props} />
                                </Route>
                                <Route exact path="/signup">
                                    <Signup />
                                </Route>
                                <Route exact path="/signin">
                                    <Signin />
                                </Route>
                                <Route exact path="/infomation">
                                    <Infomation />
                                </Route>
                                <Route exact path='/category/:id'>
                                    <DetaiCategory {...props} />
                                </Route>
                                <Route exact path='/cart'>
                                    <Cart {...props} />
                                </Route>
                                <Route exact path='/contact'>
                                    <Contact {...props} />
                                </Route>
                            </Switch>
                        </LayoutWebsite>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routers

