import api from "./config";

const postAuthSignUp = async (formData) => {
    try {
        const {data} = await api.post('auth/signup', formData)
        localStorage.setItem('token', data.result)
        return data
    } catch (error) {
        console.log(error)
    }
}
export{
    postAuthSignUp
}