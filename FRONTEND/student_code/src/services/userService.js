import api from "./config.js";

const getUserProfile = async () => {
    try {
        const { data } = await api.get('user/profile', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export async function getUserBooks(id) {
    try {
        const { data } = await api.get(`/user/booking/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}

export {
    getUserProfile,
};
