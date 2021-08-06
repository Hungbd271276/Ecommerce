import React, { useEffect, useState } from 'react'
import Oder from './Oder';
const Cart = (props) => {
    const { values } = props;
    const [cart, setcart] = values.cart;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)
            setTotal(res);
        }
        getTotal();
    }, [cart])

    const reduction = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity == 1 ? item.quantity = 1 : item.quantity -= 1;
            }
        })
        setcart([...cart])
    }
    const increase = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity += 1
            }
        })
        setcart([...cart])
    }

    const RemoveProduct = (id) => {
        if (window.confirm('Bạn có muốn xóa không')) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1);
                }
            })
            setcart([...cart]);
        }
    }
    if (cart.length == 0) {
        return <h2 style={{ textAlign: "center", fontSize: '5rem', paddingTop: '100px' }}>Cart Empty</h2>
    }
    return (
        <div className="container" style={{ marginTop: 150 }}>
            <div className="row">
                <div className="col-xl-8 col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((carts, index) => (
                                    <tr key={carts._id}>
                                        <th scope="row">{index}</th>
                                        <td>{carts.name}</td>
                                        <td> <img className="img-fluid mb-3" src={`http://localhost:4000/api/product/photo/${carts._id}`} width="80px" height="80px" /></td>
                                        <td>{carts.price} $</td>
                                        <td className="counts">
                                            <button type="submit" onClick={() => reduction(carts._id)}> - </button>
                                            <span>{carts.quantity}</span>
                                            <button type="submit" onClick={() => increase(carts._id)}  > + </button>
                                        </td>
                                        <td><button onClick={() => RemoveProduct(carts._id)}>X</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="total">
                        <h3>Total: {total} $</h3>
                    </div>
                </div>
                <div className="col-xl-4 col-md-12">
                    <h2>Thông tin thanh toán</h2>
                    <Oder />
                </div>
            </div>
        </div>
    )
}

export default Cart
