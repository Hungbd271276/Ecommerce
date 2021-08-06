import { axiosClient } from './axiosClient';
import { isAuthenTicate } from '../auth/Index';
const { user, token } = isAuthenTicate();

const CategoryAPI = {
  getAll() {
    const url = `/categories`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  },
  add(category) {
    const url = `/category/create/${user._id}`;
    return axiosClient.post(url, category, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  remove(id) {
    const url = `/category/create/${user._id}/${id}`;
    return axiosClient.delete(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  update(id, data) {   // id là sản phẩm cần sửa && data là cái sản phẩm mới
    const url = `/category/create/${user._id}/${id}`;
    return axiosClient.put(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
export default CategoryAPI;