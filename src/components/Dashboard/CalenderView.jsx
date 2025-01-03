import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format, isBefore, isSameDay } from 'date-fns';

const CalendarView = ({ companies }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleDateClick = (date) => {
    setSelectedDate(date);

    // Filter events for the selected date
    const events = companies.flatMap((company) => {
      const { nextCommunication, lastCommunications } = company;

      const eventsForDate = lastCommunications
        .filter((comm) => isSameDay(new Date(comm.date), date))
        .map((comm) => ({
          company: company.name,
          type: comm.type,
          date: comm.date,
          notes: comm.notes,
        }));

      if (isSameDay(new Date(nextCommunication.date), date)) {
        eventsForDate.push({
          company: company.name,
          type: nextCommunication.type,
          date: nextCommunication.date,
          notes: 'Scheduled Communication',
        });
      }

      return eventsForDate;
    });

    setSelectedEvents(events);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const today = new Date();
      const overdue = companies.some(
        (company) => isBefore(new Date(company.nextCommunication.date), today) && isSameDay(new Date(company.nextCommunication.date), date)
      );
      const dueToday = companies.some(
        (company) => isSameDay(new Date(company.nextCommunication.date), date)
      );

      if (overdue) return 'bg-red-300';
      if (dueToday) return 'bg-yellow-300';
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Calendar View</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Calendar
            onChange={handleDateClick}
            value={selectedDate}
            tileClassName={tileClassName}
          />
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-lg font-bold">Events for {format(selectedDate, 'PP')}:</h3>
          {selectedEvents.length > 0 ? (
            <ul className="list-disc list-inside mt-4">
              {selectedEvents.map((event, idx) => (
                <li key={idx} className="mt-2">
                  <strong>{event.type}</strong> with <em>{event.company}</em>: {event.notes}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-4">No events for this day.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
