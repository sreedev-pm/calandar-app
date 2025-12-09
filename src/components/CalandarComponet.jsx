import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState, useMemo } from 'react'
import Modal from './Modal.jsx'
import BarComponent from './BarComponent.jsx'

import { refreshEvents, setChartData } from '../store/slices/calandarSlices.js';

const localizer = momentLocalizer(moment)

const CalandarComponet = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.calendar.events);
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Convert ISO strings back to Date objects only for rendering
  const parsedEvents = useMemo(() => {
    return events.map(e => ({
      ...e,
      start: new Date(e.start),
      end: new Date(e.end),
    }));
  }, [events]);

  useEffect(() => {
    dispatch(refreshEvents());
  }, [dispatch]);

  const handleSelectSlot = ({ start }) => {
    const formatted = moment(start).format('DD-MM-YYYY');
    setIsModalOpen(true);
    dispatch(setChartData(formatted));
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={parsedEvents}
        selectable
        onSelectSlot={handleSelectSlot}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '95vh' }}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="BarChart"
      >
        <BarComponent />
      </Modal>
    </div>
  );
};

export default CalandarComponet;
