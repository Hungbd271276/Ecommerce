import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const AddProduct = ({ onAdd, cates }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    // console.log(props.cates)
    const onHandleSubmit = (data) => {
        //console.log(data);
        const uploads = new FormData();
        uploads.append("name", data.name);
        uploads.append("price", data.price);
        uploads.append("category", data.category);
        uploads.append("photo", data.photo[0]);
        uploads.append("description", data.description);
        history.push('/admin/product');
        onAdd(uploads, data);
        console.log(uploads);
    }
    return (
        <>
            <h2>Thêm Sản phẩm</h2>
            <form onSubmit={handleSubmit(onHandleSubmit)} encType='multipart/form-data'>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                            <input type="Text" className="form-control" id="name" {...register('name', { required: true })} />
                            {errors.name && <span className="text-danger mt-2">This field is required</span>}
                        </div >

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Avatar</label>
                            <input type="file" className="form-control" id="photo" {...register('photo', { required: true })} />
                            {errors.photo && <span className="text-danger mt-2">This field is required</span>}
                        </div>



                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Price</label>
                            <input type="number" className="form-control" id="price" {...register('price', { required: true })} />
                            {errors.price && <span className="text-danger mt-2">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Category</label><br />
                            {/* <input type="text" className="form-control" id="category" {...register('category', { required: true })} /> */}
                            <select name="" id="category" {...register('category', { required: true })}>
                                {
                                    cates.map((category, index) => (
                                        <option value={category._id} key={index}>{category.name}</option>
                                    ))
                                }
                            </select>
                            {errors.category && <span className="text-danger mt-2">This field is required</span>}
                        </div>


                    </div >

                    <div className="col-6">
                        <label htmlFor="exampleInputPassword1">Mô tả sản phẩm</label>
                        <textarea className="form-control" id="description" rows={15} {...register('description', { required: true })} />
                        {/* <div id="editor">
                            <Editor />
                        </div> */}

                        {errors.description && <span className="text-danger mt-2">This field is required</span>}
                    </div>

                </div >
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        </>
    )
}

export default AddProduct
