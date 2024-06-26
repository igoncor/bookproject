import api from "./config";

const createFavorite = async (bookId) => {
    try {
        const token = localStorage.getItem('token');
        const { data } = await api.post('favorites', { bookId }, {
            headers: {
                Authorization: token
            }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export {    
    createFavorite
};