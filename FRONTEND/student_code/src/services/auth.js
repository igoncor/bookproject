import api from "./config";


const postAuthSignUp = async (formData) => {
    try {
        const {data} = await api.post('auth/sign-up', formData);
        
        return data
    } catch (error) {
        console.error(error)
    }
};


const postAuthSignIn = async (formData) => {
    try {
        const {data} = await api.post('auth/sign-in', formData);
        
        return data
    } catch (error) {
        console.error(error)
    }
};


const getToken = () => {
    return sessionStorage.getItem('token') || localStorage.getItem('token');
};



export {
    postAuthSignUp,
    postAuthSignIn,
    getToken
};


