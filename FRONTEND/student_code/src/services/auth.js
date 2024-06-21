import api from "./config";

const handleResponse = (data) => {
    localStorage.setItem('token', data.result);
};

const handleError = (error) => {
    console.error(error);
    throw error; 
};

const postAuth = async (url, formData) => {
    try {
        const { data } = await api.post(url, formData);
        handleResponse(data);
        return data;
    } catch (error) {
        handleError(error);
    }
};

const postAuthSignUp = async (formData) => {
    return postAuth('auth/sign-up', formData);
};

const postAuthSignIn = async (formData) => {
    return postAuth('auth/sign-in', formData);
};

export {
    postAuthSignUp,
    postAuthSignIn
};


