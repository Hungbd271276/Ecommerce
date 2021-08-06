import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { SignIn, authenticate, isAuthenTicate } from '../../auth/Index';
import { Link, Redirect, useHistory } from 'react-router-dom';
const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [redirectToRef, setRedirectToRef] = useState(false);

    const { user } = isAuthenTicate();
    const onHandlesubmit = (data) => {
        setLoading(true);
        SignIn(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error);
                    setLoading(false);
                } else {
                    authenticate(dataUser, () => {
                        setRedirectToRef(true)
                        // history.push('/');
                    });
                }
            })

    }

    const redirectUser = () => {
        if (redirectToRef) {
            if (user.role == 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/" />
            }
        }
    }

    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? 'block' : 'none' }}>
            {error}
        </div>
    }
    const showLoading = () => {
        return loading && <div className="alert alert-info">
            <h2>...Loading</h2>
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
                            <h1>Đăng nhập</h1>
                            {showError()}
                            {showLoading()}
                            {redirectUser()}
                            <form onSubmit={handleSubmit(onHandlesubmit)}>
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
                                    <button type="submit" className="btn1 mt-3 mb-5">Sign in</button>
                                </div>
                                <a href="#">Forgot Password</a>
                                <p>Don't have an account? <Link to="/signup">Register here</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signin
