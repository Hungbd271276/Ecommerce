import React from 'react'

const Foot = () => {
    return (
        <div className="coppyright mt-5" >
            <div className="row container mx-auto">
                <div className="col-lg-3 col-m-6 col-12 mb-4">
                    <img src="../img/payment.png" />
                </div>
                <div className="col-lg-4 col-m-6 col-12 text-nowrap mb-2">
                    <p>rymo eCommerce © 2021. All Rights Reserved</p>
                </div>
                <div className="col-lg-4 col-m-6 col-12">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
            </div>
        </div>
    )
}

export default Foot
