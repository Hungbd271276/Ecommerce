import React from 'react'
import Foot from '../footer/Foot'
const Footer = () => {
    return (
        <footer className="mt-5 py-5">
            <div className="row container mx-auto pt-5" >
                <div className="footer-one col-lg-3 col-md-6 col-12">
                    <img src="../img/logo2.png" />
                    <p className="pt-3">Fringilla urna porttitor rhoncus dolor purus luctus venenatis lectus magna
                    fringilla diam maecenas ultricies mi eget mauris.
            </p>
                </div>
                <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
                    <h5 className="pb-2">Fratured</h5>
                    <ul className="text-uppercase list-unstyled">
                        <li><a href="#">men</a></li>
                        <li><a href="#">women</a></li>
                        <li><a href="#">boys</a></li>
                        <li><a href="#">girls</a></li>
                        <li><a href="#">new arrivals</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">cloths</a></li>
                    </ul>
                </div>
                <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
                    <h5 className="pb-2">Contact Us</h5>
                    <div>
                        <h6 className="text-uppercase">Address</h6>
                        <p>123 STREET NAME, CITY, US</p>
                    </div>
                    <div>
                        <h6 className="text-uppercase">Address</h6>
                        <p>(123) 456-7890</p>
                    </div>
                    <div>
                        <h6 className="text-uppercase">Email</h6>
                        <p>Hungbdph10926@fpt.edu.vn</p>
                    </div>
                </div>
                <div className="footer-one col-lg-3 col-md-6 col-12">
                    <h5 className="pb-2">Instagram</h5>
                    <div className="row">
                        <img className="img-fluid w-25 h-100 m-2" src="../img/insta/1.jpg" />
                        <img className="img-fluid w-25 h-100 m-2" src="../img/insta/2.jpg" />
                        <img className="img-fluid w-25 h-100 m-2" src="../img/insta/3.jpg" />
                        <img className="img-fluid w-25 h-100 m-2" src="../img/insta/4.jpg" />
                        <img className="img-fluid w-25 h-100 m-2" src="../img/insta/5.jpg" />
                    </div>
                </div>
            </div>
            <Foot />
        </footer>


    )
}

export default Footer


