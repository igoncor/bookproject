import { api } from './config';

import axios from 'axios';


export const getAllBooks = async () => {
  try {
    const response = await api.get('/api/book');
    if (Array.isArray(response.data.result)) {
      return response.data.result; 
    } else {
      throw new Error('API response is not an array');
    }
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export default getAllBooks