<<<<<<< HEAD
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/'

    })

    export default api
=======
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000', // Ensure this matches the API server URL
    headers: {
        'Content-Type': 'application/json'
    }
});




>>>>>>> f947cefb81d759c3f595fd9358e6de3421dccc46
