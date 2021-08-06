import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import CategoryAPI from '../../API/CategoryAPI';
const EditCategory = ({ onCateEdit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const { id } = useParams();
    const [categorys, setCategory] = useState({});
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await CategoryAPI.get(id);
                setCategory(data);
            } catch (error) {
                console.log(error);
            }
        }
        getCategory();
    }, []);
    const onHandleSubmit = (data) => {
        const newData = {
            id: id,
            ...data
        }
        const uploads = new FormData();
        uploads.append("name", newData.name);
        uploads.append("photo", newData.photo[0]);
        onCateEdit(id, uploads);
        history.push('/admin/category');
    }
    return (
        <>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><strong>Tên danh mục</strong></label>
                    <input type="Text" className="form-control" id="name" defaultValue={categorys.name} {...register('name', { required: true })} />
                    {errors.name && <span className="text-danger mt-2">Bạn cần nhập tên danh mục</span>}
                </div >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ảnh danh mục</label>
                    <input type="file" className="form-control" id="photo" {...register('photo', { required: true })} />
                    <img src={`http://localhost:4000/api/category/photo/${categorys._id}`} style={{ width: '120px', height: '140px', padding: '10px 0' }} />
                    {errors.photo && <span className="text-danger mt-2">This field is required</span>}
                </div >
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        </>
    )
}
export default EditCategory
