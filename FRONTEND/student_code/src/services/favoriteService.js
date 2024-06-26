import api from "./config";

const getMyFavorites = async () => {
    try {
        const token = localStorage.getItem('token');
        const { data } = await api.get('favorites/me', {
            headers: {
                Authorization: token
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

const deleteFavorite = async (id) => {
    try {
        const token = localStorage.getItem('token');
        const { data } = await api.delete(`favorites/${id}`, {
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
    getMyFavorites,
    deleteFavorite
}