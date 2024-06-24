import api from "./config";
import {getToken} from "../services/auth";

const getAllFavorites = async () => {
    try {
        const token = getToken();
        const { data } = await api.get('favorites', {
            headers: {
                Authorization: token
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

export {
    getAllFavorites
}