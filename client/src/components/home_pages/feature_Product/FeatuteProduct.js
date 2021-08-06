import React from 'react'
import ProductFea from './ProductFea'

const FeatuteProduct = (props) => {
    return (
        <section id="feature" className="my-5 pb-5" >
            <div className="container text-center mt-5 py-5">
                <h3>Our Featured</h3>
                <hr className="mx-auto" />
                <p>Here you can check out new product width fair price on rymo.</p>
            </div>
            <ProductFea {...props} />
        </section>
    )
}

export default FeatuteProduct
