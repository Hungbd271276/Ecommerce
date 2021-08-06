import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { signup } from '../../auth/Index';
import { Link } from 'react-router-dom';
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [susscces, setSusscces] = useState(false);

    const onHandlesubmit = (data, e) => {
        signup(data)
            .then(dataInput => {
                if (dataInput.error) {
                    setError(dataInput.error);
                } else {
                    e.target.reset() // xóa tất cả dữ liệu input
                    setError("");
                    setSusscces(true);
                }
            })
    }
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? 'block' : 'none' }}>
            {error}
        </div>
    }
    const showSucces = () => {
        return <div className="alert alert-info" style={{ display: susscces ? 'block' : 'none' }}>
            Bạn đã tạo tài khoản thành công. Click để <Link to="/signin">Đăng nhập</Link>
        </div>
    }
    return (
        <div className="top">
            <section className="Form mt-5 my-5 ">
                <div className="container">
                    <div className="box row  no-gutters">
                        <div className="col-lg-5">
                            <img src="../img/clothes/1.jpg" className="img-fluid image" />
                        </div>
                        <div className="col-lg-7 px-5 pt-5">
                            <h1>Đăng ký</h1>
                            <h4>Sign into your account</h4>
                            {showError()}
                            {showSucces()}
                            <form onSubmit={handleSubmit(onHandlesubmit)}>
                                <div className="form-row">
                                    <input type="text"
                                        placeholder="Name"
                                        className="form-control my-3 p-2"
                                        {...register("name")} />
                                </div>
                                <div className="form-row">
                                    <input type="email"
                                        placeholder="Email"
                                        className="form-control
                                              my-3 p-2"
                                        {...register("email")} />
                                </div>
                                <div className="form-row">
                                    <input type="password"
                                        placeholder="******"
                                        className="form-control 
                                            my-3 p-2"
                                        {...register("password")} />
                                </div>
                                <div className="form-row">
                                    <button type="submit" className="btn1 mt-3 mb-5">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup
