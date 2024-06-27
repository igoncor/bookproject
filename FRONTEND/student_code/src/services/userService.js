import api from "./config";
import {getToken} from "./auth";

const getUserProfile = async () => {
    try {
        const token = getToken();
        const { data } = await api.get('user/profile', {
            headers: {
                Authorization: token
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

const getOneUser = async (id) => {
    try {
        const token = localStorage.getItem('token');
        const { data } = await api.get(`user/${id}`, {
            headers: {
                Authorization: token
            }
        })
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}


export {
    getUserProfile,
    getOneUser
}