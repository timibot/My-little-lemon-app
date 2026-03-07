import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import BookingForm from '../components/BookingForm';

describe('BookingForm JavaScript Validation', () => {

  // Test 1: The Invalid State
  test('Submit button is disabled when form is empty', () => {
    // Render the form with fake props
    render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={vi.fn()} submitForm={vi.fn()} />);
    
    // Find the submit button
    const submitButton = screen.getByDisplayValue("Make Your reservation");
    
    // Expect it to be locked because date and time are empty!
    expect(submitButton).toBeDisabled();
  });

  // Test 2: The Valid State
  test('Submit button is enabled when all fields are completely filled', () => {
    render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={vi.fn()} submitForm={vi.fn()} />);
    
    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByDisplayValue("Make Your reservation");

    // Mock user and fill out the form using fireEvent
    fireEvent.change(dateInput, { target: { value: '2026-03-10' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

    expect(submitButton).not.toBeDisabled();
  });
});