import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './timeReducer';
import { submitAPI } from '../api'; 

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate(); 


  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmed'); // Drive the user to the new page!
    }
  };

  return (
    <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Reserve a Table</h2>
      
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        submitForm={submitForm} // Pass it down as a prop
      />
    </main>
  );
}

export default Main;