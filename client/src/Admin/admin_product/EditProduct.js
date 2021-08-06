import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

import { useHistory, useParams } from 'react-router-dom';
import ProductAPI from '../../API/ProductAPI'
const EditProduct = ({ onEdit, cates }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const { id } = useParams();
    console.log(id)
    const [products, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductAPI.get(id);
                console.log(data)
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();

    }, []);

    const onHandleSubmit = (data) => {
        const newsData = {
            id: id,
            ...data
        }
        // console.log(newsData);
        const uploads = new FormData();
        uploads.append('name', newsData.name);
        uploads.append('price', newsData.price);
        uploads.append('category', newsData.category);
        uploads.append('photo', newsData.photo[0]);
        uploads.append('description', newsData.description);
        onEdit(id, uploads);
        history.push('/admin/product');

    }
    return (
        <>
            <h2>Sửa Sản phẩm</h2>
            <form onSubmit={handleSubmit(onHandleSubmit)} >
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                            <input type="Text" className="form-control" id="name" defaultValue={products.name}  {...register('name', { required: true })} />
                            {errors.name && <span className="text-danger mt-2">Bạn chưa nhập tên sản phẩm</span>}
                        </div >

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Category</label>
                            {/* <input type="text" className="form-control" id="category" defaultValue={products.category}   {...register('category', { required: true })} /> */}
                            <select name="" id="category" {...register('category', { required: true })}>
                                {
                                    cates.map((category, index) => (
                                        <option value={category._id} key={index}>{category.name}</option>
                                    ))
                                }
                            </select>
                            {errors.category && <span className="text-danger mt-2">Bạn chưa nhập danh mục sản phẩm</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Avatar</label>
                            <input type="file" className="form-control" id="photo" {...register('photo', { required: true })} />
                            <img src={`http://localhost:4000/api/product/photo/${products._id}`} style={{ width: '120px', height: '140px', padding: '10px 0' }} />
                            {errors.photo && <span className="text-danger mt-2">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Price</label>
                            <input type="number" className="form-control" id="price" defaultValue={products.price}   {...register('price', { required: true })} />
                            {errors.price && <span className="text-danger mt-2">This field is required</span>}
                        </div>

                    </div >

                    <div className="col-6">
                        <label htmlFor="exampleInputPassword1">Mô tả sản phẩm</label>
                        <textarea className="form-control" id="description" defaultValue={products.description} rows={15} {...register('description', { required: true })} />
                        {errors.description && <span className="text-danger mt-2">This field is required</span>}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div >
            </form >
        </>
    )
}

export default EditProduct
