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
        start: eventDate.toISOString(),   // <-- FIXED HERE
        end: eventDate.toISOString(),     // <-- FIXED HERE
      });
    });
  });

  return events;
};

const initialState = {
  rawData: rawData,
  events: convertToEvents(rawData),
  chartData: [],
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

    setChartData: (state, action) => {
      const dateStr = action.payload;
      const dataForDate = state.rawData[dateStr];
      if (dataForDate) {
        state.chartData = dataForDate.map((obj) => {
          const user = Object.keys(obj)[0];
          return { user, value: obj[user] };
        });
      } else {
        state.chartData = [];
      }
    },
  },
});

export const { refreshEvents, setRawData, setChartData } = calendarSlice.actions;
export default calendarSlice.reducer;
