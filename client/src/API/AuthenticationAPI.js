import { axiosClient } from './axiosClient';

const AuthenAPI = {
  get(id){
    const url = `/user/${id}`;
    return axiosClient.get(url);
  },
  signup(signups) {
    const url = `/signup`;
    return axiosClient.post(url, signups)
  },
  signin(signin) {
    const url = `/signin`;
    return axiosClient.post(url, signin)
  },
  signout() {
    const url = `/signout`;
    return axiosClient.get(url)
  }
}
export default AuthenAPI;