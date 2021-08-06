import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductAPI from '../../API/ProductAPI'
import ProductRenated from './ProductRenated'
const DetailProduct = (props) => {
    const { values } = props;
    const addCart = values.AddCart
    const { id } = useParams();

    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductAPI.get(id);
                setProduct(data)
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
    }, [product]);
    return (
        <>
            <section className="container sproduct my-5 pt-5">
                <div className="row mt-5">
                    <div className="col-lg-5 col-md-12 col-12">
                        <img src={`http://localhost:4000/api/product/photo/${product._id}`} className="img-fluid w-100 pb-1" id="MainImg" />
                        <div className="small-img-group">
                            <div className="small-img-col">
                                <img src="../img/shop/1.jpg" width="100%" className="small-img" />
                            </div>
                            <div className="small-img-col">
                                <img src="../img/shop/2.jpg" width="100%" className="small-img" />
                            </div>
                            <div className="small-img-col">
                                <img src="../img/shop/3.jpg" width="100%" className="small-img" />
                            </div>
                            <div className="small-img-col">
                                <img src="../img/shop/4.jpg" width="100%" className="small-img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <h6>Home / T-Shirt</h6>
                        <h3 className="py-4">{product.name}</h3>
                        <h2>{product.price}$</h2>
                        <h4>Số lượng: {product.quantity}</h4>
                        <button className="buy-btn" onClick={() => addCart(product)}>Add To Cart</button>
                        <h4 className="mt-5 mb-5">Mô tả sản phẩm</h4>
                        <span>{product.description}</span>
                    </div>
                </div>
            </section>
            <section id="feature" className="my-5 pb-5">
                <div className="container text-center mt-5 py-5">
                    <h3>Related Products</h3>
                    <hr className="mx-auto" />
                    <p>Here you can check out new product width fair price on rymo.</p>
                </div>
                <ProductRenated {...props} />
            </section>
        </>
    )
}
export default DetailProduct

