import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'


import { refreshEvents } from '../store/slices/calandarSlices.js';



const localizer = momentLocalizer(moment)
const CalandarComponet = () => {
  const events = useSelector((state) => state.calendar.events);
  useEffect(() => {
    dispatch(refreshEvents())
  }, []);
  const dispatch = useDispatch();
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