import api from "./config";

const createPending = async (bookId) => {
    try {
        console.log(bookId)
        const token = localStorage.getItem('token');
        const { data } = await api.post('favorites', { bookId } , {
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
    createPending
};