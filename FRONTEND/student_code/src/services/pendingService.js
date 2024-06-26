import api from "./config";

const getMyPendings = async () => {
    try {
        const token = localStorage.getItem('token');
        const { data } = await api.get('pendings/me', {
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
    getMyPendings
}