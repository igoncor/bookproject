import api from "./config";

const handleResponse = (data, formData) => {
    if (formData.rememberMe) {
        localStorage.setItem('token', data.result);
      } else {
        sessionStorage.setItem('token', data.result);
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

export {
    postAuthSignUp,
    postAuthSignIn
};


