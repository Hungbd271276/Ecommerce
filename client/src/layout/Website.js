import React from 'react'
import Footer from '../components/home_pages/footer/Footer'
import Header from '../components/home_pages/header/Header'



const LayoutWebsite = (props) => {
    return (

        <div>
            <div>
                <Header {...props} />
            </div>
            <div>
                {props.children}
                <Footer />
            </div>
        </div>
    )
}

export default LayoutWebsite 