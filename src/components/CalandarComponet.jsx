import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const CalandarComponet = () => {
  return (
  <div>
    <Calendar
      localizer={localizer}
      
      startAccessor="start"
      endAccessor="end"
      style={{ height:'95vh' }}
    />
  </div>
)}
export default CalandarComponet