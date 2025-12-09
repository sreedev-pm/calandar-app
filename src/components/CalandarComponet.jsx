import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import data from '../../dummy.json'
import { useState } from 'react'

const localizer = momentLocalizer(moment)

const CalandarComponet = () => {
  const initializeEvents = () => {
    const events = [];

    Object.keys(data).forEach(dateStr => {
      const items = data[dateStr];

      items.forEach(obj => {
        const user = Object.keys(obj)[0];
        const count = obj[user];
        const [day, month, year] = dateStr.split("-");
        const eventDate = new Date(`${year}-${month}-${day}`);

        events.push({
          title: `${user} - ${count}`,
          start: eventDate,
          end: eventDate
        });
      });
    });

    return events;
  }
  const[events,setEvents]=useState(initializeEvents());
  const handleSelectSlot = ({ start, end }) => {
    console.log("Selected slot:", start, end);
  }
  return (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      selectable
      onSelectSlot={handleSelectSlot}
      startAccessor="start"
      endAccessor="end"
      style={{ height:'95vh' }}
    />
  </div>
)}
export default CalandarComponet