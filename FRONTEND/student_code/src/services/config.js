import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000', // Ensure this matches the API server URL
    headers: {
        'Content-Type': 'application/json'
    }
});




