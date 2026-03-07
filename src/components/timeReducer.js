import { fetchAPI } from '../api';

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today); 
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const selectedDate = new Date(action.payload);
      return fetchAPI(selectedDate); 
    }
    default:
      return state;
  }
};