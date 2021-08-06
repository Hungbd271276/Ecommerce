import { axiosClient } from './axiosClient';

const ContactAPI = {
    getAll() {
        const url = `/contact`;
        return axiosClient.get(url);
    },
    add(contact) {
        const url = `/contacts`;
        return axiosClient.post(url, contact);
    },
    remove(id) {
        const url = `/contact/${id}`
        return axiosClient.delete(url)
    }

}
export default ContactAPI;