import api from "./config";

const handleResponse = (data, formData) => {
    const {userId, token} = data.result;
    localStorage.setItem('userId', userId);
    if (formData.rememberMe) {
        localStorage.setItem('token',token);
      } else {
        sessionStorage.setItem('token', token);
      }
};

const handleError = (error) => {
    console.error(error);
    throw error; 
};

const postAuth = async (url, formData) => {
    try {
        const { data } = await api.post(url, formData);
        handleResponse(data, formData);
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


const getToken = () => {
    return sessionStorage.getItem('token') || localStorage.getItem('token');
};



export {
    postAuthSignUp,
    postAuthSignIn,
    getToken
};


