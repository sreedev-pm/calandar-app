import { createSlice } from '@reduxjs/toolkit';
import rawData from '../../../dummy.json';

const convertToEvents = (data) => {
  const events = [];

  Object.keys(data).forEach((dateStr) => {
    const items = data[dateStr];

    items.forEach((obj) => {
      const user = Object.keys(obj)[0];
      const count = obj[user];

      const [day, month, year] = dateStr.split('-');
      const eventDate = new Date(`${year}-${month}-${day}`);

      events.push({
        title: `${user} - ${count}`,
        start: eventDate,
        end: eventDate,
      });
    });
  });

  return events;
};

const initialState = {
  rawData: rawData,
  events: convertToEvents(rawData),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    refreshEvents: (state) => {
      state.events = convertToEvents(state.rawData);
    },

    setRawData: (state, action) => {
      state.rawData = action.payload;
      state.events = convertToEvents(action.payload);
    },
  },
});

export const { refreshEvents, setRawData } = calendarSlice.actions;
export default calendarSlice.reducer;

