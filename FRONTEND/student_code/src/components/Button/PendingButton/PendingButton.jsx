import React from 'react'

import { createPending } from '../../../services/createPendingService.js';




function PendingButton() {
     const addToPending = async (bookId) => {
    try {
     
      const response = await createPending(bookId);
      if (response) {
        console.log('Book has been added to favorites:', response);
      }
    } catch (error) {
      console.error('Error adding book to favorites:', error);
    }
  };

  return (
    <button onClick={() => addToPending (book.id)}>Pendientes</button>
  )
}

export default PendingButton