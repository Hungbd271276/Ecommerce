import { axiosClient } from './axiosClient';
import { isAuthenTicate } from '../auth/Index';
const { user, token } = isAuthenTicate();
const ProductAPI = {
  getAll() {
    const url = `/products`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  add(product) {
    const url = `/product/create/${user._id}`;
    return axiosClient.post(url, product, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  remove(id) {
    const url = `/product/create/${user._id}/${id}`;
    return axiosClient.delete(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  update(id, data) {   // id là sản phẩm cần sửa && data là cái sản phẩm mới
    const url = `/product/create/${user._id}/${id}`;
    return axiosClient.put(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
export default ProductAPI;