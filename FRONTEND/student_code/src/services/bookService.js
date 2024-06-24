import api from "./config";
import {getToken} from "../services/auth";

const getBookById = async (id) => {
    try {
        const token = getToken();
        const { data } = await api.get(`book/${id}`, {
            headers: {
                Authorization: token
            }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}

export {
    getBookById
}