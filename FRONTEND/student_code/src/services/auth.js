import api from "./config";

const postAuthSignUp = async (formData) => {
    try {
        const {data} = await api.post('auth/signup', formData)
        localStorage.setItem('authToken', data.result)
        return data
    } catch (error) {
        console.log(error)
    }
}


const postVerifyToken = async (authToken) => {
    try {
        const response = await api.post('auth/verify-token', null, {
        headers: {
            Authorization: authToken // Setear el token JWT en el header Authorization
        }
        });
        return response.data.isValid;
    } catch (error) {
        console.error('Error al verificar el token:', error);
        return false;
    }
}


export{
    postAuthSignUp,
    postVerifyToken
}