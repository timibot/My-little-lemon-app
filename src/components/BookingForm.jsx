import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const isFormValid = date !== '' && time !== '' && guests >= 1 && guests <= 10 && occasion !== '';

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion
    };
    submitForm(formData); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="" disabled>Select a time</option> 
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>{availableTime}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
     <input 
        type="submit" 
        value="Make Your reservation" 
        disabled={!isFormValid}
        aria-label="Submit your table reservation for Little Lemon"
        style={{ 
          padding: '10px', 
          backgroundColor: isFormValid ? '#f4ce14' : '#cccccc',
          color: isFormValid ? 'black' : '#666666',
          fontWeight: 'bold', 
          cursor: isFormValid ? 'pointer' : 'not-allowed'
        }} 
      />
    </form>
  );
}

export default BookingForm;