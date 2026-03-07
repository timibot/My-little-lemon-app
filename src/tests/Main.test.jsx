import { describe, test, expect } from 'vitest';
import { initializeTimes, updateTimes } from '../components/timeReducer';

describe('timesReducer Functions', () => {
  test('initializeTimes returns a non-empty array', () => {
    const times = initializeTimes();
    expect(times.length).toBeGreaterThan(0);
  });
  test('updateTimes returns a non-empty array when a date is selected', () => {
    const currentState = ['17:00', '18:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2026-03-10' };
    const newState = updateTimes(currentState, action);
    expect(newState.length).toBeGreaterThan(0);
  });
});