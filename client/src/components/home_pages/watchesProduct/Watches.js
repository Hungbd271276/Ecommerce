import React from 'react'
import WatchesProduct from './WatchesProduct'

const Watches = (props) => {
    return (
        <section id="watches" className="my-5" >
            <div className="container text-center mt-5 py-5" >
                <h3>Best Watches</h3>
                <hr className="mx-auto" />
                <p>Here you can check out new product width fair price on rymo.</p>
            </div>
            <WatchesProduct {...props} />
        </section>

    )
}

export default Watches
