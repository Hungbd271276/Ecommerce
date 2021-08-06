import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
const AddCategory = ({ addCate }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onHandleSubmit = (data) => {
        const uploads = new FormData();
        uploads.append("name", data.name);
        uploads.append("photo", data.photo[0]);
        addCate(uploads);
        history.push('/admin/category');
    }
    return (
        <>
            <form onSubmit={handleSubmit(onHandleSubmit)} >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên danh mục</label>
                    <input type="Text" className="form-control" id="name" {...register('name', { required: true })} />
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div >

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ảnh danh mục</label>
                    <input type="file" className="form-control" id="photo" {...register('photo', { required: true })} />
                    {errors.photo && <span className="text-danger mt-2">This field is required</span>}
                </div >
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        </>
    )
}

export default AddCategory
