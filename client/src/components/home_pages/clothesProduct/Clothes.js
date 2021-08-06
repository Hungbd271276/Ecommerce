import React from 'react'
import ClothesProduct from './ClothesProduct'

const Clothes = (props) => {
    return (
        <section id="clothes" className="my-5" >
            <div className="container text-center mt-5 py-5">
                <h3>Dresses &amp; Jumpsuits</h3>
                <hr className="mx-auto" />
                <p>Here you can check out new product width fair price on rymo.</p>
            </div>
            <ClothesProduct {...props} />
        </section>

    )
}

export default Clothes
