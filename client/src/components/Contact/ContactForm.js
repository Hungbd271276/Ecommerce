import React, { useState } from 'react'
import { useForm } from "react-hook-form";
const ContactForm = ({ onAddContact }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        //console.log(data);
        if (onAddContact(data)) {
            alert('Bạn đã gửi thành công');
        }
        reset('');
    }
    return (
        <div className="col-xl-6" style={{ marginTop: '60px' }}>
            <h2 className="we-class">LIÊN HỆ VỚI CHÚNG TÔI</h2>
            <form onSubmit={handleSubmit(onSubmit)} name="form1" id="add-contact" >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên:</label>
                    <input type="text" className="form-control" id="ten" {...register("name", { required: true })} />
                    {errors.name && <span className="text-danger mt-2">Bạn chưa nhập tên</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email:</label>
                    <input type="email" className="form-control" id="email"  {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger mt-2">Bạn chưa nhập email</span>}
                </div>
                <div className="form group">
                    <label htmlFor="exampleInputEmail1">Số điện thoại:</label>
                    <input type="text" className="form-control" id="sdt" {...register("sdt", { required: true })} />
                    {errors.email && <span className="text-danger mt-2">Bạn chưa nhập số điện thoại</span>}
                </div>
                <div className="form group">
                    <label htmlFor="exampleFormControlTextarea1">Nội dung:</label>
                    <textarea className="form-control" name="text" id="text" rows={9} {...register("text", { required: true })} />
                    {errors.text && <span className="text-danger mt-2">Bạn chưa nhập nội dung</span>}
                </div>
                <button id="name" className="btn btn-primary mt-3" type="submit">Đăng ký</button>
            </form>
        </div>
    )
}

export default ContactForm
